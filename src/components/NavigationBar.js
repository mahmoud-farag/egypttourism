import React, { Component } from 'react';
import Logo from '../assets/Img/graduation_logo.png';
import { TiHome } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";


import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Button} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Css/style.css';
const Styles = styled.div`
  .navbar {
    background-color: #222;
  

  }
  .nav-item {
    padding-top: 5px;
    padding-right: 7px;
    padding-bottom: 5px;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    padding-top: 15px;
    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  render() {
    return (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><div><img  className="navLogo"  src={Logo} /></div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Item  >
            <Nav.Link >
              <Link  to="/"><TiHome className="fontEdit" /></Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/vr">360*</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/trips">رحلات</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/booking">حجز</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/about">عنا</Link>
            </Nav.Link>
          </Nav.Item>

        
          <Nav.Item >
          
              <Link to="/login">
          <Button   variant="outline-warning ">تسجيل الدخول</Button>{' '}
          </Link>
          
          </Nav.Item>

          <Nav.Item  >
          
              <Link to="/signup">
          <Button   variant="warning " ClassName="rounded-pill">اشتراك</Button>{' '}
          </Link>
          
          </Nav.Item>

          <Nav.Item  >
            <Nav.Link >
              <Link  to="/user"><FaUserCircle className="fontEdit" /></Link>
            </Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
 );
}
}

export default NavigationBar;