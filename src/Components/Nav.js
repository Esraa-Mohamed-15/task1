import React , {Component} from 'react';
import { Navbar ,Nav  } from 'react-bootstrap';
import './Nav.css';

class Navegation extends Component{
    render(){
        return(
            <div className="">

<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li" >
    <Nav.Link href="/home">الرئيسيه</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">من نحن</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">خدماتنا</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">فروعنا</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">وظائف</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">الشكاوي</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">اتصل بنا </Nav.Link>
  </Nav.Item>
  <Nav.Item as="li" >
    <Nav.Link eventKey="link-1">اللغه</Nav.Link>
  </Nav.Item>
</Nav>

            </div>
        )
    }
}
export default Navegation;

