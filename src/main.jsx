import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Sharedcontext from './contextapi/Sharedcontext.jsx'
import AuthContext from './contextapi/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='319709854266-tbtof3l8bq6dolqke44dph70mkcqsjtb.apps.googleusercontent.com'>
      <Sharedcontext>
        <AuthContext>
          <App />
        </AuthContext>
      </Sharedcontext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
