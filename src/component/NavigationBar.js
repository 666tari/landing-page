// import { NavbarBrand } from "react-bootstrap";
import { Navbar, Nav, Container} from "react-bootstrap";

const NavigationBar = (props) => {
    return(
       <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href='/'>{props.title}</Navbar.Brand>
                        <Nav> 
                            <Nav.Link href="#trending">TRENDING GAME</Nav.Link>
                            <Nav.Link href="#best">BEST GAME</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
       </div>
    )
}


export default NavigationBar;