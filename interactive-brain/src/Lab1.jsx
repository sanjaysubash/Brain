import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab1() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    about: 'About Us',
    clarity: 'Clarity as Culture',
    brain: 'Brain Activation',
    tools: 'Clarity Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Team Culture',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  }

  return (
    <div className="app-container">
      {/* Brain Pattern Overlay */}
      <div className="brain-pattern-overlay"></div>
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="brand-section">
            <div className="logo-container">
              <img 
                src={AaruchudarLogo} 
                alt="Aaruchudar Logo" 
                className="company-logo"
              />
            </div>
            <div className="brand-text">
              <h1 className="company-name">AARUCHUDAR</h1>
              <p className="slogan">HI LAB 1 – Clarity as Culture</p>
            </div>
          </div>
          <div className="neural-stats">
            <Link to="/" className="button" style={{
              backgroundColor: '#00d4ff',
              color: '#000',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600'
            }}>
              ← Back to Brain Model
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-frame">
          <div className="container">
            {/* Navigation Sidebar */}
            <div className="left">
              <div className="card">
                <h2 className="neural-title" style={{ color: '#06ffa5', marginBottom: '20px' }}>
                  Lab Navigation
                </h2>
                <div className="lab-navigation">
                  {Object.entries(sections).map(([key, title]) => (
                    <button
                      key={key}
                      className={`nav-button ${activeSection === key ? 'active' : ''}`}
                      onClick={() => setActiveSection(key)}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '12px 16px',
                        marginBottom: '8px',
                        backgroundColor: activeSection === key ? '#06ffa5' : 'rgba(0, 212, 255, 0.15)',
                        color: activeSection === key ? '#000' : '#ffffff',
                        border: `1px solid ${activeSection === key ? '#06ffa5' : '#00d4ff'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        textAlign: 'left',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="right">
              <div className="card">
                <div className="lab-content" style={{ maxHeight: '80vh', overflowY: 'auto', padding: '20px' }}>
                  
                  {/* Welcome Section */}
                  {activeSection === 'welcome' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        HI LAB 1: CLARITY AS CULTURE
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Focus</h2>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#06ffa5' }}>
                          Breaking confusion, Building thinking clarity
                        </p>
                        
                        <p>
                          Welcome to Lab 1, where we transform the way you think, process information, and make decisions. 
                          This lab is designed to activate your brain's executive control centers, helping you develop 
                          crystal-clear thinking patterns that cut through confusion and uncertainty.
                        </p>
                        
                        <p>
                          In today's world of information overload and constant distractions, clarity has become a 
                          superpower. This lab focuses on strengthening your Prefrontal Cortex and Anterior Cingulate 
                          Cortex - the brain regions responsible for logical thinking, error detection, and focused attention.
                        </p>

                        <div style={{ 
                          marginTop: '30px', 
                          padding: '20px', 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '12px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '18px', marginBottom: '15px' }}>
                            Lab Outcomes
                          </h3>
                          <ul style={{ paddingLeft: '20px' }}>
                            <li>Develop systematic thinking processes that eliminate mental clutter</li>
                            <li>Strengthen your brain's error detection and self-correction abilities</li>
                            <li>Build sustainable habits for clear decision-making under pressure</li>
                            <li>Transform reactive thinking into intentional, strategic responses</li>
                            <li>Create a personal framework for maintaining mental clarity in chaos</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Brain Activation Section */}
                  {activeSection === 'brain' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Brain Parts Activated in Lab 1
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Lab 1 specifically targets and strengthens two critical brain regions that form the 
                          foundation of clear thinking and mental organization.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                          {/* Prefrontal Cortex */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '24px', marginBottom: '15px' }}>
                              🧠 Prefrontal Cortex (PFC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "The CEO of your thinking"
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What it does:</h4>
                            <p>This part of the brain is like the CEO of your thinking. It helps with clear, logical, and organized thought, decision-making, planning, and self-control. When your PFC is active, you can focus better, think rationally, and make balanced decisions instead of reacting emotionally.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Real-world example:</h4>
                            <p>When solving a math problem or planning your day, your PFC helps you stay logical and structured.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>How Lab 1 strengthens it:</h4>
                            <p>Through structured thinking exercises, decision-making frameworks, and systematic problem-solving activities that build your executive control capabilities.</p>
                          </div>

                          {/* Anterior Cingulate Cortex */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '24px', marginBottom: '15px' }}>
                              🎯 Anterior Cingulate Cortex (ACC)
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Your brain's error detector"
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What it does:</h4>
                            <p>This acts like the brain's error detector. It helps you notice when something doesn't make sense, spot mistakes, manage attention, and shift focus when needed. It's what helps you realize, "Hmm, something feels off," and correct yourself.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Real-world example:</h4>
                            <p>When you notice a typo in your work or realize a decision doesn't feel right, your ACC is doing its job.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>How Lab 1 strengthens it:</h4>
                            <p>Through attention training, error-spotting exercises, and mindfulness practices that enhance your ability to monitor and adjust your thinking in real-time.</p>
                          </div>
                        </div>

                        <div style={{ 
                          marginTop: '30px', 
                          padding: '25px', 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '15px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '20px', marginBottom: '15px' }}>
                            The Clarity Network
                          </h3>
                          <p>
                            When your PFC and ACC work together, they create what we call the "Clarity Network" - 
                            a powerful system that gives you the ability to think clearly under pressure, spot errors 
                            before they become problems, and make decisions that align with your deepest values and goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ...existing sections from Lab5/Lab6 can be adapted here... */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 20,
          flexWrap: 'wrap'
        }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            HI LAB 1 – Clarity as Culture powered by
          </span>
          <span style={{ 
            color: 'var(--accent-cyan)', 
            fontWeight: 700,
            textShadow: '0 0 10px rgba(6, 255, 165, 0.3)'
          }}>
            AARUCHUDAR
          </span>
        </div>
        <div style={{ 
          marginTop: 10, 
          fontSize: 12, 
          color: 'var(--text-secondary)',
          opacity: 0.7
        }}>
          Breaking confusion • Building thinking clarity • Developing mental discipline
        </div>
      </footer>
    </div>
  )
}