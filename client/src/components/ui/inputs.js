import styled from 'styled-components'

export const Input = styled.input`
  font-size: 18px;
  font-weight: bold;
  border: 1px solid;
  border-color: ${props => (props.isError ? 'red' : '#666')};
  width: ${props => props.width || '100%'};
  padding: 8px;
  border-radius: 6px;
  writing-mode: horizontal-tb !important;
  background-color: white;
  cursor: text;
  color: black;
  &:disabled {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed;    
  }
`

export const TextArea = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  border: 1px solid;
  border-color: ${props => (props.isError ? 'red' : '#666')};
  padding: 8px;
  border-radius: 6px;
  writing-mode: horizontal-tb !important;
  background-color: white;
  height: ${props => props.height || '100%'};
  cursor: text;
  color: black;
  &:disabled {
    background-color: #ccc; 
    color: ${props => (props.isError ? 'red' : '#666')} ;            
    cursor: not-allowed;    
  }
`

export const SelectInput = styled.select`
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
  padding: 8px;
  width: ${props => props.width || '100%'};
  border-radius: 6px;
  writing-mode: horizontal-tb !important;
  background-color: white;
  cursor: pointer;
  color: black;
  &:disabled {
    background-color: #ccc; 
    color: #666;            
    cursor: not-allowed;    
  }
`
export const Option = styled.option`
  padding-top: 25px;
  padding-bottom: 25px;
`
export const Label = styled.label`
  width: ${props => props.width || '100%'};
`
