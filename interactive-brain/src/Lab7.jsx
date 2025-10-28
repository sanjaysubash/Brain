import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab7() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Voice Tools',
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
              <p className="slogan">HI LAB 7 – Voice, Value, and Vulnerability</p>
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
                        HI LAB 7: VOICE, VALUE, AND VULNERABILITY
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Focus</h2>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#06ffa5' }}>
                          Speaking truth and Building confidence
                        </p>
                        
                        <p>
                          Welcome to Lab 7, where you'll develop the courage to speak your truth, 
                          embrace your authentic value, and transform vulnerability into strength. 
                          This lab activates brain regions responsible for self-worth, emotional courage, 
                          and authentic self-expression.
                        </p>
                        
                        <p>
                          Through targeted exercises, you'll build neural pathways that support 
                          confidence, emotional resilience, and the ability to communicate with 
                          authenticity and impact. Learn to turn fear into fuel for growth.
                        </p>

                        <div style={{ 
                          marginTop: '30px', padding: '20px', background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', borderRadius: '12px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '18px', marginBottom: '15px' }}>
                            Lab Outcomes
                          </h3>
                          <ul style={{ paddingLeft: '20px' }}>
                            <li>Build unshakeable self-worth and inner confidence</li>
                            <li>Develop courage to face uncertainty and discomfort</li>
                            <li>Transform vulnerability into authentic strength</li>
                            <li>Strengthen your sense of identity and personal values</li>
                            <li>Communicate with truth, compassion, and impact</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'brain' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Brain Parts Activated in Lab 7
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Lab 7 activates four key brain regions that work together to build authentic 
                          confidence, emotional courage, and self-awareness.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '22px', marginBottom: '15px' }}>
                              💪 Ventromedial Prefrontal Cortex (vmPFC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your inner confidence builder"
                            </p>
                            <p><strong>What it does:</strong> Helps you understand your own value, make decisions aligned with who you are, and feel a sense of self-worth.</p>
                            <p><strong>Example:</strong> When you remind yourself, "I can handle this" or feel proud of your growth, your vmPFC is strengthening your sense of self-esteem.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '22px', marginBottom: '15px' }}>
                              🔥 Anterior Insula
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your center of emotional courage"
                            </p>
                            <p><strong>What it does:</strong> Helps you face uncomfortable emotions, stay aware of how you feel, and take brave actions even when things are uncertain.</p>
                            <p><strong>Example:</strong> When you speak up despite feeling nervous or step out of your comfort zone, your anterior insula is helping you channel courage through self-awareness.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '22px', marginBottom: '15px' }}>
                              🛡️ Periaqueductal Gray (PAG)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your brain's calm protector"
                            </p>
                            <p><strong>What it does:</strong> Helps regulate fear and pain responses, allowing you to stay composed instead of being overly judgmental or reactive.</p>
                            <p><strong>Example:</strong> When you stay calm and compassionate instead of criticizing someone during conflict, your PAG is helping you respond with understanding.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '22px', marginBottom: '15px' }}>
                              🪞 Posterior Cingulate Cortex (PCC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your identity mirror"
                            </p>
                            <p><strong>What it does:</strong> Supports self-reflection, helping you think about who you are, what you believe in, and how your experiences shape your personal story.</p>
                            <p><strong>Example:</strong> When you reflect on your journey and realize how much you've changed over time, your PCC is guiding that self-awareness.</p>
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
          <span style={{ color: 'var(--text-secondary)' }}>HI LAB 7 – Voice, Value, and Vulnerability powered by</span>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }}>AARUCHUDAR</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-secondary)', opacity: 0.7 }}>
          Authentic Voice • Inner Confidence • Emotional Courage
        </div>
      </footer>
    </div>
  )
}