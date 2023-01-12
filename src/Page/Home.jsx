import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import useFetch from '../hooks/useFetch'
import ContentB from '../components/ContentB'
import Footer from '../components/Footer'



export default function Home() {
  const { data, err, loading } = useFetch(
    'https://api.tvmaze.com/shows?page=1'
  )

  console.log(data)
  return (
   <>
   <Hero/>
   <Content data={data} error={err} loading={loading}/>
   <ContentB data={data} error={err} loading={loading}/>
   
   </>
  )
}
