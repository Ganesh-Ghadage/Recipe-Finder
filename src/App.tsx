import './App.css'
import { Footer, Header, MenuList } from './components'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { setIsResponsive } from './features/responsive/responsiveSlice'

function App() {
  const isResponsive = useAppSelector((state) => state.responsive.isResponsive)

  const dispatch = useAppDispatch()

  useEffect(() => {
    function toggleIsResponsive():void {
      dispatch(setIsResponsive(false));
    }
    window.addEventListener('resize', toggleIsResponsive)
    toggleIsResponsive()
    return () => window.removeEventListener('resize', toggleIsResponsive)
  }, [])
  
  
  return (
    <>
      <Header />

      <div className={`w-full px-4 mb-14 bg-[#313131] ${isResponsive ? 'mt-72' : 'mt-24 '}`}>
        <MenuList />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
