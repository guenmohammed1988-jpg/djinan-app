import React, { useState } from 'react';

const DjinanApp = () => {
  return (
    <div style={{
      backgroundColor: '#f0fdf4',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#166534', marginBottom: '10px' }}>تطبيق دجنان</h1>
        <p style={{ color: '#374151', fontSize: '18px' }}>مرحباً بك في مشروعك الأول!</p>
        <button 
          onClick={() => alert('تم تشغيل التطبيق بنجاح!')}
          style={{
            backgroundColor: '#22c55e',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
          ابدأ الآن
        </button>
      </div>
    </div>
  );
};

export default DjinanApp;
