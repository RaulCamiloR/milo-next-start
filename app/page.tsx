import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/about">
          <span>About</span>
        </Link>
        
      </div>
    </div>
  )
}

export default HomePage