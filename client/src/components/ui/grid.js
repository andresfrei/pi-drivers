import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap : ${props => props.gap || '1rem'};
`

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`

export const Col = styled.div`
  display:flex;
  flex-direction:column;
  gap : ${props => props.gap || '1rem'};
`
