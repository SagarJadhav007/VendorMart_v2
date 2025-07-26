import React from 'react';

const YELLOW = '#ffd700';
const WHITE = '#fff';
const ORANGE = '#ff9100';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', fontFamily: 'Arial, sans-serif' }}>
      {/* Background Image with Yellow Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundImage: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'), // Replace with a better Indian street food market image if you have one
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.85)'
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: ${YELLOW},
        opacity: 0.35,
        zIndex: 1
      }} />

      {/* Navigation Bar */}
      <nav style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        background: WHITE,
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        height: 64,
        boxSizing: 'border-box',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Logo (simple SVG) */}
          <div style={{ width: 38, height: 38, background: YELLOW, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
            <span style={{ fontWeight: 900, fontSize: 22, color: '#222' }}>S</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 22, color: '#222', letterSpacing: 1 }}>Street Connect</span>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', fontSize: 17 }}>
          <a href="#" style={{ color: '#ff9100', fontWeight: 700, textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Suppliers</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Orders</a>
          <a href="#" style={{ color: '#222', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Centered Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        paddingTop: 64
      }}>
        <div style={{
          background: YELLOW,
          opacity: 0.92,
          borderRadius: 16,
          padding: '48px 48px 36px 48px',
          maxWidth: 700,
          margin: '0 auto',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            color: '#444',
            marginBottom: 18,
            lineHeight: 1.1
          }}>
            Connect with the Best Street Food Suppliers Instantly
          </h1>
          <p style={{
            color: '#555',
            fontSize: '1.25rem',
            marginBottom: 32,
            fontWeight: 500
          }}>
            Street Connect bridges the gap between passionate street food vendors and reliable, high-quality ingredient and equipment suppliers. Grow your business with ease.
          </p>
          <div style={{ display: 'flex', gap: 18, marginTop: 8 }}>
            <a href="/login" style={{
              background: ORANGE,
              color: WHITE,
              fontWeight: 700,
              fontSize: 18,
              border: 'none',
              borderRadius: 8,
              padding: '14px 32px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Become a Vendor
            </a>
            <a href="/login" style={{
              background: 'transparent',
              color: '#b8860b',
              fontWeight: 700,
              fontSize: 18,
              border: 2px solid ${YELLOW},
              borderRadius: 8,
              padding: '14px 32px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Find Suppliers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}