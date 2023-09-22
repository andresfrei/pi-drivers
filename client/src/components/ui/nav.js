import styled from 'styled-components'

export const Navbar = styled.nav`
 top: 0px;
 left: 0px;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 width: 100%;
 height: 80px;
 background-color: rgb(255, 255, 255);
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 z-index: 1;
`

export const Nav = styled.ul`

`
export const NavLink = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  
  a {
    text-decoration: none;
    color: ${(props) => (props.active ? '#007bff' : 'black')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    cursor: pointer;
    
    &:hover {
      color: #007bff;
    }
  }
`
