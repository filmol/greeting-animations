import React from 'react'
import Snowfall from 'react-snowfall'

export default function lazyLoadSnowfall() {
  return (
    <>
      <div className="xl:hidden">
        <Snowfall
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
          snowflakeCount={30}
        />
      </div>
      <div className="hidden xl:inline">
        <Snowfall
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
          snowflakeCount={150}
        />
      </div>
    </>
  )
}
