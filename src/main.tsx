import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { theme } from './modules/global/theme'
import { AuthProvider } from './context/AuthProvider'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.ts')
    .then((registration) => {
      console.log('Service Worker registrado com sucesso:', registration)
    })
    .catch((error) => {
      console.error('Falha ao registrar o Service Worker:', error)
    })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
