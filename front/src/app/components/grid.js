"use client";
import CaseCard from "./caseCard"; // Asegúrate de importar el componente CaseCard
import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import { darkTheme } from "../styles/theme";
import axios from 'axios';
import Link from 'next/link';

const API_URL = 'http://casevault-lb-1054477253.us-east-1.elb.amazonaws.com:3000/api/v1/cases';

const Wrapper = styled.div`
flex-grow: 0;
background-color: ${darkTheme.black}; 
`

const CaseCardLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: block;
`;

function CaseGrid(){
  console.log(API_URL);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setCases(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <Wrapper>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "2rem",
      }}
    >
      {cases.map((caseGrid) => (
        <div key={caseGrid.id}>
        <CaseCardLink href={`/case-details/${caseGrid.id}`}>
        <CaseCard
          key={caseGrid.id}
          title={caseGrid.title}
          description={caseGrid.description}
          video = {caseGrid.video}
          likes = {caseGrid.likes}
        />
        </CaseCardLink>
        </div>
      ))}
    </div>
    </Wrapper>
  );
};

export default CaseGrid;
