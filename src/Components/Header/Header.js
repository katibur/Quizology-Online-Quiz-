import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideVirus } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div>
            <div>
                <Navbar bg="info" expand="lg" sticky='top' className='py-3'>
                    <Container>
                        <div>
                            <Navbar.Brand href="#home" className='bg-secondary px-4 py-2 rounded text-white fw-bold'><FontAwesomeIcon icon={faHeadSideVirus} /> Quizology For You <FontAwesomeIcon icon={faHeadSideVirus} /></Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto fw-bold">
                                    <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                                    <Nav.Link href="/statistics" className='text-white'>Statistics</Nav.Link>
                                    <Nav.Link href="/Blog" className='text-white'>Blog</Nav.Link>
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