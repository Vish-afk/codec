import React from 'react';
import CodecLandingPage from '../src/pages/CodecLandingPage'; // Adjust this path if CodecLandingPage.jsx is in a different location relative to App.jsx
import './styles.css'; // Adjust this path if styles.css is in a different location relative to App.jsx

/**
 * App component serves as the main entry point for the application.
 * It renders the CodecLandingPage component.
 */
export default function App() {
  return (
    <div className="App">
      <CodecLandingPage />
    </div>
  );
}