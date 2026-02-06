
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Actually, I'll rely on App.css primarily as requested, but standard vite setup has index.css.
// I'll make sure main imports App.css or just relies on it being imported in App.jsx.
// In the code above, App.jsx imports App.css.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
