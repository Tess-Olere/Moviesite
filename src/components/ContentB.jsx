import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Spinner from '../Utils/Spinner'
import MediaCardB from './MediaCardB'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'


export default function Content({data, err, loading}) {
  const scrollRef = useRef()

  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
    ? (current.scrollLeft -= 1000)
    : (current.scrollLeft += 1000)
  }
  const findMovies = data.filter((accessMovie) => accessMovie.rating.average <= 5)
  return (
    <Container>
        <div className='container-lg mt-5 mx-auto'>
        <Link to='tv shows' target='_blank' ClassName='fw-2'>
          <h5 className='text-dark text-uppercase'>Top rated</h5>
          </Link>
          <div className='position-relative'>
            <div ref={scrollRef} className='d-flex hero1 scrollbody'>
            {loading && <Spinner />}
            {err || findMovies &&

            <>
            {err && <p>Currently Unavaliable</p>}
            {findMovies.map((scriptedtv) => ( 
             <MediaCardB key={scriptedtv.id} {...scriptedtv}/>

            ))}

            </>}

            </div>
                <div className='d-none d-md-flex justify-content-between align-items-center w-100 position-absolute top-20 ' style={{top:'25%'}}>
                <IoMdArrowDropleftCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={() => scroll('left')}/>
                <IoMdArrowDroprightCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={() => scroll('right')}/>
                </div>

          </div>
        </div>
    </Container>
  )
}

