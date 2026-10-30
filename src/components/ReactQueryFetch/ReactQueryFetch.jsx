import './ReactQueryFetch.css'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const fetchpost = () => {
    return axios.get('http://localhost:3001/posts')
}

const ReactQueryFetch = () => {
    const { data, isLoading, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => fetchpost()
    })
  return (
    <section className="empty-page">
      <h1>React Query Fetch</h1>
    </section>
  )
}

export default ReactQueryFetch