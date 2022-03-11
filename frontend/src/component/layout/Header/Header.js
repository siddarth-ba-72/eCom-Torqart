import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

	const dispatch = useDispatch();
	const { user, isAuthenticated } = useSelector((state) => state.user);

	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>CartCom</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/'>Home</Nav.Link>
							<Nav.Link href='/products'>Products</Nav.Link>
							<Nav.Link href='/cart'>Cart</Nav.Link>
							<Nav.Link href='/search'>Search</Nav.Link>
							<NavDropdown title={
								isAuthenticated ? user.name : 'Account'
							} id='basic-nav-dropdown'>
								<NavDropdown.Item href='/login'>Login</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/register'>Register</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)

};

export default Header;
