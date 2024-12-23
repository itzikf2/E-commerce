import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { Banner } from '../components/Home/Banner';
import { Newsletter } from '../components/Home/Newsletter';

function RootLayout() {
  const { pathname } = useLocation();

  return (
      <div className='min-h-screen flex flex-col font-monserrat'>
        <Navbar />
        
      {pathname === '/' && <Banner />}
      
      <main className='container my-8 flex-1'>
          <Outlet />             
      </main>
      
      {pathname === '/' && <Newsletter/>}

      <Footer/>
      </div>
  )
}

export default RootLayout