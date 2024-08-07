import { Navbar } from './components';
import { About, Contact, Footer, Gallery, Home } from './pages';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App;