import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AaruchudarLogo from './assets/A_Logo.png'

export default function Lab5() {
  const [activeSection, setActiveSection] = useState('welcome')

  const sections = {
    welcome: 'Welcome',
    about: 'About Us',
    conflict: 'Intelligent Conflict',
    tools: 'Recovery Tools',
    games: 'Games & Activities',
    leadership: 'Leadership',
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
              <p className="slogan">HI LAB 5 – Intelligent Conflict and Recovery</p>
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
                        HI LAB 5 – "Intelligent Conflict and Recovery"
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>Welcome Statement</h2>
                        <p>
                          We are pleased to welcome you to this specially-designed lab opportunity. In today's context, 
                          disagreements may easily become arguments, or may become something that is never resolved and 
                          simply is discounted or ignored. This Intelligent Conflict and Recovery Lab is an opportunity 
                          for you to experience disagreement with compassion, skill, and thoughtfulness.
                        </p>
                        
                        <p>
                          This lab is based on the premise that disagreement is not something to avoid, but rather a 
                          moment of mental tension that can be handled in ways that are constructive and can lead to 
                          growth and understanding. You will be involved in some immersive experiences, will have 
                          conversations that are honest and productive, and will leave with some of the best and most 
                          practical ways to resolve differences respectfully to regain trust in others and yourself.
                        </p>

                        <p>
                          At HI Lab we are looking to support and grow human intelligence through the development of 
                          spaces where repair, restoration and recovery is part of the norm. The lab you are involved 
                          with is a step in building workplaces, and a community, where conflict becomes something we 
                          move to with a sense of openness, calmly engage with, and then take action positively.
                        </p>

                        <p>
                          We look forward to your feedback, your contributions to the lab and the profound ways this 
                          lab will punctuate your thinking and action.
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
                            <li>Stronger emotional trust and openness</li>
                            <li>Clearer pathways to resolve tension and misunderstandings</li>
                            <li>Reduced hidden conflicts and unspoken frustrations</li>
                            <li>A shared language for healthy conflict and recovery</li>
                            <li>Measurable shifts in team resilience through pre/post diagnostics</li>
                          </ul>
                          <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                            This is not just conflict management. This is a culture of intelligent recovery.
                          </p>
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

                  {/* Intelligent Conflict Section */}
                  {activeSection === 'conflict' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        What is Intelligent Conflict and Recovery?
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p>
                          We, as human-groups, invariably have conflict — be it among a startup team, a class section, 
                          a corporate department, or a company's leadership circle. The sole factor that could make a 
                          group harmonious is what actually happens when conflict sets in.
                        </p>

                        <div style={{ 
                          background: 'rgba(6, 255, 165, 0.1)', 
                          border: '1px solid rgba(6, 255, 165, 0.3)', 
                          borderRadius: '12px',
                          padding: '20px',
                          margin: '20px 0'
                        }}>
                          <h3 style={{ color: '#06ffa5', marginBottom: '15px' }}>The Sound of Productive Tension</h3>
                          <p>When people hear the word "tension," they often think of something bad. But in this Lab, tension isn't a sign to avoid. It's something we pay attention to.</p>
                          
                          <h4 style={{ color: '#00d4ff', marginTop: '20px' }}>What Does Productive Tension Sound Like?</h4>
                          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Someone saying, "Can you explain your point of view?"</li>
                            <li>A teammate saying, "I see it differently, and here's why."</li>
                            <li>Respectful interruptions to keep ideas alive before they fade</li>
                            <li>Questions that go deeper: "What matters most in this decision?"</li>
                          </ul>
                        </div>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>
                          Why Conflict Recovery Matters
                        </h2>
                        <p>
                          Conflicts that are left unresolved never just fade away; rather, they accumulate as something 
                          we might call emotional debt. This debt continues to weigh on the conscience of any single 
                          individual or team, consuming scarce energy resources, bearing ire, and compromising clarity 
                          of thought.
                        </p>

                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginTop: '30px' }}>
                          Step into the World of Constructive Resolution
                        </h2>
                        <p>
                          Consider a space where conflict isn't a feared or avoided thing, but rather something we 
                          embrace as a normal part of connected learning and growing together. In this space, important 
                          habits emerge:
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
                            <h4 style={{ color: '#00d4ff' }}>Listening with Intention</h4>
                            <p style={{ fontSize: '14px' }}>People truly listen without interrupting or planning responses.</p>
                          </div>
                          <div style={{ 
                            background: 'rgba(0, 212, 255, 0.1)', 
                            padding: '15px', 
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 212, 255, 0.3)'
                          }}>
                            <h4 style={{ color: '#00d4ff' }}>Honest Communication</h4>
                            <p style={{ fontSize: '14px' }}>Using "I feel" statements that keep dialogue safe and constructive.</p>
                          </div>
                          <div style={{ 
                            background: 'rgba(0, 212, 255, 0.1)', 
                            padding: '15px', 
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 212, 255, 0.3)'
                          }}>
                            <h4 style={{ color: '#00d4ff' }}>Honoring Emotions</h4>
                            <p style={{ fontSize: '14px' }}>Feelings are recognized as valid and important parts of resolution.</p>
                          </div>
                          <div style={{ 
                            background: 'rgba(0, 212, 255, 0.1)', 
                            padding: '15px', 
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 212, 255, 0.3)'
                          }}>
                            <h4 style={{ color: '#00d4ff' }}>Shared Responsibility</h4>
                            <p style={{ fontSize: '14px' }}>Focus shifts from "who's to blame" to "how do we move forward together?"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tools Section */}
                  {activeSection === 'tools' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        Tools That Help You Handle Conflict Smarter
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          At Aaruchudar, we don't provide a quick fix. We provide a means for you to slow down, 
                          observe what is really going on, and respond with intention. These are three main tools 
                          from this lab to help you work through conflict and recover from it.
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
                              1. Trigger Cards
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Becoming aware of what triggers you is the first step toward managing it better."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What is it:</h4>
                            <p>A group of cards containing different common trigger words, actions or situations that often provoke strong feelings or responses in people.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why It Works:</h4>
                            <p>Trigger cards help you recognize and identify your triggers sooner so you can pause and react in a calmer response.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>Creates space for calmer choices and offers opportunities to interact relationally rather than reactively.</p>
                          </div>

                          {/* Tool 2 */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '24px', marginBottom: '15px' }}>
                              2. Rituals for Resiliency
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Healing and moving forward happens in small, steady steps."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What is It:</h4>
                            <p>A collection of simple activities and practices that foster reconnection and resiliency after conflicts.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why Does It Work:</h4>
                            <p>Recovery doesn't happen in one fix, but over time. Rituals help make healing part of our regular rhythm.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>Practice patience, generosity, courage, and resilience together. Restoring trust becomes easier.</p>
                          </div>

                          {/* Tool 3 */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '24px', marginBottom: '15px' }}>
                              3. Conflict Timeline Map
                            </h2>
                            <p style={{ fontStyle: 'italic', color: '#00d4ff', marginBottom: '15px' }}>
                              "Because knowing the story allows you create a different, better one."
                            </p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '20px' }}>What It Is:</h4>
                            <p>A visual tool that helps you plot the sequence of events that led to a conflict, outlining feelings, actions, and reactions.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Why It Works:</h4>
                            <p>When you map out the whole story, you see the bigger picture and uncover missed opportunities for earlier healing.</p>
                            
                            <h4 style={{ color: '#ffffff', marginTop: '15px' }}>Human Benefit:</h4>
                            <p>Helps step back, understand what happened, and find clear ways forward together with shared responsibility.</p>
                          </div>
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
                              title: "1. Conflict Theatre",
                              description: "Step into someone else's argument and discover endings no one saw coming. This theatre shows you more than words ever could."
                            },
                            {
                              title: "2. Feel–Think–Say",
                              description: "Learn to feel strongly without sounding harsh. Discover how thinking before speaking makes your point stronger."
                            },
                            {
                              title: "3. Trigger Map",
                              description: "Discover what really sets you off and spot patterns before they explode. Map where your emotions start."
                            },
                            {
                              title: "4. Resolution Relay",
                              description: "Solve conflicts in just three moves. Find out if the quickest answer is also the fairest when speed and clarity race."
                            },
                            {
                              title: "5. Truth Bomb Game",
                              description: "Drop truth without dropping respect. Learn how honesty wrapped in care changes everything."
                            },
                            {
                              title: "6. Battle vs Bridge",
                              description: "Discover if your arguments build walls or bridges. Learn when to switch from defending to connecting."
                            },
                            {
                              title: "7. Break & Mend",
                              description: "See how breaking something can show the secret to making it stronger. Rebuild piece by piece."
                            },
                            {
                              title: "8. Verbal Judo",
                              description: "Turn aggression into calm without force. Hold your ground with gentleness and make your tone your shield."
                            },
                            {
                              title: "9. How Would Gandhi Handle This?",
                              description: "Solve conflicts like history's greatest leaders. Discover if patience can outmatch provocation in today's world."
                            },
                            {
                              title: "10. Heal the Team",
                              description: "Repair trust after it's broken through group effort. Build recovery together and discover new bonds."
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
                            These games and activities are designed to help you develop authentic human skills: 
                            patience, empathy, and courage - skills which no app or shortcut can replace. They 
                            support you in being mindful, connected and clear even during the toughest times.
                          </p>
                          <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
                            <li>Identifying tension before it turns into an explosion</li>
                            <li>Communicating with honesty and kindness</li>
                            <li>Rebuilding trust, even in the smallest meaningful ways</li>
                            <li>Identifying conflict as an opportunity to develop relationships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Leadership Section */}
                  {activeSection === 'leadership' && (
                    <div className="content-section">
                      <h1 style={{ color: '#06ffa5', fontSize: '32px', marginBottom: '20px' }}>
                        How Leaders Turn Conflict Into a Catalyst for Growth
                      </h1>
                      
                      <div style={{ color: '#ffffff', lineHeight: '1.8', fontSize: '16px' }}>
                        <p style={{ marginBottom: '30px' }}>
                          Conflict is difficult but a few leaders taught us how to respond to it productively, 
                          rather than destructively. They faced conflict, leading the way with discussions even 
                          when it was uncomfortable and brought others along for the journey.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                          {/* Lincoln */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#3B82F6', fontSize: '24px', marginBottom: '15px' }}>
                              Abraham Lincoln - Healing a Divided Nation
                            </h2>
                            <p>
                              During the American Civil War (1861-1865), the country was split in two. Abraham Lincoln 
                              faced the huge challenge of keeping the nation together. Rather than ignoring opposing views, 
                              Lincoln chose to listen carefully, even to voices that disagreed with him strongly.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                              His famous Gettysburg Address didn't blame anyone but focused on uniting the country around 
                              shared values like freedom and equality. His approach to handle conflict calmly and lead with 
                              empathy helped the United States recover and rebuild after one of its darkest times.
                            </p>
                          </div>

                          {/* Mandela */}
                          <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#10B981', fontSize: '24px', marginBottom: '15px' }}>
                              Nelson Mandela – From Prisoner to President, A Voice for Unity
                            </h2>
                            <p>
                              Nelson Mandela spent 27 years imprisoned for opposing apartheid in South Africa. When released 
                              in 1990, instead of seeking revenge, he chose to heal the nation. Mandela invited his former 
                              enemies to discuss their fears and hopes.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                              His leadership was grounded in forgiveness and listening. He helped South Africans work through 
                              painful conflicts step by step, relationship by relationship. This work was instrumental in the 
                              peaceful end to apartheid and creation of a new democratic South Africa.
                            </p>
                          </div>

                          {/* Gandhi */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '15px',
                            padding: '25px'
                          }}>
                            <h2 style={{ color: '#F59E0B', fontSize: '24px', marginBottom: '15px' }}>
                              Mahatma Gandhi - Using Nonviolence to Resolve Conflict
                            </h2>
                            <p>
                              Gandhi played an important role in India's struggle for independence through nonviolent resistance. 
                              While India was going through strife during the 1920s-1940s, Gandhi believed true change occurs 
                              from understanding and peaceful struggle, not hatred or force.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                              The Salt March of 1930 exemplified how Gandhi taught people to speak their truth without 
                              disrespect and listen to their opponents. He demonstrated how conflict can be transformed into 
                              powerful nonviolent movement for liberation - showing that conflict doesn't have to mean hatred.
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
                            Leadership Lessons
                          </h3>
                          <p>
                            Leaders such as Lincoln, Mandela, and Gandhi remind us that conflict is not necessarily 
                            permanent. The difference is an approach to hard conversations guided by patience, honesty, 
                            care and respect - creating space for healing and growth.
                          </p>
                          <p style={{ marginTop: '15px' }}>
                            These narratives remind us that intelligent conflict and recovery is not simply about "solving" 
                            an issue - but about creating a stronger and more compassionate community.
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
                        <h2 style={{ color: '#00d4ff', fontSize: '24px', marginBottom: '20px' }}>
                          What They Carry Forward
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                          {/* Students */}
                          <div style={{ 
                            background: 'rgba(59, 130, 246, 0.1)', 
                            border: '1px solid rgba(59, 130, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#3B82F6', fontSize: '20px', marginBottom: '15px' }}>
                              For Students (Schools & Colleges)
                            </h3>
                            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>From reacting fast to repairing with care</h4>
                            <p>Students learn to recognize their first impulse in conflict and pause before acting. They carry forward:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                              <li>The skill to step back, breathe, and choose words that heal, not hurt</li>
                              <li>Awareness that trust can be rebuilt with patience and honesty</li>
                              <li>The habit of listening before defending themselves</li>
                              <li>Simple recovery tools like asking "What can I do right now to help fix?"</li>
                            </ul>
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
                            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>From heat-of-the-moment to harmony-driven choices</h4>
                            <p>Startup teams working under stress learn to:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                              <li>Spot tension early and deal with it before it grows</li>
                              <li>Focus on fixing the problem, not blaming the person</li>
                              <li>Pause to ask: "Will this move us forward together?"</li>
                              <li>Use respectful conversation to restore energy and trust</li>
                            </ul>
                          </div>

                          {/* Corporate */}
                          <div style={{ 
                            background: 'rgba(245, 158, 11, 0.1)', 
                            border: '1px solid rgba(245, 158, 11, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#F59E0B', fontSize: '20px', marginBottom: '15px' }}>
                              For Corporate Professionals / Teams
                            </h3>
                            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>From silent tension to open resolution</h4>
                            <p>Professionals carry forward:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                              <li>Confidence to bring up issues without making them personal</li>
                              <li>Awareness that how they speak in meetings affects team trust</li>
                              <li>The habit of asking "What's the outcome we both want?"</li>
                              <li>Skills to solve problems without losing respect</li>
                            </ul>
                          </div>

                          {/* Leaders */}
                          <div style={{ 
                            background: 'rgba(139, 92, 246, 0.1)', 
                            border: '1px solid rgba(139, 92, 246, 0.3)', 
                            borderRadius: '12px',
                            padding: '20px'
                          }}>
                            <h3 style={{ color: '#8B5CF6', fontSize: '20px', marginBottom: '15px' }}>
                              For Founders / Leaders
                            </h3>
                            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>From conflict avoider to trust builder</h4>
                            <p>Leaders understand that unresolved conflicts drain team spirit. They:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                              <li>Realize their tone in tense moments sets culture for everyone</li>
                              <li>Address problems directly, but with empathy</li>
                              <li>Ask: "What can I do that will make this team stronger?"</li>
                              <li>Lead by showing relationships matter as much as results</li>
                            </ul>
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
                            Lasting Note: A Culture That Heals Quickly
                          </h3>
                          <p>
                            Everyone walks away from this lab with more than conflict skills - they gain a new way of thinking. 
                            They don't just get over disagreements. They grow through them.
                          </p>
                          <p style={{ marginTop: '15px' }}>
                            Whether student, founder, team member, or startup, each one learns that a single act of repair 
                            can change the whole story. That's how recovery becomes part of the culture - not just a lesson 
                            you remember from the lab.
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
                          This is your moment to pause, breathe, and really check in with yourself. There's no right 
                          or wrong answers - only the truths you uncover about how you handle conflict and how you 
                          find your way back to understanding.
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
                              <li style={{ marginBottom: '10px' }}>Which moment in this lab shifted how you see conflict, and why?</li>
                              <li style={{ marginBottom: '10px' }}>Which part of the activities stretched you the most or made you step outside your comfort zone?</li>
                              <li style={{ marginBottom: '10px' }}>Did you feel anger, defensiveness, or surprise at any point? What did those feelings show you?</li>
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
                              <li style={{ marginBottom: '10px' }}>What's one new way you now see for handling disagreements?</li>
                              <li style={{ marginBottom: '10px' }}>After this lab, what does "winning" a conflict mean to you now?</li>
                              <li style={{ marginBottom: '10px' }}>In what part of your life could listening truly take the place of arguments?</li>
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
                              <li style={{ marginBottom: '10px' }}>Think of a real situation - at work, in studies, or in life - where you can put what you learned into action.</li>
                              <li style={{ marginBottom: '10px' }}>What simple daily habit could help you turn a brewing fight into a chance for problem-solving?</li>
                              <li style={{ marginBottom: '10px' }}>How will you remind yourself to start rebuilding trust when it's been shaken?</li>
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
                              <li style={{ marginBottom: '10px' }}>What's one thing you'll do differently the next time you face conflict?</li>
                              <li style={{ marginBottom: '10px' }}>If you put connection first, how would you show up in tense moments?</li>
                              <li style={{ marginBottom: '10px' }}>How will you know when a conflict is hurting trust - and how will you start to repair it?</li>
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
                            Take Your Time
                          </h3>
                          <p>
                            Remember, reflection is not about finding perfect answers. It's about honest exploration 
                            of your thoughts and feelings. Let these questions guide you toward deeper understanding 
                            of yourself and your approach to conflict and recovery.
                          </p>
                          <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                            "Every moment of reflection is a step toward greater clarity and connection."
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
            HI LAB 5 – Intelligent Conflict and Recovery powered by
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
          Building cultures of intelligent recovery • Human-centered conflict resolution
        </div>
      </footer>
    </div>
  )
}