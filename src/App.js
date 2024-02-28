
import './App.css'
import { Logo } from './Logo/Logo'
import { Footer } from './footer/Footer'
import { ItemsContainer } from './items-container/ItemsContainer'
import { MainSection } from './main-section/MainSection'
import { MidSectionHead } from './mid-section/MidSectionHead'

function App() {

  return (
    <>
      <Logo />
      <MainSection />
      <MidSectionHead />
      <ItemsContainer />
      <Footer />
    </>
  )
}

export default App
