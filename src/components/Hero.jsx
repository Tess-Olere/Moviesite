import React from 'react'
import { Container } from 'react-bootstrap'

export default function Hero() {
  return (
    <div className='herodiv' style={{padding: '5rem'}}>
        <Container className='mx-auto text-center mt-5'>
        <h5 className='fw-bold' style={{color:'#a1a1a1'}}>MUST SEE TV SHOWS, NOW STREAMING</h5>
        <p className='mb-4 w-md-50 mx-auto fs-5 fw-light text-light' style={{color:'#a1a1a1'}}>View thousands of shows and see details about your favorite tv shows and people.</p>
        <a className='fw-bold text-dark bg-white p-3 mt-5 rounded-3' rel='noreferrer' href='https://www.tvmaze.com' target='_blank'>FIND OUT MORE</a>
        </Container>
    </div>
  )
}
