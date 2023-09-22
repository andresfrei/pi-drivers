import styled from 'styled-components'

import { COLOR_BUTTON_PRIMARY, COLOR_BUTTON_PRIMARY_HOVER, COLOR_BUTTON_SECONDARY, COLOR_BUTTON_SECONDARY_HOVER } from '../../config/ui'

export const ButtonPrimary = styled.button`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  padding: 16px 32px;
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
  }
`
export const ButtonSecondary = styled.button`
  width: ${props => props.width || '30%'};
  height: 41px;
  border-radius: 60px;
  background: ${COLOR_BUTTON_SECONDARY};
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
  }
`
export const ButtonLink = styled.button`
  width: ${props => props.width || '100%'};
  height: 42px;
  border: 1px solid rgba(0, 0, 0, 0.73);
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
  }
`
