import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
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
  filter: grayscale(100%);
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
