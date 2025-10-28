import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab3() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Focus Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  }

  return (
    <div className="app-container">
      <div className="brain-pattern-overlay"></div>
      
      <header className="header">
        <div className="header-content">
          <div className="brand-section">
            <div className="logo-container">
              <img src={AaruchudarLogo} alt="Aaruchudar Logo" className="company-logo" />
            </div>
            <div className="brand-text">
              <h1 className="company-name">AARUCHUDAR</h1>
              <p className="slogan">HI LAB 3 – Inner Focus in a Noisy World</p>
            </div>
          </div>
          <div className="neural-stats">
            <Link to="/" className="button" style={{
              backgroundColor: '#00d4ff', color: '#000', textDecoration: 'none',
              padding: '10px 20px', borderRadius: '8px', fontWeight: '600'
            }}>
              ← Back to Brain Model
            </Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="content-frame">
          <div className="container">
            <div className="left">
              <div className="card">
                <h2 className="neural-title" style={{ color: '#06ffa5', marginBottom: '20px' }}>
                  Lab Navigation
                </h2>
                <div className="lab-navigation">
                  {Object.entries(sections).map(([key, title]) => (
                    <button key={key} className={`nav-button ${activeSection === key ? 'active' : ''}`}
                      onClick={() => setActiveSection(key)}
                      style={{
                        display: 'block', width: '100%', padding: '12px 16px', marginBottom: '8px',
                        backgroundColor: activeSection === key ? '#06ffa5' : 'rgba(0, 212, 255, 0.15)',
                        color: activeSection === key ? '#000' : '#ffffff',
                        border: `1px solid ${activeSection === key ? '#06ffa5' : '#00d4ff'}`,
                        borderRadius: '8px', cursor: 'pointer', fontWeight: '600', textAlign: 'left',
                        transition: 'all 0.3s ease'
                      }}>
                      {title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="right">
              <div className="card">
                <div className="lab-content" style={{ maxHeight: '80vh', overflowY: 'auto', padding: '20px' }}>
                  
                  {activeSection === 'welcome' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        HI LAB 3: INNER FOCUS IN A NOISY WORLD
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Focus</h2>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#06ffa5' }}>
                          Improving focus and Reducing distractions
                        </p>
                        
                        <p>
                          Welcome to Lab 3, where you'll develop laser-sharp focus and unshakeable concentration 
                          amidst the chaos of modern life. This lab trains your brain's attention networks to 
                          filter out distractions and maintain deep focus on what truly matters.
                        </p>
                        
                        <p>
                          Through scientifically-designed exercises, you'll strengthen your ability to sustain 
                          attention, catch your mind when it wanders, and build powerful focus habits that 
                          transform your productivity and peace of mind.
                        </p>

                        <div style={{ 
                          marginTop: '30px', padding: '20px', background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', borderRadius: '12px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '18px', marginBottom: '15px' }}>
                            Lab Outcomes
                          </h3>
                          <ul style={{ paddingLeft: '20px' }}>
                            <li>Develop sustained attention that cuts through distractions</li>
                            <li>Build awareness of when your mind wanders and how to refocus</li>
                            <li>Create automatic focus habits through repetition and training</li>
                            <li>Strengthen your mental spotlight to stay locked on important tasks</li>
                            <li>Transform your relationship with distractions and mental noise</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'brain' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Brain Parts Activated in Lab 3
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Lab 3 activates and coordinates four key brain systems to create unshakeable focus 
                          and distraction resistance.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '22px', marginBottom: '15px' }}>
                              🎯 Dorsal Attention Network (DAN)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your brain's spotlight of focus"
                            </p>
                            <p><strong>What it does:</strong> Acts like your brain's spotlight of focus. Helps you stay locked onto what's important, filtering out unnecessary information and keeping your attention steady on a single task.</p>
                            <p><strong>Example:</strong> When you're reading a book and tuning out background noise, your DAN is helping you stay focused on the words.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '22px', marginBottom: '15px' }}>
                              🌊 Default Mode Network (DMN)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your brain's autopilot that needs supervision"
                            </p>
                            <p><strong>What it does:</strong> Activates when your mind starts to wander, daydream, or drift into thoughts about yourself or the past. A healthy DMN helps you reflect creatively, but when too active, it makes focus difficult.</p>
                            <p><strong>Example:</strong> When you catch yourself thinking about dinner plans instead of listening in class, your DMN has taken over.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '22px', marginBottom: '15px' }}>
                              🔄 Basal Ganglia
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your brain's habit builder"
                            </p>
                            <p><strong>What it does:</strong> Helps you create consistent focus and routines by turning repeated actions into automatic habits. Strengthens your ability to stay attentive without much effort.</p>
                            <p><strong>Example:</strong> When you automatically start your morning study routine without needing motivation, your basal ganglia are running the show.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '22px', marginBottom: '15px' }}>
                              🚨 Anterior Insula
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your attention alarm system"
                            </p>
                            <p><strong>What it does:</strong> Works like your attention alarm system. Notices when your focus slips, senses distractions, and brings your attention back to what truly matters.</p>
                            <p><strong>Example:</strong> When you realize you're scrolling your phone instead of working and decide to refocus, your anterior insula just caught that distraction.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-secondary)' }}>HI LAB 3 – Inner Focus in a Noisy World powered by</span>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }}>AARUCHUDAR</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-secondary)', opacity: 0.7 }}>
          Deep Focus • Distraction Control • Attention Training
        </div>
      </footer>
    </div>
  )
}