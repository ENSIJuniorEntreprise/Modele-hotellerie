import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Accueil from './pages/Accueil'
import Chambres from './pages/Chambres'
import Evenemets from './pages/Evenemets'
import Services from './pages/Services'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'

const routes = {
  '/': Accueil,
  '/accueil': Accueil,
  '/chambres': Chambres,
  '/evenemets': Evenemets,
  '/services': Services,
  '/galerie': Galerie,
  '/contact': Contact,
  '/reservation': Reservation,
}
import Chambres from './pages/Chambres'

function App() {
  return <Chambres />
}

export default App

function App() {
  const CurrentPage = routes[window.location.pathname.toLowerCase()] || Accueil

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
