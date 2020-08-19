import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'

const ExampleController = () => {
  const history = useHistory()
  const changeRoute = (pathname) => {
    history.push('/')
    history.push(pathname)
  }
  return (
    <div className='root-controller'>
      <div onClick={() => changeRoute('/route1')} className='nav-item'>
        <strong>Route 1</strong>
      </div>
      <div onClick={() => changeRoute('/route2')}  className='nav-item'>
        <strong>Route 2</strong>
      </div>
      <div onClick={() => changeRoute('/route3')}  className='nav-item'>
        <strong>Route 3</strong>
      </div>
      <div onClick={() => changeRoute('/route4')}  className='nav-item'>
        <strong>Route 4</strong>
      </div>
    </div>
  )
}
export default ExampleController