import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Header.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideVirus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div>
                <Navbar bg="info" expand="lg" sticky='top' className='py-3'>
                    <Container>
                        <div>
                            <Navbar.Brand to="#home" className='bg-secondary px-4 py-2 rounded text-white fw-bold'><FontAwesomeIcon icon={faHeadSideVirus} /> Quizology For You <FontAwesomeIcon icon={faHeadSideVirus} /></Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto fw-bold navs">
                                    <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active' : undefined}>Statistics</NavLink>
                                    <NavLink to="/Blog" className={({ isActive }) => isActive ? 'active' : undefined}>Blog</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
            <div>
                <h2>Why?</h2>
            </div>
        </div>
    );
}

export default Header;