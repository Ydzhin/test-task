import React from 'react'
import { Provider } from 'react-redux'
import { MainPage } from './components/pages/main'
import GlobalStyle from './GlobalStyle'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainPage />
    </Provider>
  )
}

export default App
