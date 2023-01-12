import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Spinner from '../Utils/Spinner'
import MediaCard from './MediaCard'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'


export default function Content({data, err, loading}) {
  const scrollRef = useRef()

  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
    ? (current.scrollLeft -= 1000)
    : (current.scrollLeft += 1000)
  }
  const findMovie = data.filter((accessContent) => accessContent.type === 'Reality')
  return (
    <Container>
        <div className='container-lg mt-5 text-uppercase'>
            <h4 ClassName='fw-2 '>Tv Shows</h4>
        </div>
        <div className='container-lg mt-5 mx-auto'>
        <Link to='tv shows' target='_blank' ClassName='fw-2'>
          <h5 className='text-dark text-uppercase'>Featured Tv</h5>
          </Link>
          <div className='position-relative'>
            <div ref={scrollRef} className='d-flex hero1 scrollbody'>
            {loading && <Spinner />}
            {err || findMovie &&

            <>
            {err && <p>Currently Unavaliable</p>}
            {findMovie.map((realitytv) => ( 
             <MediaCard key={realitytv.id} {...realitytv}/>

            ))}

            </>}

            </div>
                <div className='d-none d-md-flex justify-content-between align-items-center w-100 position-absolute top-50'>
                <IoMdArrowDropleftCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={() => scroll('left')}/>
                <IoMdArrowDroprightCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={() => scroll('right')}/>
                </div>

          </div>
        </div>
    </Container>
  )
}

