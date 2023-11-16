import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
})

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <>
        <main className='body-position'>{children}</main>
      </>
      {/* <div
        style={{
          width: '100vw',
          height: '40px',
          background: '#1c1c1c',
          position: 'fixed',
          zIndex: '1000',
          bottom: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Footer />
        <ThemeToggle />
      </div> */}
    </>
  )
}

export default Layout
