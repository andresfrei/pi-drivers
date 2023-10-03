import styled from 'styled-components'

import { COLOR_BUTTON_PRIMARY, COLOR_BUTTON_PRIMARY_HOVER, COLOR_BUTTON_SECONDARY, COLOR_BUTTON_SECONDARY_HOVER } from '../../config/ui'

export const ButtonPrimary = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  padding: ${props => props.height || '16px 32px'};
  font-size: ${props => props.size || '1rem'};
  font-weight: 400;
  border-radius: ${props => props.radius || '8px'};
  background: ${COLOR_BUTTON_PRIMARY};
  border:none;
  cursor: pointer;
  transition: 0.2s ease;
  color: white;
  &:hover {
    background: ${COLOR_BUTTON_PRIMARY_HOVER};
  }
  &:disabled {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed;
    pointer-events: none;    
  }
`
export const ButtonSecondary = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: ${props => props.radius || '8px'};
  padding: ${props => props.height || '16px 32px'};
  font-size: ${props => props.size || '1rem'};
  font-weight: 400;
  border-color:grey;
  background: ${COLOR_BUTTON_SECONDARY};
  border: 1px solid rgb(0, 0, 0);
  text-align:center;
  cursor: pointer;
  transition: 0.4s ease;
  color: black;
  &:hover {
    background: ${COLOR_BUTTON_SECONDARY_HOVER};
  }
  &:disabled {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed; 
    pointer-events: none;   
  }
`
export const ButtonLink = styled.button`
  width: ${props => props.width || '100%'};
  height: 42px;
  border: none;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  color: rgba(0, 0, 0, 0.73);
  &:hover {
    color:white;
    background: ${COLOR_BUTTON_PRIMARY_HOVER};
  }
  &:disabled {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed;
    pointer-events: none;    
  }
`
export const ButtonPaginate = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  color:black;
  background-color:white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  &:disabled {
    background-color: #a8a7a7; 
    color: #666;            
    cursor: not-allowed;    
    pointer-events: none;
  }  
`
export const ButtonClose = styled.button`
  position:absolute;
  border: none;
  box-shadow:none;
  cursor: pointer;
  outline: none;
  transition: transform 0.2s ease; 
  font-size:32px;
  padding-right: 10px;
  padding-left:10px;
  right:0px;
  top: -10px;
  border-radius: 10px;

  &:hover {
  transform: scale(1.08);
  }
`
