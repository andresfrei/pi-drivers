import styled from 'styled-components'

import { SelectInput } from './inputs'

const MultiSelectWrapper = styled.div`
  width: ${props => props.width || '100%'};
  font-size: 18px;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
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

const ItemContainer = styled.div`
  width: ${props => props.width || 'auto'};
  background-color: #ECECEC;
  padding: 5px 10px;
  border-radius: 8px;
  margin: 0;
  white-space: nowrap;
`

const ItemButton = styled.button`
  margin-left:5px;
  background-color:gray;
  border:none;
  border-radius:5px;
  cursor: pointer;
`

const Item = ({ children, onClose }) => {
  return (
    <ItemContainer>
      {children}
      <ItemButton
        onClick={() => onClose(children)}
      >X</ItemButton>
    </ItemContainer>
  )
}

const SelectTitle = styled.h4`
    padding:0;
    margin:0;
  `

const SelectHeader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
  `
const SelectBody = styled.div`
    width: ${props => props.width || '100%'};
    display:flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 15px;
  `

const MultiSelect = ({ options, title = 'Select', width = '100%', selectedOptions, setSelectedOptions, placeholder = '', value = '' }) => {
  const handleChange = (event) => {
    setSelectedOptions(event.target.value)
    value = ''
  }

  return (
    <MultiSelectWrapper
      width = {width}
    >
      <SelectHeader>
        <SelectTitle>{title}:</SelectTitle>
        <SelectInput
          value={value}
          onChange={handleChange}
        >
          <option value="" selected>{placeholder}</option>
          { options.map(option => <option key={option} value={option}>{option}</option>) }
        </SelectInput>
      </SelectHeader>
      <SelectBody width={width}>
        {selectedOptions.map(option => <Item onClose={setSelectedOptions} key={option}>{option}</Item>)}
      </SelectBody>
    </MultiSelectWrapper>
  )
}

export default MultiSelect
