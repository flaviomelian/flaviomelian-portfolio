import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home/Home.jsx'
import AboutMe from './Pages/AboutMe/AboutMe.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Contact from './Pages/Contact/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre-mi', element: <AboutMe /> },
      { path: '/proyectos', element: <Projects /> },
      { path: '/contacto', element: <Contact /> },
    ],
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
