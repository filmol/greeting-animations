import React from 'react'
import Snowfall from 'react-snowfall'

export default function lazyLoadSnowfall() {
  return (
    <div className="hidden w-screen dark:inline">
      <Snowfall />
    </div>
  )
}
