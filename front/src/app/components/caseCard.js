
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkTheme } from '../styles/theme';
import { LikeIcon } from './Icons';
import 'typeface-quicksand';

const CaseCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  min-height: 100%; /* Asegura que el contenido se expanda verticalmente */
`;

const CaseCardTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  font-weight: bold;
  margin-top: auto 
  align-self: flex-start;

`;
const CaseCardDescription = styled.p`
  font-size: 0.9rem;
  max-height: 4.3em;
  line-height: 1.1em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-family: Quicksand;
`;

const CaseCardWrapper = styled.div`
  background-color: ${darkTheme.grey}; 
  width: a00%;
  height: 250px; 
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  transition: background-color 0.5s ease-in-out;
  align-items: center;

  &:hover {
    background-color: #e0e0e0; /* Cambia el color de fondo al pasar el mouse */
  }

  .icon{
    display: flex;
    align-items: left;
    margin-bottom: 0.4rem;
  }
`;

const CaseCard = ({ id,title, description,likes, video }) => {
  return (
    
    <CaseCardWrapper>
      <CaseCardContent>
        <CaseCardTitle>{title}</CaseCardTitle>
        <CaseCardDescription>{description}</CaseCardDescription>
        <CaseCardDescription>{video}</CaseCardDescription>
        <div className="icon">
            <LikeIcon />
            <p>{likes}</p>
          </div>
      </CaseCardContent>
    </CaseCardWrapper>
   
  );
};

CaseCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  url: PropTypes.string,
};

export default CaseCard;
