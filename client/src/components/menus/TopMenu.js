import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';


const Title = Styled.h1`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: red;
  }
`

const Nav = Styled(Link)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #6E1D1E;
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`


class TopMenu extends Component {
  render() {
    return(
      <div id='topMenuMainContainer'>
        <Nav to={'/about'} className='topMenuNav'>ABOUT</Nav>
        <Nav to={'/social'} className='topMenuNav'>SOCIAL</Nav>
        <Link to={'/'}>
          <Title id='topMenuTitle'>Untitled_Band</Title>
        </Link>
        <Nav to={'/tour'} className='topMenuNav'>TOUR</Nav>
        <Nav to={'/merch'} className='topMenuNav'>MERCH</Nav>
      </div>
    )
  }
}


export default TopMenu;
