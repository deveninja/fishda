import React from 'react'
import Main from './components/containers/Main'
import NavBar from './components/containers/NavBar'
import Footer from './components/dumb/Footer'


const App = () => (
  <div>
    <NavBar />
      <Main />
    <Footer />
  </div>
)

export default App;
