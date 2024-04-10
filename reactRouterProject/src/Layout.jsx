import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

// this outlet used to render the children of the route
// this is the layout component that will be used to render the header and footer of the page 
// outlet is used to do nesting (we do this in route(main.jsx)), dynamically data chage according to the route

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
