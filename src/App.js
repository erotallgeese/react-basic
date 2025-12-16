import React, { useState } from 'react';
import { Cloud, Zap, Globe, CheckCircle } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const features = [
    { icon: Cloud, title: 'Cloud-Native', desc: 'Built for the cloud' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
    { icon: Globe, title: 'Global CDN', desc: 'Worldwide distribution' },
    { icon: CheckCircle, title: 'Auto-Deploy', desc: 'CI/CD integrated' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      background: 'white',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#5a67d8',
      margin: '0 0 8px 0'
    },
    headerSubtitle: {
      color: '#718096',
      margin: 0
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 24px'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '32px',
      marginBottom: '32px'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '16px'
    },
    cardText: {
      color: '#718096',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    counterSection: {
      background: '#edf2f7',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px'
    },
    counterTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '16px'
    },
    counterControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    button: {
      padding: '12px 24px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    buttonMinus: {
      background: '#f56565',
      color: 'white'
    },
    buttonPlus: {
      background: '#48bb78',
      color: 'white'
    },
    buttonReset: {
      background: '#718096',
      color: 'white'
    },
    countDisplay: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#5a67d8',
      width: '80px',
      textAlign: 'center'
    },
    inputSection: {
      background: '#faf5ff',
      borderRadius: '12px',
      padding: '24px'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #d6bcfa',
      borderRadius: '8px',
      fontSize: '16px',
      marginBottom: '12px',
      boxSizing: 'border-box'
    },
    greeting: {
      fontSize: '20px',
      color: '#553c9a',
      fontWeight: '500'
    },
    greetingName: {
      color: '#44337a',
      fontWeight: 'bold'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    featureCard: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '24px',
      transition: 'box-shadow 0.2s'
    },
    featureIcon: {
      marginBottom: '12px'
    },
    featureTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '8px'
    },
    featureDesc: {
      color: '#718096',
      fontSize: '14px'
    },
    cta: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      padding: '32px',
      color: 'white'
    },
    ctaTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '12px'
    },
    ctaText: {
      marginBottom: '16px',
      opacity: 0.9,
      lineHeight: '1.6'
    },
    ctaButton: {
      background: 'white',
      color: '#5a67d8',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer'
    },
    footer: {
      background: 'white',
      borderTop: '1px solid #e2e8f0',
      padding: '24px',
      textAlign: 'center',
      color: '#718096'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Azure Static Web App Demo</h1>
        <p style={styles.headerSubtitle}>React + Azure = ⚡️</p>
      </header>

      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Welcome to Your App!</h2>
          <p style={styles.cardText}>
            This is a feature-rich demo showcasing React components deployed on Azure Static Web Apps.
          </p>

          <div style={styles.counterSection}>
            <h3 style={styles.counterTitle}>Interactive Counter</h3>
            <div style={styles.counterControls}>
              <button
                onClick={() => setCount(count - 1)}
                style={{...styles.button, ...styles.buttonMinus}}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                -
              </button>
              <span style={styles.countDisplay}>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                style={{...styles.button, ...styles.buttonPlus}}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                +
              </button>
              <button
                onClick={() => setCount(0)}
                style={{...styles.button, ...styles.buttonReset}}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Reset
              </button>
            </div>
          </div>

          <div style={styles.inputSection}>
            <h3 style={styles.counterTitle}>Personalized Greeting</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              style={styles.input}
            />
            {name && (
              <p style={styles.greeting}>
                Hello, <span style={styles.greetingName}>{name}</span>! 👋
              </p>
            )}
          </div>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={styles.featureCard}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'}
            >
              <div style={styles.featureIcon}>
                <feature.icon size={48} color="#5a67d8" />
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready to Deploy? 🚀</h2>
          <p style={styles.ctaText}>
            Push your code to GitHub and let Azure Static Web Apps handle the rest with automatic builds and deployments.
          </p>
          <button
            style={styles.ctaButton}
            onMouseOver={(e) => e.target.style.background = '#f7fafc'}
            onMouseOut={(e) => e.target.style.background = 'white'}
          >
            Learn More
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Built with React ⚛️ • Deployed on Azure ☁️</p>
      </footer>
    </div>
  );
}

export default App;