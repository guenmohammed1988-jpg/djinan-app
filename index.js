import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// هذا السطر يبحث عن عنصر id="root" الموجود في ملف index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// هنا يتم تشغيل تطبيقك (تطبيق دجنان) داخل المتصفح
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
