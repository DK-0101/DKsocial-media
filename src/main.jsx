import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { DarkModeContextProvider } from './Context/DarkModeContext.js'
import { AuthContextProvider } from './Context/AuthContext.js'

render(
   <DarkModeContextProvider>
    <AuthContextProvider>
       <App />
    </AuthContextProvider>
   </DarkModeContextProvider>,
document.getElementById('app'))
