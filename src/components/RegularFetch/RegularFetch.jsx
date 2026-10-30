import { useEffect, useState } from 'react'

function RegularFetch() {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:3001/posts', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        setPosts(await response.json())
        setStatus('success')
      } catch {
        if (!controller.signal.aborted) {
          setStatus('error')
        }
      }
    }

    fetchPosts()
    return () => controller.abort()
  }, [])

  return (
    <section className="content-panel regular-page">
      <div className="page-eyebrow"><span>01</span> DATA FETCHING</div>
      <h1>Regular Fetch</h1>
      {status === 'loading' && <p className="status-message" role="status">Please wait while loading...</p>}
      {status === 'error' && <p className="status-message error-message" role="alert">Error in fetching data.</p>}
      {status === 'success' && (
        <ul className="post-list">
          {posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      )}
    </section>
  )
}

export default RegularFetch