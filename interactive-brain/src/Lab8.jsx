import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab8() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Leadership Tools',
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
              <p className="slogan">HI LAB 8 – Leadership Without Imitation</p>
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
                        HI LAB 8: LEADERSHIP WITHOUT IMITATION
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Focus</h2>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#06ffa5' }}>
                          Leading with originality and Inner clarity
                        </p>
                        
                        <p>
                          Welcome to Lab 8, where you'll develop authentic leadership that comes from within 
                          rather than copying others. This lab activates brain regions responsible for 
                          independent thinking, personal vision, and the courage to lead with originality 
                          and purpose.
                        </p>
                        
                        <p>
                          Through targeted exercises, you'll strengthen your ability to resist social pressure, 
                          think creatively, and turn ideas into action. Build the neural foundations for 
                          leadership that inspires others through authenticity, not imitation.
                        </p>

                        <div style={{ 
                          marginTop: '30px', padding: '20px', background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', borderRadius: '12px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '18px', marginBottom: '15px' }}>
                            Lab Outcomes
                          </h3>
                          <ul style={{ paddingLeft: '20px' }}>
                            <li>Develop a strong sense of personal leadership identity</li>
                            <li>Build resistance to social pressure and conformity</li>
                            <li>Strengthen creative vision and innovative thinking</li>
                            <li>Transform ideas into concrete leadership actions</li>
                            <li>Lead authentically based on your values and purpose</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'brain' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Brain Parts Activated in Lab 8
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Lab 8 activates four key brain systems that work together to create authentic 
                          leadership, independent thinking, and visionary action.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '22px', marginBottom: '15px' }}>
                              🧭 Medial Prefrontal Cortex (mPFC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your inner leadership compass"
                            </p>
                            <p><strong>What it does:</strong> Helps you build a strong sense of identity, confidence, and purpose allowing you to lead authentically rather than imitate others.</p>
                            <p><strong>Example:</strong> When you make decisions based on your values and vision instead of seeking approval, your mPFC is guiding your personal leadership identity.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '22px', marginBottom: '15px' }}>
                              🛡️ Ventrolateral Prefrontal Cortex (vlPFC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your individuality protector"
                            </p>
                            <p><strong>What it does:</strong> Helps you resist social pressure, think independently, and stay true to your own ideas rather than copying others.</p>
                            <p><strong>Example:</strong> When you confidently share your original thoughts in a group discussion instead of following the crowd, your vlPFC is helping you stay authentic.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '22px', marginBottom: '15px' }}>
                              💭 Default Mode Network (DMN)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your leadership imagination zone"
                            </p>
                            <p><strong>What it does:</strong> Activates during deep reflection, helping you envision the future, create purpose, and shape your leadership vision.</p>
                            <p><strong>Example:</strong> When you daydream about the kind of leader you want to become or imagine innovative ways to inspire others, your DMN is fueling that creative vision.</p>
                          </div>

                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '15px', padding: '25px'
                          }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '22px', marginBottom: '15px' }}>
                              ⚡ Fronto-Striatal Circuits
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your action enablers"
                            </p>
                            <p><strong>What it does:</strong> These circuits connect your planning brain with your motivation system, turning thoughts and goals into real actions.</p>
                            <p><strong>Example:</strong> When you stop overthinking and take the first bold step toward your goal, your fronto-striatal circuits are transforming intention into leadership action.</p>
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
          <span style={{ color: 'var(--text-secondary)' }}>HI LAB 8 – Leadership Without Imitation powered by</span>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, textShadow: '0 0 10px rgba(6, 255, 165, 0.3)' }}>AARUCHUDAR</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: 'var(--text-secondary)', opacity: 0.7 }}>
          Authentic Leadership • Independent Thinking • Visionary Action
        </div>
      </footer>
    </div>
  )
}