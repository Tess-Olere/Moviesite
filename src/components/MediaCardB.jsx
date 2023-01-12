import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MediaCard({id, image, genres, name}) {
  return (  
    <div className='me-4'>
    <Link to={`/tvshows/${id}`}>
    <div className="me-4 py-3" style={{width:'300px', height:'250px'}}>
        <img className='w-100 h-100 rounded-3' src={image.original} alt={name} loading='lazy'/>
        </div>
        </Link>
        <div className="w-100"  style={{height:'96px'}}>
             <Link to={`/tvshows/${id}`}>
                <>
                <p className='fw-bold text-dark mb-0'>{name}</p>
                <p className='text-dark'>{genres.join('  -  ')}</p>
                </>
       
</Link>
</div>
</div>
)
}