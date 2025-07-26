import React, { useState, useEffect } from 'react';

const YELLOW = '#ffd700';
const WHITE = '#fff';
const ORANGE = '#ff6b35';
const DARK_ORANGE = '#e55a2b';
const DEEP_YELLOW = '#ffb700';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: '🍜',
      title: 'Quality Ingredients',
      description: 'Source fresh, authentic ingredients from verified suppliers'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your supplies delivered quickly to keep your business running'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with bulk discounts for growing vendors'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      position: 'relative', 
      overflow: 'hidden', 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.1
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: radial-gradient(circle, ${YELLOW}40, transparent),
              borderRadius: '50%',
              left: ${Math.random() * 100}%,
              top: ${Math.random() * 100}%,
              animation: float ${3 + Math.random() * 4}s ease-in-out infinite,
              animationDelay: ${Math.random() * 2}s
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <nav style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        height: 80,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ 
            width: 48, 
            height: 48, 
            background: linear-gradient(135deg, ${YELLOW}, ${DEEP_YELLOW}), 
            borderRadius: 12, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: 12,
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
            transform: isLoaded ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}>
            <span style={{ fontWeight: 900, fontSize: 24, color: '#1a1a2e' }}>S</span>
          </div>
          <span style={{ 
            fontWeight: 800, 
            fontSize: 26, 
            color: '#1a1a2e', 
            letterSpacing: -0.5,
            background: linear-gradient(135deg, ${ORANGE}, ${DEEP_YELLOW}),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Street Connect</span>
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', fontSize: 16, fontWeight: 500 }}>
          {['Home', 'Suppliers', 'Orders', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href="#" 
              style={{ 
                color: item === 'Home' ? ORANGE : '#1a1a2e', 
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.3s ease',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
                transitionDelay: ${index * 0.1}s
              }}
            >
              {item}
              {item === 'Home' && (
                <div style={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: linear-gradient(90deg, ${ORANGE}, ${DEEP_YELLOW}),
                  borderRadius: 2
                }} />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 80px)',
        width: '100%',
        padding: '0 40px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
          padding: '60px 60px 50px 60px',
          maxWidth: 900,
          margin: '0 auto',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          transitionDelay: '0.2s'
        }}>
          <div style={{
            background: linear-gradient(135deg, ${YELLOW}20, ${ORANGE}10),
            borderRadius: 50,
            padding: '8px 24px',
            marginBottom: 32,
            fontSize: 14,
            fontWeight: 600,
            color: ORANGE,
            border: 1px solid ${ORANGE}30
          }}>
            🚀 Connecting Street Food Vendors & Suppliers
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#1a1a2e',
            marginBottom: 24,
            lineHeight: 1.1,
            background: linear-gradient(135deg, #1a1a2e, ${ORANGE}),
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Revolutionize Your Street Food Business
          </h1>

          <p style={{
            color: '#555',
            fontSize: '1.4rem',
            marginBottom: 40,
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: 700
          }}>
            Connect with premium suppliers, streamline your operations, and grow your street food empire with our cutting-edge platform designed for ambitious vendors.
          </p>

          <div style={{ display: 'flex', gap: 20, marginBottom: 50, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onMouseEnter={() => setHoveredButton('vendor')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                background: hoveredButton === 'vendor' 
                  ? linear-gradient(135deg, ${DARK_ORANGE}, ${ORANGE}) 
                  : linear-gradient(135deg, ${ORANGE}, ${DEEP_YELLOW}),
                color: WHITE,
                fontWeight: 700,
                fontSize: 18,
                border: 'none',
                borderRadius: 12,
                padding: '18px 36px',
                cursor: 'pointer',
                boxShadow: hoveredButton === 'vendor' 
                  ? '0 8px 30px rgba(255, 107, 53, 0.4)' 
                  : '0 6px 20px rgba(255, 107, 53, 0.3)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transform: hoveredButton === 'vendor' ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)'
              }}
            >
              🍕 Become a Vendor
            </button>
            <button
              onMouseEnter={() => setHoveredButton('supplier')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                background: hoveredButton === 'supplier' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                color: ORANGE,
                fontWeight: 700,
                fontSize: 18,
                border: 2px solid ${ORANGE},
                borderRadius: 12,
                padding: '16px 34px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transform: hoveredButton === 'supplier' ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                boxShadow: hoveredButton === 'supplier' ? '0 8px 25px rgba(255, 107, 53, 0.2)' : 'none'
              }}
            >
              🏪 Find Suppliers
            </button>
          </div>

          {/* Features Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 30,
            width: '100%',
            marginTop: 20
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  background: 'rgba(255, 215, 0, 0.05)',
                  borderRadius: 16,
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: ${0.5 + index * 0.1}s
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{feature.icon}</div>
                <h3 style={{ 
                  fontSize: 18, 
                  fontWeight: 700, 
                  color: '#1a1a2e', 
                  marginBottom: 8 
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: 14, 
                  color: '#666', 
                  lineHeight: 1.5, 
                  margin: 0 
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Keyframes for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 0 20px !important;
            flex-direction: column;
            height: auto !important;
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          
          .hero-content {
            padding: 40px 30px !important;
          }
          
          .button-group {
            flex-direction: column !important;
            width: 100%;
          }
          
          .button-group button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}