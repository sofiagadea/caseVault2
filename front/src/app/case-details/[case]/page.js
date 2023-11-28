"use client";
import { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar/sideBar'
import styled from 'styled-components';
import './details.css';


const Line = styled.div`
  border-top: 1px solid #ccc; 
  margin-top: 10px;
  margin-bottom: 20px;
`;

async function fetchCaseData(id) {
  const API_URL = `http://casevault-lb-1054477253.us-east-1.elb.amazonaws.com:3000/api/v1/cases/${id}`;
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching case data:", error);
    return null; 
  }
}

function CaseDetails({ params }) {
  const { case: id } = params;
  const [selectedCase, setSelectedCase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const caseData = await fetchCaseData(id);
      setSelectedCase(caseData);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

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
      <h1 className= "title">{selectedCase.title}</h1>
      <Line />
      <p>{selectedCase.description}</p>
      <div className="video-container">
          <div className="ratio ratio-1x1">
              <iframe
                  width="210"
                  height="118"
                  src={selectedCase.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
              ></iframe>
          </div>
      </div>
      <p>Likes: {selectedCase.likes}</p>
    </div>
  );
}

export default CaseDetails;
