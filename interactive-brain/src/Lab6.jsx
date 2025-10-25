import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab6() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    about: 'About Us',
    systemic: 'Systemic Thinking',
    principles: 'Core Principles',
    tools: 'Thinking Tools',
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
              <p className="slogan">HI LAB 6 – Systemic Thinking</p>
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
                        HI LAB 6: SYSTEMIC THINKING
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Welcome Statement</h2>
                        <p>
                          Welcome to a space where the way you see, think, and understand the world changes. In this lab, 
                          we see beyond individual events and decisions to uncover the patterns, relationships, and ripple 
                          effects that govern the whole systems.
                        </p>
                        
                        <p>
                          Here, you will learn to realize the ties that are often overlooked and to trace the link between 
                          a small action and the significant effect it is causing. Moreover, understanding so, you will be 
                          able to determine the future results before they happen.
                        </p>

                        <p>
                          You will learn to take a problem to several angles, doubt the assumptions, and see the world as 
                          a network of interconnected components rather than isolated ones through hands-on activities, 
                          imagination exercises, and group discussions.
                        </p>

                        <p>
                          This lab is more than just problem-solving. It is about thinking more intensively, acting more 
                          consciously and developing the awareness needed to make choices that matter and last. As a result 
                          of this journey, you will witness a clearer picture of patterns and a deeper understanding of your 
                          part in them, thus, you will be able to engage thoughtfully and make meaningful contributions to 
                          the systems around you.
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
                            <li>Grasp the idea of systems ripple through which actions influence people, processes, and outcomes</li>
                            <li>Practice skills of predicting results, assessing options, and making thoughtful, grounded choices</li>
                            <li>Recognize recurring patterns, feedback loops, and root causes instead of isolating issues</li>
                            <li>Communicate better and collaborate more effectively through understanding interconnections</li>
                            <li>Develop mindset for stopping, reflecting, and responding intentionally rather than reacting impulsively</li>
                            <li>Embody automatic thinking about connections, dependencies, and long-term impact</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* About Us Section */}
                  {activeSection === 'about' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>About Us</h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '0' }}>Our Origin</h2>
                        <p>
                          Aaruchudar did not start with a business plan; it began with a feeling that something 
                          important was being lost from how we think, speak and decide. As artificial intelligence 
                          continued to rise, we observed something else declining, the clarity of thinking in people's 
                          heads and their ability to make a safe choice. That is precisely where the idea of Aaruchudar 
                          originated - putting human intelligence back at the center.
                        </p>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>Led by a Lived Experience</h2>
                        <p>
                          Our founder, Aashika Nethaji, never meant to create a company. She wanted to understand human 
                          nature. After spending time training and interviewing over 600,000 students internationally, 
                          she learned the same thing over and over. Bright, smart and capable individuals felt stuck - 
                          unclear, unsure, and voiceless.
                        </p>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>Our Vision</h2>
                        <p>
                          We foresee a time when clarity becomes a culture - where resilience occurs through 
                          self-reflection instead of reaction, and where emotional intelligence is embraced as the 
                          bedrock of how we learn, lead, and create. We aspire to be the foremost Southeast Asian 
                          entity innovating human first systems that create depth in education, dignity in leadership 
                          and discernment into innovation.
                        </p>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>Our Mission</h2>
                        <p>
                          Our objective is to make Human Intelligence a native capability in learning and leadership 
                          ecosystems- not through learning, but through experience. We create labs, rituals, tools 
                          and clarity-based systems anchored in India's wisdom traditions, yet built for a global moment.
                        </p>

                        <div style={{ 
                          marginTop: '30px', 
                          padding: '20px', 
                          background: 'rgba(0, 212, 255, 0.1)', 
                          border: '1px solid rgba(0, 212, 255, 0.3)', 
                          borderRadius: '12px' 
                        }}>
                          <h3 style={{ color: '#00d4ff', fontSize: '18px', marginBottom: '15px' }}>
                            Our Core Values
                          </h3>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            <div>
                              <h4 style={{ color: '#06ffa5' }}>Clarity</h4>
                              <p style={{ fontSize: '14px' }}>More than communication - it is a way of thinking and mental discipline.</p>
                            </div>
                            <div>
                              <h4 style={{ color: '#06ffa5' }}>Empathy</h4>
                              <p style={{ fontSize: '14px' }}>The pulse of human intelligence and capacity to understand others.</p>
                            </div>
                            <div>
                              <h4 style={{ color: '#06ffa5' }}>Decision-Making</h4>
                              <p style={{ fontSize: '14px' }}>Every decision represents what we value and should align with clarity.</p>
                            </div>
                            <div>
                              <h4 style={{ color: '#06ffa5' }}>Leadership</h4>
                              <p style={{ fontSize: '14px' }}>True leadership sprouts from inside and embodies purpose, not performance.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Systemic Thinking Section */}
                  {activeSection === 'systemic' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        What is Systemic Thinking?
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p>
                          Systems thinking is an approach that challenges us to look at things as a whole rather than just 
                          focusing on a few aspects. Instead of merely responding to the things or problems that are directly 
                          in front of us, it calls on us to justify for a moment, draw back, and not only see the relationships 
                          but the patterns and the impacts that surround those relationships.
                        </p>

                        <div style={{ 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '12px',
                          padding: '20px',
                          margin: '20px 0'
                        }}>
                          <h3 style={{ color: '#06ffa5', marginBottom: '15px' }}>The Spider Web Analogy</h3>
                          <p>
                            Consider a spider web - when one thread is touched, the whole web receives the vibrations. 
                            In the same way, a very small action or decision that is part of a system can lead to effects 
                            that spread far beyond the place that it came from.
                          </p>
                        </div>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>
                          Why Systemic Thinking Matters
                        </h2>
                        <p>
                          This way of thinking helps us to figure out how certain problems persist even after numerous 
                          attempts of solving them. For instance, employees might be used to missing their deadlines 
                          regularly. The root of the problem could be the performance of an individual work person only, 
                          yet it might also be due to the interconnection of the factors, such as poor communication, 
                          overlapping of duties, and inefficient processes that are affecting the whole system.
                        </p>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>
                          From Linear to Systems Perspective
                        </h2>
                        <p>
                          Linear thinking follows a simple straight line of events from cause to effect, while reality 
                          is rarely that straightforward. By a systems perspective, we are reminded that results are 
                          drawn from numerous interactions, loops, and influences. This transformation makes us capable 
                          of making better decisions in complicated situations.
                        </p>
                        
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(2, 1fr)', 
                          gap: '20px',
                          marginTop: '20px'
                        }}>
                          <div style={{ 
                            background: 'rgba(0, 212, 255, 0.1)', 
                            padding: '15px', 
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 212, 255, 0.3)'
                          }}>
                            <h4 style={{ color: '#00d4ff' }}>Linear Thinking</h4>
                            <p style={{ fontSize: '14px' }}>Simple cause → effect relationships</p>
                          </div>
                          <div style={{ 
                            background: 'rgba(6, 255, 165, 0.1)', 
                            padding: '15px', 
                            borderRadius: '8px',
                            border: '1px solid rgba(6, 255, 165, 0.3)'
                          }}>
                            <h4 style={{ color: '#06ffa5' }}>Systems Thinking</h4>
                            <p style={{ fontSize: '14px' }}>Multiple interactions, loops, and influences</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Core Principles Section */}
                  {activeSection === 'principles' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Core Principles of Systemic Thinking
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Systemic thinking is composed of several principles which facilitate the understanding and 
                          handling of complex systems. These principles help us see the world as an interconnected 
                          network where everything influences everything else.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          {/* Principle 1 */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '22px', marginBottom: '15px' }}>
                              1. Interconnectedness
                            </h2>
                            <p>
                              Every part of a system both affects and is affected by the others. There is no area that 
                              is completely separate, and even minor actions can have major effects. One component of a 
                              system does not only influence, but also is influenced by, the other components.
                            </p>
                          </div>

                          {/* Principle 2 */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '22px', marginBottom: '15px' }}>
                              2. Patterns Over Events
                            </h2>
                            <p>
                              Instead of merely pinpointing the incidents, systemic thinkers strive to identify those 
                              repeated situations and themes that shed light on why the same results keep happening. 
                              Focus shifts from individual events to recurring patterns.
                            </p>
                          </div>

                          {/* Principle 3 */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '22px', marginBottom: '15px' }}>
                              3. Feedback Loops
                            </h2>
                            <p>
                              Systems normally have cycles - some that help a change (positive feedback), whereas others 
                              keep a system stable (negative feedback). The level of facilitation of knowing what to 
                              expect and plan the outcomes becomes when you identify these loops.
                            </p>
                          </div>

                          {/* Principle 4 */}
                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', 
                            border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#8B5CF6', fontSize: '22px', marginBottom: '15px' }}>
                              4. Long-term Perspective
                            </h2>
                            <p>
                              An effect of an action can be visible immediately or it can be developed over time. 
                              Systems thinking encourages considering both short-term and long-term implications of 
                              decisions and actions.
                            </p>
                          </div>

                          {/* Principle 5 */}
                          <div style={{ 
                            background: 'rgba(236, 72, 153, 0.1)', 
                            border: '1px solid rgba(236, 72, 153, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#EC4899', fontSize: '22px', marginBottom: '15px' }}>
                              5. Multiple Perspectives
                            </h2>
                            <p>
                              Even those who are inside the system might not all agree on how it is structured. By 
                              viewing the system from different people's vantage points, we identify patterns and get 
                              clues that we might not have seen otherwise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tools Section */}
                  {activeSection === 'tools' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Tools That Sharpen Thinking Skills
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          We at Aaruchudar make reflective tools that allow people to identify relationships, follow 
                          outcomes, and think in patterns. These tools transform usual problem-solving into a discovery 
                          process, drawing participants into uncovering clarity from complexity.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                          {/* Tool 1 */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '24px', marginBottom: '15px' }}>
                              1. System Map Boards
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Because it is from clarity that the whole system, not only its parts, is discovered."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What it is:</h4>
                            <p>A representation mapping board wherein participants show the people, processes, and structures which influence a specified challenge or result.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why it works:</h4>
                            <p>The key to systemic thinking is visibility. When participants draw the system, they become aware of communication patterns, dependencies, and hidden speculation points.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>People learn to think holistically rather than reactively. It extends perspective, nurtures cooperation, and imparts skills for deliberative problem-solving.</p>
                          </div>

                          {/* Tool 2 */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '24px', marginBottom: '15px' }}>
                              2. Change Ripple Diagrams
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Every change in a system causes effects that far extend the visible ones."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What it is:</h4>
                            <p>A creative design that enables players to chart the ripple effect of their decisions or changes on different segments of the system.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why it works:</h4>
                            <p>Systemic thinkers perceive that the link between causes and effects is not direct. This tool shows how actions spread, overlap, and create feedback over time.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>Participants become responsible and strategic in their deeds, creating systems based on foresight, balance, and sustainable growth.</p>
                          </div>

                          {/* Tool 3 */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '24px', marginBottom: '15px' }}>
                              3. Decision Horizon Templates
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Systems are those which remain when decisions are of long term rather than momentary ones."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What it is:</h4>
                            <p>A reflection sheet that leads participants through the process of short and long-term consequences of their choices.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why it works:</h4>
                            <p>Time is an element of systemic thinking - present actions and their impact on future stability. This template guides participants to take the long-view before acting.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>Participants acquire patience, foresight, and responsibility. They learn to make decisions that energize systems rather than strain them.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cases Section */}
                  {activeSection === 'cases' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Case Examples – Strategic Clarity in Action
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Strategic clarity is about grasping the whole picture, knowing what is really important, and 
                          taking decisions that go with the long-term goals. Here are real-world situations where 
                          strategic clarity became a light to progress from stagnation.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                          {/* Case 1 */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '24px', marginBottom: '15px' }}>
                              Case 1: Uniting a Team Around a New Project
                            </h2>
                            <p>
                              A workgroup was faced with troubles in performing tasks on time. Unclear tasks, overlapping 
                              responsibilities, and recurring mistakes were mounting frustration. The team leader employed 
                              strategic clarity by charting project objectives, breaking tasks into small steps, and 
                              assigning roles so everyone knew how their work contributed to the big-picture goal.
                            </p>
                            <p style={{ marginTop: '15px', fontWeight: '600', color: '#06ffa5' }}>
                              Result: Stress levels decreased, teamwork improved, milestones were achieved on schedule, 
                              and work quality enhanced remarkably.
                            </p>
                          </div>

                          {/* Case 2 */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '24px', marginBottom: '15px' }}>
                              Case 2: Elevating Customer Experience Through Systems Thinking
                            </h2>
                            <p>
                              A retail company faced regular complaints about late deliveries and poor service. Initially, 
                              managers hired more employees to manage complaints, but this didn't solve the root problem. 
                              Using strategic clarity, they examined the system as a whole, uncovering bottlenecks in 
                              inventory flow and communication gaps between departments.
                            </p>
                            <p style={{ marginTop: '15px', fontWeight: '600', color: '#06ffa5' }}>
                              Result: Customer satisfaction increased, staff felt more empowered, and solutions became 
                              sustainable by addressing core issues.
                            </p>
                          </div>

                          {/* Case 3 */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '24px', marginBottom: '15px' }}>
                              Case 3: Building Personal Growth with Clear Goals
                            </h2>
                            <p>
                              A young career woman felt she was walking in circles, not knowing what skills to improve 
                              or how to get promoted. Instead of reacting to any new opportunity, she employed clarity 
                              strategy by laying out long-term career goals, figuring out needed skills, and setting 
                              small monthly goals to take steps forward.
                            </p>
                            <p style={{ marginTop: '15px', fontWeight: '600', color: '#06ffa5' }}>
                              Result: Development became consistent, self-esteem increased, and new doors opened as 
                              she grew intentionally instead of aimlessly wandering.
                            </p>
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
                            Why Strategic Clarity Matters
                          </h3>
                          <p>
                            These cases show how strategic clarity helps people visualize the big picture, make decisions 
                            consistent with priorities, eliminate confusion by focusing on important things, and link 
                            daily activities with desired outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Games Section */}
                  {activeSection === 'games' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Games and Activities
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                          gap: '20px',
                          marginTop: '20px'
                        }}>
                          {[
                            {
                              title: "1. Dot-to-Dot Logic",
                              description: "Recognize patterns in data points that appear random. Figure out which dots connect and which are distractions while understanding complexity with speed and precision."
                            },
                            {
                              title: "2. Mind Map Race",
                              description: "Structure ideas into one logically organized map within a time limit. Manage to sort out ideas when everything seems urgent and discover links between concepts."
                            },
                            {
                              title: "3. Cause-Effect Chain",
                              description: "Figure out all consequences following a single action. Track outcomes within the system and observe indirect effects others might not be aware of."
                            },
                            {
                              title: "4. What's the Pattern?",
                              description: "Find hidden rules within sets of cards or sequences. Check hypotheses without jumping to conclusions and differentiate real patterns from noise."
                            },
                            {
                              title: "5. Hidden Web Game",
                              description: "Understand how one person's action affects everyone else. Become aware of your impact within a web of connections and see chain reactions before they happen."
                            },
                            {
                              title: "6. System Builder",
                              description: "Follow the ripple of events caused by one action. Discover what happens when one component fails and combine creativity with reasoning for complex challenges."
                            },
                            {
                              title: "7. Flawed Logic Hunt",
                              description: "Find mistakes or contradictions in arguments. Isolate facts from opinions and fix the logic without assuming the writer is right too quickly."
                            },
                            {
                              title: "8. Chess Mind",
                              description: "Figure out what will happen several moves ahead in scenarios. Understand how previous decisions affect current ones and think of multiple possibilities before acting."
                            },
                            {
                              title: "9. If This, Then What?",
                              description: "Trace the whole chain of events resulting from one action. Become good at foreseeing outcomes of complex chains and improve decision-making accuracy."
                            },
                            {
                              title: "10. Pattern in My Life",
                              description: "Trace back habits and behaviors to see where they originated. Understand how patterns play roles in decision-making and create positive cycles while ending negative ones."
                            }
                          ].map((game, index) => (
                            <div key={index} style={{ 
                              background: 'rgba(139, 92, 246, 0.1)', 
                              border: '1px solid rgba(139, 92, 246, 0.3)', 
                              borderRadius: '12px',
                              padding: '20px'
                            }}>
                              <h3 style={{ color: '#8B5CF6', fontSize: '18px', marginBottom: '10px' }}>
                                {game.title}
                              </h3>
                              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                {game.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div style={{ 
                          marginTop: '40px', 
                          padding: '25px', 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '15px' 
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '20px', marginBottom: '15px' }}>
                            Why These Activities Matter
                          </h3>
                          <p>
                            These games and activities develop authentic systemic thinking skills: pattern recognition, 
                            strategic reasoning, and the ability to see connections. They help build mental models for 
                            understanding complex systems and making better decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Culture Section */}
                  {activeSection === 'culture' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        From Training to Team Culture
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Team culture is now the chief element that influences how people think, interact, and work 
                          every single day. Systemic thinking enables one to visualize these concepts better, considering 
                          a team as a biological system where everything is connected.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#3B82F6', fontSize: '20px', marginBottom: '15px' }}>
                              Understanding System Effects
                            </h3>
                            <p>
                              Teams realize that even minor things may have major effects once systemic thinking is applied. 
                              A simple occurrence such as delay in replying to a message may be symptoms of deeper issues—unclear 
                              roles, weak communication, or unspoken assumptions.
                            </p>
                          </div>

                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#10B981', fontSize: '20px', marginBottom: '15px' }}>
                              Building Resilience
                            </h3>
                            <p>
                              Systemic thinking strengthens teams to be more prepared for complexity or uncertainty. By knowing 
                              the system as a whole and connections between parts, members can find sources of problems, recognize 
                              recurring situations, and react proactively rather than reactively.
                            </p>
                          </div>

                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#F59E0B', fontSize: '20px', marginBottom: '15px' }}>
                              Personal Development
                            </h3>
                            <p>
                              This systemic thinking becomes a big factor for personal development. The group will be more 
                              conscious of how their behavior affects others and acquire the ability to stop, think, and 
                              change behavior intentionally. This nurtures compassion and responsibility.
                            </p>
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
                            Creating Self-Sustaining Systems
                          </h3>
                          <p>
                            Organizations that adopt systemic thinking form teams that are not only efficient under pressure 
                            but equally capable of developing, adapting to change, and flourishing in the long run. They 
                            become self-sustaining systems - always exploring, talking and adjusting.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Journey Section */}
                  {activeSection === 'journey' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Journey Beyond This Lab
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          {/* Students */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#3B82F6', fontSize: '20px', marginBottom: '15px' }}>
                              For School & College Students
                            </h3>
                            <ol style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '8px' }}>Do you see your subjects as individual study areas, or combine them as different parts of a bigger picture?</li>
                              <li style={{ marginBottom: '8px' }}>While preparing for exams, do you concentrate only on answers, or wonder how they apply in real life?</li>
                              <li style={{ marginBottom: '8px' }}>In group projects, do you notice how one student's contribution affects the result for everyone?</li>
                              <li style={{ marginBottom: '8px' }}>Continue living with the attitude that every decision in learning is a ripple of your development.</li>
                            </ol>
                          </div>

                          {/* Startups */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#10B981', fontSize: '20px', marginBottom: '15px' }}>
                              For Startups
                            </h3>
                            <ol style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '8px' }}>When confronted with problems, do you solve only the immediate one or look at the bigger picture?</li>
                              <li style={{ marginBottom: '8px' }}>Do you perceive customer needs, team morale, and product design as separate or deeply connected?</li>
                              <li style={{ marginBottom: '8px' }}>When deciding, do you consider long-term ripple effects instead of only instant success?</li>
                              <li style={{ marginBottom: '8px' }}>Bring a systems-first approach, creating culture reliant on interconnections for growth.</li>
                            </ol>
                          </div>

                          {/* Corporate */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#F59E0B', fontSize: '20px', marginBottom: '15px' }}>
                              For Corporate Teams
                            </h3>
                            <ol style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '8px' }}>Do you consider your department isolated or as one piece of a bigger organizational ecosystem?</li>
                              <li style={{ marginBottom: '8px' }}>When conflicts arise, do you seek systemic root causes or stop at pointing out individuals?</li>
                              <li style={{ marginBottom: '8px' }}>Do you see how decisions by one unit affect the whole organization?</li>
                              <li style={{ marginBottom: '8px' }}>Be a carrier of team-oriented mindset that sees community as a system with shared responsibility.</li>
                            </ol>
                          </div>

                          {/* Founders */}
                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', 
                            border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#8B5CF6', fontSize: '20px', marginBottom: '15px' }}>
                              For Founders
                            </h3>
                            <ol style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '8px' }}>Are you only result-oriented when goal-setting, or do you map out resources and people involved?</li>
                              <li style={{ marginBottom: '8px' }}>Have you observed culture, market shifts, and customer trust to be in seamless unification?</li>
                              <li style={{ marginBottom: '8px' }}>Have you made long-term sustainability priority over short-term expansion?</li>
                              <li style={{ marginBottom: '8px' }}>Maintain a leader's characteristic of fathoming patterns and being the anchor connecting influence threads.</li>
                            </ol>
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
                            What This Lab Does
                          </h3>
                          <p>
                            The Systemic Thinking Lab is a revolution in the way one sees the world. It takes everyday 
                            experiences beyond their boundaries and shows the invisible connections that intertwine every 
                            consequence. Real change happens when we recognize the whole instead of focusing on pieces alone.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reflection Section */}
                  {activeSection === 'reflection' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Reflection Corner
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px', fontStyle: 'italic' }}>
                          This space is for you. Pause, think deeply, and write honestly. There are no right or wrong 
                          answers - just your personal insights coming to light.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          {/* Personal Insight */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#3B82F6', fontSize: '20px', marginBottom: '15px' }}>
                              Personal Insight
                            </h3>
                            <ol style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '10px' }}>Which part of this systemic thinking lab stayed with you the most, and why did it feel important?</li>
                              <li style={{ marginBottom: '10px' }}>Which aspect of the activities encouraged you to notice connections, patterns, or ripple effects you normally miss?</li>
                              <li style={{ marginBottom: '10px' }}>Did you notice any inner resistance, discomfort, or surprise while zooming out to see the whole system? What did it teach you?</li>
                            </ol>
                          </div>

                          {/* Thought Process */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#10B981', fontSize: '20px', marginBottom: '15px' }}>
                              Thought Process & Clarity
                            </h3>
                            <ol start="4" style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '10px' }}>Which new mindset or practice do you find shaping your understanding of issues since completing this lab?</li>
                              <li style={{ marginBottom: '10px' }}>In what ways has your view of cause and effect evolved beyond simple linear (A→B) thinking?</li>
                              <li style={{ marginBottom: '10px' }}>Where in your life would mapping the bigger picture help you see things more clearly?</li>
                            </ol>
                          </div>

                          {/* Real-Life Application */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#F59E0B', fontSize: '20px', marginBottom: '15px' }}>
                              Real-Life Application
                            </h3>
                            <ol start="7" style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '10px' }}>Is there a situation in your day-to-day life where applying systemic thinking might change the outcome?</li>
                              <li style={{ marginBottom: '10px' }}>What regular habit can you adopt to become more mindful of the chain reactions your choices create?</li>
                              <li style={{ marginBottom: '10px' }}>In what way will you stop and reflect on assumptions, boundaries, and people involved before moving forward?</li>
                            </ol>
                          </div>

                          {/* Personal Commitment */}
                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', 
                            border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#8B5CF6', fontSize: '20px', marginBottom: '15px' }}>
                              Personal Commitment
                            </h3>
                            <ol start="10" style={{ paddingLeft: '20px' }}>
                              <li style={{ marginBottom: '10px' }}>Which insight about systems do you feel will guide you moving ahead?</li>
                              <li style={{ marginBottom: '10px' }}>How would you be in your daily talks, decisions, and planning if you led with a systems perspective?</li>
                              <li style={{ marginBottom: '10px' }}>How will you notice if you start slipping back into quick fixes and what will help you return to systemic thinking?</li>
                            </ol>
                          </div>
                        </div>

                        <div style={{ 
                          marginTop: '30px', 
                          padding: '25px', 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '15px',
                          textAlign: 'center'
                        }}>
                          <h3 style={{ color: '#06ffa5', fontSize: '20px', marginBottom: '15px' }}>
                            Systems Perspective
                          </h3>
                          <p>
                            Remember, systemic thinking is not about finding perfect answers but about honest exploration 
                            of patterns and connections. Let these questions guide you toward deeper understanding of how 
                            you fit within the larger systems around you.
                          </p>
                          <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                            "Every moment of systems awareness is a step toward greater clarity and interconnected wisdom."
                          </p>
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
            HI LAB 6 – Systemic Thinking powered by
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
          Understanding patterns • Seeing connections • Making better decisions
        </div>
      </footer>
    </div>
  )
}