import * as API from './services/launches'
import React, { useState, useEffect } from 'react'
import {Heading,Image } from '@chakra-ui/react'
import Launchiten from './components/Launchiten'
import logo from './assets/spacex.png'

function App() {

  const [Launches, setLaunches] = useState([])

  useEffect ( () => {
    API.launches().then(setLaunches)
  }, [])

  return (
    <div className="App">
      <Image m={4} src={logo} width={300} />
      <Heading as='h1' size='lg' m={4} >SpaceX Launches</Heading>
      <section>
        {Launches.map( launch => (
          <Launchiten key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </div>
  )
}

export default App