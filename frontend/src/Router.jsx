import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home/Home.jsx'
import AboutMe from './Pages/AboutMe/AboutMe.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import DashBoard from './Pages/DashBoard/DashBoard.jsx'
import ComandApp from './Pages/CommandApp/CommandApp.jsx'
import PokimonApp from './Pages/PokimonApp/PokimonApp.jsx'
import ProjectsManagement from './Pages/ProjectsManagement/ProjectsManagement.jsx'
import Cookbook from './Pages/Cookbook/Cookbook.jsx'
import FLASH from './Pages/FLASH/FLASH.jsx'
import OdooPet from './Pages/OdooPet/OdooPet.jsx'
import WallpaperPatternEditor from './Pages/WallpaperPatternEditor/WallpaperPatternEditor.jsx'
import BackupScript from './Pages/BackupScript/BackupScript.jsx'
import ChatRealtime from './Pages/ChatRealtime/ChatRealtime.jsx'
import ECMAS from './Pages/ECMAS/ECMAS.jsx'
import SmartSolarLAB from './Pages/SmartSolarLAB/SmartSolarLAB.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre-mi', element: <AboutMe /> },
      { path: '/dashboard', element: <DashBoard /> },
      { path: '/contacto', element: <Contact /> },
      { path: '/commandApp', element: <ComandApp /> },
      { path: '/pokimonApp', element: <PokimonApp /> },
      { path: '/devly', element: <ProjectsManagement /> },
      { path: '/cookBook', element: <Cookbook /> },
      { path: '/fla$h', element: <FLASH /> },
      { path: '/odooPet', element: <OdooPet /> },
      { path: '/wallpaperPatternEditor', element: <WallpaperPatternEditor /> },
      { path: '/backupsSh', element: <BackupScript /> },
      { path: '/chatRealTime', element: <ChatRealtime /> },
      { path: '/ecmas', element: <ECMAS /> },
      { path: '/smartSolarLab', element: <SmartSolarLAB /> },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
