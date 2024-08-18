// adminNavbar.jsx

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ThemeToggle from '../themetoggle';

const adminNavbar = ({ onLogout }) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-grey">
            <Container>
                <Navbar.Brand>
                    SwachhTracker
                </Navbar.Brand>
                <ThemeToggle/>
                <Nav className="ms-auto">
                    <Nav.Link href="/login" onClick={onLogout}>Logout</Nav.Link> {/* Call the onLogout function */}
                </Nav>

            </Container>
        </Navbar>
    );
}

export default adminNavbar;
