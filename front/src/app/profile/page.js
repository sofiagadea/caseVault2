"use client";
import NavBar from '../components/navbar'
import Sidebar from '../components/sidebar/sideBar'
import CaseGrid from '../components/grid'
import './../styles/menu.css';
import styled from 'styled-components';

const Line = styled.div`
  border-top: 1px solid #ccc; 
  margin-top: 10px;
  margin-bottom: 20px;
`;


export default function ProfilePage() {
  return (
    
    <div className="container-fluid">
      <NavBar /> 
      <div className="container">
        <div className="menu-container">
          <div className="sidebar-container">
          <Sidebar currentPage="profile" />
          </div>
        </div>
      </div>
      <h1 className= "title">Contenido del canal</h1>
      <Line />
      <div className="container"> 
      <div className="casegrid-container">
            <CaseGrid />
      </div>
      </div>
    </div>
  
  )
}
