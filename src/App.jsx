import {useState} from 'react'

import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home'
import DarkKnight from './pages/DarkKnight'
import Gadgets from './pages/Gadgets'
import Villains from './pages/Villains'
import Media from './pages/Media.jsx'

function App(){
  const [page, setPage] = useState('home')

  return(
    <>
      <Header
        onShowHome={() => setPage('home')}
        onShowKnight={() => setPage('knight')}
        onShowGadgets={() => setPage('gadgets')}
        onShowVillains={() => setPage('villains')}
        onShowMedia={() => setPage('media')}
      />

      {page === 'home' && <Home />}
      {page === 'knight' && <DarkKnight />}
      {page === 'gadgets' && <Gadgets />}
      {page === 'villains' && <Villains />}
      {page === 'media' && <Media />}

      <Footer></Footer>
    </>
  )
}

export default App