import React from 'react'
import { Triangle } from  'react-loader-spinner'

export default function Spinner() {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
        <Triangle
  visible={true}
  height="80"
  width="80"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  color="#4fa94d"
/>
    </div>
  )
}
