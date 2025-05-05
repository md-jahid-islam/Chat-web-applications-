import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavber from '../Sidenavber/SideNavber'

 const Layouts = () => {

  return (
  <>
  <div className=' flex gap-2.5' >
  <SideNavber/>
  <Outlet/>

  </div>
  </>
  )
 }

 export default Layouts
