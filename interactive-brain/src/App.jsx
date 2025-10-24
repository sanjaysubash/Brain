import React, { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF, Html, Loader } from '@react-three/drei'
import * as THREE from 'three'

/**
 * REGION metadata
 * Edit text here if you want to change the info shown on click.
 */
const REGION_INFO = {
  Frontal: {
    title: 'Frontal Lobe',
    short: 'Decision-making, planning, voluntary movement, speech (Broca area).',
    details:
      'The frontal lobe is involved in higher cognitive functions such as planning, reasoning, problem-solving, and controlling voluntary movements and speech. It also contributes to personality and emotional regulation.'
  },
  Parietal: {
    title: 'Parietal Lobe',
    short: 'Sensory integration, spatial attention, touch perception.',
    details:
      'The parietal lobe processes sensory information from different parts of the body and integrates visual and spatial information to guide movement and attention.'
  },
  Temporal: {
    title: 'Temporal Lobe',
    short: 'Memory, language comprehension, auditory processing.',
    details:
      'The temporal lobe plays a key role in processing auditory information and is important for the formation of long-term memory and language comprehension.'
  },
  Occipital: {
    title: 'Occipital Lobe',
    short: 'Primary visual processing center.',
    details:
      'Primarily responsible for processing visual information, including identification of shapes, colors, and motion.'
  },
  Cerebellum: {
    title: 'Cerebellum',
    short: 'Coordination, balance, fine motor control.',
    details:
      "Although small in volume, the cerebellum contains a large fraction of the brain's neurons and is essential for motor coordination, timing, and motor learning."
  },
  Brainstem: {
    title: 'Brainstem',
    short: 'Autonomic functions: breathing, heart rate, arousal.',
    details:
      'The brainstem controls basic life-sustaining functions such as breathing, heart rate, and sleep-wake cycles, and serves as a conduit between the brain and spinal cord.'
  }
}

/* map mesh name -> region key by substring matching */
function nameToRegionKey(name) {
  if (!name) return null
  const n = name.toLowerCase()
  
  // Log mesh names for debugging
  console.log('Mesh name:', name, '-> normalized:', n)
  
  // More comprehensive matching patterns
  if (n.includes('frontal') || n.includes('front')) return 'Frontal'
  if (n.includes('parietal') || n.includes('pariet')) return 'Parietal'
  if (n.includes('temporal') || n.includes('tempor')) return 'Temporal'
  if (n.includes('occipital') || n.includes('occipit')) return 'Occipital'
  if (n.includes('cerebell') || n.includes('cerebel')) return 'Cerebellum'
  if (n.includes('brainstem') || n.includes('stem') || n.includes('brain_stem')) return 'Brainstem'
  
  // Additional common brain region names
  if (n.includes('cortex') || n.includes('lobe')) {
    if (n.includes('front')) return 'Frontal'
    if (n.includes('pariet')) return 'Parietal'
    if (n.includes('temp')) return 'Temporal'
    if (n.includes('occip')) return 'Occipital'
  }
  
  // Handle numbered patterns (001, 002, etc.)
  if (n.includes('001') || n.includes('_1') || n.includes('1_')) return 'Frontal'
  if (n.includes('002') || n.includes('_2') || n.includes('2_')) return 'Parietal'
  if (n.includes('003') || n.includes('_3') || n.includes('3_')) return 'Temporal'
  if (n.includes('004') || n.includes('_4') || n.includes('4_')) return 'Occipital'
  if (n.includes('005') || n.includes('_5') || n.includes('5_')) return 'Cerebellum'
  if (n.includes('006') || n.includes('_6') || n.includes('6_')) return 'Brainstem'
  
  // Create a more diverse distribution based on mesh index or position
  const meshIndex = name.length % 6  // Use string length for distribution
  const regions = ['Frontal', 'Parietal', 'Temporal', 'Occipital', 'Cerebellum', 'Brainstem']
  
  // Use a different hash function for better distribution
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash + name.charCodeAt(i)) & 0xffffffff
  }
  
  const regionIndex = Math.abs(hash) % regions.length
  const assignedRegion = regions[regionIndex]
  
  console.log(`Assigning mesh "${name}" to region: ${assignedRegion} (hash: ${hash}, index: ${regionIndex})`)
  
  return assignedRegion
}

/* BrainScene component - loads GLB and sets per-mesh opacity/emissive depending on selection */
function BrainScene({ url = '/models/brain_areas.glb', selectedRegion, setSelectedRegion, isolationOpacity }) {
  const gltf = useGLTF(url)
  const scene = gltf.scene
  const [hoveredRegion, setHoveredRegion] = useState(null)
  const [hoveredMesh, setHoveredMesh] = useState(null)
  
  // Define colors for each brain region
  const regionColors = {
    'Frontal': 0x3B82F6,    // Blue
    'Parietal': 0x10B981,   // Green  
    'Temporal': 0xF59E0B,   // Orange
    'Occipital': 0xEF4444,  // Red
    'Cerebellum': 0x8B5CF6, // Purple
    'Brainstem': 0x06B6D4   // Cyan
  }
  
  // gather meshes and prepare materials
  const meshes = useMemo(() => {
    const m = []
    scene.traverse((child) => {
      if (child.isMesh) {
        // clone material so changes don't affect shared material
        child.material = child.material.clone()
        child.material.transparent = true
        const regionKey = nameToRegionKey(child.name)
        child.userData.regionKey = regionKey
        
        // Set base color for the region
        if (regionKey && regionColors[regionKey]) {
          child.material.color.setHex(regionColors[regionKey])
        } else {
          // Default color for unrecognized parts
          child.material.color.setHex(0xcccccc)
        }
        
        m.push(child)
      }
    })
    console.log('Total meshes found:', m.length)
    console.log('Mesh details:', m.map(mesh => ({ name: mesh.name, region: mesh.userData.regionKey })))
    return m
  }, [scene, regionColors])

  useEffect(() => {
    meshes.forEach((mesh) => {
      const r = mesh.userData.regionKey
      const isHovered = mesh === hoveredMesh
      
      if (!selectedRegion) {
        // Show all parts with their region colors
        mesh.material.opacity = 1
        if (r && regionColors[r]) {
          mesh.material.color.setHex(regionColors[r])
          // Add hover effect
          if (isHovered) {
            mesh.material.emissive.setHex(0x333333)
          } else {
            mesh.material.emissive.setHex(0x000000)
          }
        }
      } else if (r === selectedRegion) {
        // Highlight selected region
        mesh.material.opacity = 1
        if (regionColors[r]) {
          mesh.material.color.setHex(regionColors[r])
          mesh.material.emissive.setHex(isHovered ? 0x666666 : 0x444444)
        }
      } else {
        // Dim other parts
        mesh.material.opacity = isolationOpacity
        if (r && regionColors[r]) {
          mesh.material.color.setHex(regionColors[r])
        }
        if (isHovered) {
          mesh.material.emissive.setHex(0x222222)
        } else {
          mesh.material.emissive.setHex(0x000000)
        }
      }
      mesh.material.depthWrite = mesh.material.opacity > 0.5
      mesh.material.needsUpdate = true
    })
  }, [meshes, selectedRegion, isolationOpacity, regionColors, hoveredMesh])

  function onPointerDown(e) {
    e.stopPropagation()
    const picked = e.object
    const region = picked.userData.regionKey || nameToRegionKey(picked.name)
    console.log('Clicked region:', region, 'from mesh:', picked.name)
    setSelectedRegion((prev) => (prev === region ? null : region))
  }

  function onPointerEnter(e) {
    e.stopPropagation()
    const picked = e.object
    const region = picked.userData.regionKey || nameToRegionKey(picked.name)
    setHoveredMesh(picked)
    setHoveredRegion(region)
    document.body.style.cursor = 'pointer'
  }

  function onPointerLeave(e) {
    e.stopPropagation()
    setHoveredMesh(null)
    setHoveredRegion(null)
    document.body.style.cursor = 'default'
  }

  return (
    <>
      <primitive 
        object={scene} 
        onPointerDown={onPointerDown}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
      {hoveredRegion && (
        <Html
          position={[0, 2, 0]}
          center
          style={{
            pointerEvents: 'none',
            transform: 'translate3d(0, -50px, 0)'
          }}
        >
          <div style={{
            background: 'rgba(0, 212, 255, 0.9)',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0, 212, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            {REGION_INFO[hoveredRegion]?.title || hoveredRegion}
          </div>
        </Html>
      )}
    </>
  )
}

/* Error Boundary for handling model loading errors */
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            textAlign: 'center',
            maxWidth: '300px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#dc2626' }}>Brain Model Missing</h3>
            <p style={{ margin: '10px 0', fontSize: '14px' }}>Please place a 3D brain model file at:</p>
            <code style={{ 
              background: '#f3f4f6', 
              padding: '4px 8px', 
              borderRadius: '4px',
              fontSize: '12px'
            }}>/public/models/brain-annotated.glb</code>
            <p style={{ marginTop: '15px', fontSize: '13px', color: '#666' }}>
              You can download free brain models from:
              <br />• Sketchfab (free models)
              <br />• OpenNeuro (scientific models)  
              <br />• NIH 3D Print Exchange
            </p>
          </div>
        </Html>
      )
    }

    return this.props.children
  }
}

/* Main App */
export default function App() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [isolationOpacity, setIsolationOpacity] = useState(0.12)

  const description = selectedRegion ? REGION_INFO[selectedRegion] : null

  function resetView() {
    setSelectedRegion(null)
    setIsolationOpacity(0.12)
  }

  return (
    <div className="app-container">
      {/* Aaruchudar Header with Brain Visual */}
      <header className="header">
        <div className="header-content">
          <div className="brand-section">
            <div className="brain-visual"></div>
            <div className="brand-text">
              <h1 className="company-name">AARUCHUDAR</h1>
              <p className="slogan">You understand, we rewire</p>
            </div>
          </div>
          <div className="neural-stats">
            <div className="stat-item">
              <div className="stat-value">6</div>
              <div className="stat-label">Brain Regions</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">360°</div>
              <div className="stat-label">Neural View</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">AI</div>
              <div className="stat-label">Powered</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Frame */}
      <main className="main-content">
        <div className="content-frame">
          <div className="container">
            {/* Control Panel */}
            <div className="left">
              <div className="card">
                <h2 className="neural-title">Interactive 3D Brain</h2>
                <p className="description">Rotate the neural model with mouse drag, zoom with scroll. Click any brain region to isolate it and explore neural pathways.</p>

                <div style={{ marginTop: 20 }}>
                  <h3 className="info-title" style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold' }}>Neural Analysis</h3>
                  {!description && (
                    <p style={{ marginTop: 12, color: '#cbd5e1', fontSize: '14px' }}>
                      No region selected — click a cortex area on the 3D brain model to begin neural analysis.
                    </p>
                  )}

                  {description && (
                    <div style={{ marginTop: 12 }}>
                      <div className="info-title" style={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>{description.title}</div>
                      <div className="info-short" style={{ color: '#06ffa5', fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{description.short}</div>
                      <div className="info-details" style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', marginTop: '10px' }}>{description.details}</div>
                    </div>
                  )}

                  <div className="controls">
                    <button 
                      className={`button ${!selectedRegion ? 'primary' : ''}`} 
                      onClick={() => setSelectedRegion(null)}
                      style={{
                        backgroundColor: !selectedRegion ? '#00d4ff' : 'rgba(0, 212, 255, 0.15)',
                        borderColor: '#00d4ff',
                        color: !selectedRegion ? '#000' : '#ffffff',
                        fontWeight: '600'
                      }}
                    >
                      Show All
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Frontal' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Frontal')} 
                      style={{
                        backgroundColor: selectedRegion === 'Frontal' ? '#3B82F6' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Frontal' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Frontal' ? '#1D4ED8' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      1. Frontal
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Parietal' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Parietal')} 
                      style={{
                        backgroundColor: selectedRegion === 'Parietal' ? '#10B981' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Parietal' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Parietal' ? '#059669' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      2. Parietal
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Temporal' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Temporal')} 
                      style={{
                        backgroundColor: selectedRegion === 'Temporal' ? '#F59E0B' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Temporal' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Temporal' ? '#D97706' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      3. Temporal
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Occipital' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Occipital')} 
                      style={{
                        backgroundColor: selectedRegion === 'Occipital' ? '#EF4444' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Occipital' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Occipital' ? '#DC2626' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      4. Occipital
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Cerebellum' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Cerebellum')} 
                      style={{
                        backgroundColor: selectedRegion === 'Cerebellum' ? '#8B5CF6' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Cerebellum' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Cerebellum' ? '#7C3AED' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      5. Cerebellum
                    </button>
                    <button 
                      className={`button ${selectedRegion === 'Brainstem' ? 'selected' : ''}`} 
                      onClick={() => setSelectedRegion('Brainstem')} 
                      style={{
                        backgroundColor: selectedRegion === 'Brainstem' ? '#06B6D4' : 'rgba(0, 212, 255, 0.15)',
                        color: selectedRegion === 'Brainstem' ? '#ffffff' : '#ffffff',
                        borderColor: selectedRegion === 'Brainstem' ? '#0891B2' : '#00d4ff',
                        fontWeight: '600'
                      }}
                    >
                      6. Brainstem
                    </button>
                    <button 
                      className="button" 
                      onClick={resetView}
                      style={{
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        borderColor: '#8b5cf6',
                        color: '#ffffff',
                        fontWeight: '600'
                      }}
                    >
                      Reset Neural Map
                    </button>
                  </div>

                  {/* Enhanced Color Legend */}
                  <div className="color-legend" style={{ 
                    marginTop: '25px', 
                    padding: '20px', 
                    background: 'rgba(0, 212, 255, 0.08)', 
                    border: '1px solid rgba(6, 255, 165, 0.3)', 
                    borderRadius: '15px' 
                  }}>
                    <h3 style={{ color: '#06ffa5', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px' }}>Neural Network Mapping:</h3>
                    <div className="color-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#3B82F6', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>1. Frontal Cortex</span>
                      </div>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#10B981', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>2. Parietal Cortex</span>
                      </div>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#F59E0B', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>3. Temporal Cortex</span>
                      </div>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#EF4444', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>4. Occipital Cortex</span>
                      </div>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#8B5CF6', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>5. Cerebellum Unit</span>
                      </div>
                      <div className="color-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                        <div className="color-dot" style={{ width: '18px', height: '18px', backgroundColor: '#06B6D4', borderRadius: '50%' }}></div>
                        <span style={{ color: '#ffffff', fontSize: '14px' }}>6. Core Stem</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <label style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
                      Neural Isolation Opacity: {isolationOpacity.toFixed(2)}
                    </label>
                    <input 
                      className="range" 
                      type="range" 
                      min="0.02" 
                      max="0.9" 
                      step="0.01" 
                      value={isolationOpacity} 
                      onChange={(e) => setIsolationOpacity(parseFloat(e.target.value))} 
                      style={{
                        width: '100%',
                        height: '8px',
                        background: 'linear-gradient(90deg, #00d4ff, #06ffa5)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>

                  <div style={{ 
                    marginTop: 15, 
                    fontSize: 13, 
                    color: '#cbd5e1',
                    padding: 12,
                    background: 'rgba(0, 212, 255, 0.05)',
                    borderRadius: 8,
                    border: '1px solid rgba(0, 212, 255, 0.1)'
                  }}>
                    💡 <strong style={{ color: '#06ffa5' }}>Neural Tip:</strong> Click any brain region to activate neural pathway analysis. Use controls to explore different cortical areas and their cognitive functions.
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Viewport */}
            <div className="right">
              <div className="card">
                <div className="viewport-container">
                  <div className="hud-overlay">
                    <div className="hud-element">NEURAL SCAN ACTIVE</div>
                    <div className="hud-element">3D MODEL: BRAIN_AREAS.GLB</div>
                  </div>
                  <div className="canvas-wrap">
                    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[5, 5, 5]} intensity={0.6} />
                      <Suspense fallback={<Html center style={{ color: 'var(--primary-blue)' }}>Loading Neural Model...</Html>}>
                        <ModelErrorBoundary>
                          <Stage 
                            intensity={0.6} 
                            environment={'city'} 
                            contactShadow={{ opacity: 0.25, blur: 4 }}
                            adjustCamera={true}
                            center={true}
                          >
                            <BrainScene selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} isolationOpacity={isolationOpacity} />
                          </Stage>
                        </ModelErrorBoundary>
                      </Suspense>
                      <OrbitControls 
                        enablePan={false} 
                        enableZoom={true}
                        enableRotate={true}
                        minDistance={1.5}
                        maxDistance={5}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI - Math.PI / 6}
                        target={[0, 0, 0]}
                      />
                    </Canvas>
                    <Loader />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="footer">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 20,
          flexWrap: 'wrap'
        }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            Advanced Neural Interface powered by
          </span>
          <span style={{ 
            color: 'var(--accent-cyan)', 
            fontWeight: 700,
            textShadow: '0 0 10px rgba(6, 255, 165, 0.3)'
          }}>
            AARUCHUDAR
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            — Interactive 3D Brain Visualization
          </span>
        </div>
        <div style={{ 
          marginTop: 10, 
          fontSize: 12, 
          color: 'var(--text-secondary)',
          opacity: 0.7
        }}>
          Neural pathways • Cognitive mapping • Real-time interaction
        </div>
      </footer>
    </div>
  )
}
