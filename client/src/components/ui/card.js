import styled from 'styled-components'

export const Card = styled.div`
  position: static;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justify || 'space-between'};
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: ${props => props.padding || '24px'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(${props => props.scale || '1'});
  }
`

export const CardImage = styled.img`
  position: static;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 0;
  padding: 0;
  top:0;
  display: block;
  object-fit: cover;
  transition: transform 0.2s ease;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }
`
export const CardTitle = styled.h3`
  font-size: 18px;
  line-height: 1;
  margin-top: 1rem;
  color: #333;
  margin-bottom: 0;
`
export const CardSubtitle = styled.h5`
  font-size: 14px;
  line-height: 1;
  color: #888;
  margin-bottom: 1rem;
`

export const CardGroup = styled.div`
  display:flex;
  gap:1rem;
`
