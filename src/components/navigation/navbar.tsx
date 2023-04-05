import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { routes } from 'shared/routes';


export default function NavbarComp() {

  const navItems = [
    { name: 'Home', route: routes.redirector },
    { name: 'Business', route: routes.businessTitle },
    { name: 'Team', route: routes.team },
    {
      name: 'Dropdown', route: null, childs: [
        { name: 'Action', route: '' },
        { name: 'Another action', route: '' },
        { name: 'Something', route: '', devider: true },
        { name: 'Separated link', route: '' },
      ]
    },
  ]
  return (
    <Navbar style={{ backgroundColor: '#3182CE' }} className='app-nav'>
      <div style={{ display: 'flex', marginLeft: '1%' }}>
        <Navbar.Brand href="#home" color='#fff' style={{ color: '#fff' }}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              navItems.map((ni, idx) => (
                ni.childs ?
                  <NavDropdown key={idx} color='#fff' title="Dropdown" id="basic-nav-dropdown" style={{ color: '#fff' }}>
                    {ni.childs.map((nii, niIdx) => (
                      <React.Fragment key={niIdx}>
                        <NavDropdown.Item href="#action/3.1">{nii.name}</NavDropdown.Item>
                        {nii.devider && <NavDropdown.Divider />}
                      </React.Fragment>))}
                  </NavDropdown> :
                  <LinkContainer to={ni.route} key={idx}>
                    <Nav.Link style={{ color: '#fff' }}>{ni.name}</Nav.Link>
                  </LinkContainer>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
