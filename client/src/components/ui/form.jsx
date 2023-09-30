import styled from 'styled-components'

const FormContainer = styled.div`
  display:flex;
  flex-direction:column;
`

export const FromGroup = styled.div`
  flex:1;
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
`
export const FormInput = styled.input`
  position: absolute;
  font-size:1.2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius:5px;
  border: 2px solid gray;
  border-radius: $radius;
  color: black;
  outline: none;
  padding: 1.25rem;
  background: none;

  &:hover {
    border-color: #091034;
  }

  &:focus {
    border-color: #767b91;
  }
`

export const FormLabel = styled.label`
  position: absolute;
  left: 10px;
  top: -10px;
  padding: 0 0.5rem;
  background-color : white;
  color: black;
`

export const FormControl = ({ label, id, name, type = 'text', value, onChange }) => {
  return (
    <FromGroup>
      <FormInput
        type={type}
        id = {id}
        name = {name}
        value={value}
        onChange={onChange}
      />
      <FormLabel>{label}</FormLabel>
    </FromGroup>
  )
}

export const Form = ({ children }) => {
  return (
    <FormContainer>
      {children}
    </FormContainer>
  )
}
