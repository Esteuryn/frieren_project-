import { Outlet } from 'react-router-dom'
import Footer from '../app/components/Footer'
import MedievalSidebar from '../app/components/MedievalSidebar'
import Navbar from '../app/components/Navbar'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <MedievalSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
