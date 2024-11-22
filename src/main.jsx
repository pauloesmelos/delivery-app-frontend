import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/tailwind.css';
import { GlobalCartProvider } from './global/cart/GlobalCart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalCartProvider>
      <App />
    </GlobalCartProvider>
  </StrictMode>,
)