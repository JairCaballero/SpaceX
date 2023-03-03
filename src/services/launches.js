import React from 'react'

const url = 'https://api.spacexdata.com/v3'

export async function launches ()  {
  try {
    const res = await fetch(`${url}/launches`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getLaunchFlightNumber(flightNUmber) {
  try {
    const res = await fetch(`${url}/launches/${flightNUmber}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}