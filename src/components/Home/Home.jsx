import { NavLink } from 'react-router-dom'

function Home({ pages }) {
  return (
    <section className="home-page">
      <div className="page-eyebrow"><span>00</span> ROUTE INDEX</div>
      <h1>Pages<span className="heading-period">.</span></h1>
      <div className="route-list">
        {pages.slice(1).map((page, index) => (
          <NavLink className="route-link" to={page.path} key={page.path}>
            <span className="route-number">0{index + 1}</span>
            <span className="route-name">{page.name}</span>
            <span className="route-arrow" aria-hidden="true" />
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default Home