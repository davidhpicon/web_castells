import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sponsors from './components/Sponsors/Sponsors'
import ScrollToTop from './components/ScrollToTop'

const Home            = lazy(() => import('./pages/Home'))
const LaColla         = lazy(() => import('./pages/LaColla'))
const VineFerCastells = lazy(() => import('./pages/VineFerCastells'))
const Actualitat      = lazy(() => import('./pages/Actualitat'))
const ArticleDetail   = lazy(() => import('./pages/ArticleDetail'))
const Calendari       = lazy(() => import('./pages/Calendari'))
const Contacte        = lazy(() => import('./pages/Contacte'))

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="spinner" />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/la-colla"            element={<LaColla />} />
            <Route path="/vine-a-fer-castells" element={<VineFerCastells />} />
            <Route path="/actualitat"          element={<Actualitat />} />
            <Route path="/actualitat/:id"      element={<ArticleDetail />} />
            <Route path="/calendari"           element={<Calendari />} />
            <Route path="/contacte"            element={<Contacte />} />
          </Routes>
        </Suspense>
      </main>
      <Sponsors />
      <Footer />
    </HashRouter>
  )
}
