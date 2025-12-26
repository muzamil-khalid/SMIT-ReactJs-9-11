import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'

const About = () => {
  return (
    <div>
        <Header/>
      <h1>Hello About</h1>
      <Link to="/">
      Go to home
      </Link>
    </div>
  )
}

export default About
