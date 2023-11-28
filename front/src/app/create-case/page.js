"use client";
import NavBar from '../components/navbar'
import Sidebar from '../components/sidebar/sideBar'


export default function CreateCase() {
  return (
    
    <div className="container-fluid">
      <NavBar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
   
  )
}
