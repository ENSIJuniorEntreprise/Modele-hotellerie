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

// Pages rendered WITHOUT shared Navbar / Footer
const standalonePages = ['/chambres', '/evenemets']

function App() {
  const path = window.location.pathname.toLowerCase()
  const CurrentPage = routes[path] || Accueil
  const isStandalone = standalonePages.includes(path)

  if (isStandalone) {
    return <CurrentPage />
  }

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