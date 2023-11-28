"use client";
import NavBar from '../components/navbar'
import Sidebar from '../components/sidebar/sideBar'
import CaseGrid from '../components/grid'
import './../styles/menu.css';


export default function HomePage() {
  return (

    <div className="container-fluid">
      <NavBar /> 
  
      <div className="container">
        <div className="menu-container">
          <div className="sidebar-container">
            <Sidebar currentPage="home" />
          </div>
        </div>
      </div> 
      <div className="container">      
      <div className="casegrid-container">
            <CaseGrid />
          </div>  
        </div>
    </div>
    
  )
}
