import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className='main__header'>
        <div className='container main__header-container'>
            <div className='main__header-left'>
                <h4>Welcome to GlamUp</h4>
                <h1> Made for professionals by professionals </h1>
                <Link to="/sign-in" className='btn lg'>Reserve your Spot</Link>
            </div>


        </div>

    </header>
  )
}

export default MainHeader