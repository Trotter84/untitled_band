import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { Divider } from 'semantic-ui-react';


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
    text-decoration: underline overline;
  }
  &.active {
    color: red;
  }
`


const TitleMOBILE = Styled.h1`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: red;
  }
`

const NavMOBILE = Styled(Link)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #6E1D1E;
    text-decoration: underline overline;
  }
  &.active {
    color: red;
  }
`


class TopMenu extends Component {
  render() {
    return(
      <>
        <div id='topMenuMainContainer'>
          <Nav to={'/about'} className='topMenuNav'>ABOUT</Nav>
          <Divider />
          <hr />
          <Nav to={'/social'} className='topMenuNav'>SOCIAL</Nav>
          <Divider />
          <hr />
          <Link to={'/'}>
            <Title id='topMenuTitle'>Untitled_Band</Title>
          </Link>
          <hr />
          <Nav to={'/tour'} className='topMenuNav'>TOUR</Nav>
          <Divider />
          <hr />
          <Nav to={'/merch'} className='topMenuNav'>MERCH</Nav>
        </div>

        <div id='topMenuMainContainerMOBILE'>
          <Link to={'/'}>
            <TitleMOBILE id='topMenuTitleMOBILE'>Untitled_Band</TitleMOBILE>
          </Link>
          <div id='topMenuNavContainerMOBILE'>
            <NavMOBILE to={'/about'} className='topMenuNavMOBILE'>ABOUT</NavMOBILE>
            <Divider />
            <hr className='hrMOBILE' />
            <NavMOBILE to={'/social'} className='topMenuNavMOBILE'>SOCIAL</NavMOBILE>
            <Divider />
            <hr className='hrMOBILE' />
            <NavMOBILE to={'/tour'} className='topMenuNavMOBILE'>TOUR</NavMOBILE>
            <Divider />
            <hr className='hrMOBILE' />
            <NavMOBILE to={'/merch'} className='topMenuNavMOBILE'>MERCH</NavMOBILE>
            </div>
        </div>
      </>
    )
  }
}


export default TopMenu;
