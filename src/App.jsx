import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import RegularFetch from './components/RegularFetch/RegularFetch'
import ReactQueryFetch from './components/ReactQueryFetch/ReactQueryFetch'
import LoadDataByClick from './components/LoadDataByClick/LoadDataByClick'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Regular Fetch', path: '/regular-fetch' },
  { name: 'React Query Fetch', path: '/react-query-fetch' },
  { name: 'Load Data By Click', path: '/load-data-by-click' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink className="brand" to="/" aria-label="TanStack React home">
            <span className="brand-mark">T</span>
            <span className="brand-name">tanstack<span> / </span>react</span>
          </NavLink>
          <nav className="page-nav" aria-label="Pages">
            {pages.map((page, index) => (
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                to={page.path}
                end={page.path === '/'}
                key={page.path}
              >
                <span className="nav-index">0{index}</span>{page.name}
              </NavLink>
            ))}
          </nav>
          <span className="version-tag">QUERY LAB <i /></span>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home pages={pages} />} />
            <Route path="/regular-fetch" element={<RegularFetch />} />
            <Route path="/react-query-fetch" element={<ReactQueryFetch />} />
            <Route path="/load-data-by-click" element={<LoadDataByClick />} />
            <Route path="*" element={<Home pages={pages} />} />
          </Routes>
        </main>
        <footer className="page-footer"><span>LEARNING ROUTES</span><span>REACT QUERY STUDY</span></footer>
      </div>
    </BrowserRouter>
  )
}

export default App
