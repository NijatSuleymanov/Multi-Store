import React, { useEffect, useState } from 'react'
import {  faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import Form from 'react-bootstrap/Form';
import products from '../data/products'
import { Button } from 'react-bootstrap';


const Header = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode'));
  
  useEffect(() => {
      document.body.className = mode;

  }, [mode])
  const [lang,setLang] = useState(localStorage.getItem('lang'))


  const handleClick = (langselect)=>{

      langselect === 'az' ? setLang('az',localStorage.setItem('lang','az')):setLang('en',localStorage.setItem('lang','en'))

      
  }
//   const language = ['az','en','it'];



// i18n
//   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//   // learn more: https://github.com/i18next/i18next-http-backend
//   // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     whitelist:language,
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     }
//   });
  
  return (
    
    
    <Navbar bg={mode} expand="lg" variant={mode}>
      <Container className='nav'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
            
          
            {localStorage.getItem('lang') === 'az'? products.az.map(item=>(
              <>
          <Nav className="me-auto">
        <NavDropdown className='border-end  '  title={item.title} id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">{item.us}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                AUS
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link className='border-end' href="#home">{item.gift}</Nav.Link>
            <Nav.Link  href="#link">{item.login}</Nav.Link>
            <Navbar.Text>{item.or}</Navbar.Text>
            <Nav.Link href="#link">{item.sign}</Nav.Link>
            </Nav>
          <Nav>
          <Nav.Link href='/' className='border-end' >
          {item. compare}  <span class="badge text-bg-secondary rounded-circle bg-light text-dark">0</span>
            </Nav.Link>
            <Nav.Link href="/"  className='border-end'><FontAwesomeIcon icon={faHeart} /></Nav.Link>
            <Nav.Link href="/"  className='border-end'><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link href="/" className='position-relative'>
  
            <span class="position-absolute  start-100 translate-middle badge rounded-pill bg-light text-dark">0</span>
            <FontAwesomeIcon icon={faCartShopping} /></Nav.Link>         
           
          
          </Nav>
        </>
       )):products.en.map(item=>(
        <>
        <Nav className="me-auto">
              <NavDropdown className='border-end  '  title={item.title} id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">{item.us}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                AUS
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link className='border-end' href="#home">{item.gift}</Nav.Link>
            <Nav.Link  href="#link">{item.login}</Nav.Link>
            <Navbar.Text>or</Navbar.Text>
            <Nav.Link href="#link">{item.sign}</Nav.Link>
            </Nav>
          <Nav>
          <Nav.Link href='/' className='border-end' >
           {item. compare} <span class="badge text-bg-secondary rounded-circle bg-light text-dark">0</span>
            </Nav.Link>
            <Nav.Link href="/"  className='border-end'><FontAwesomeIcon icon={faHeart} /></Nav.Link>
            <Nav.Link href="/"  className='border-end'><FontAwesomeIcon icon={faMagnifyingGlass} /></Nav.Link>
            <Nav.Link href="/" className='position-relative'>
  
            <span class="position-absolute  start-100 translate-middle badge rounded-pill bg-light text-dark">0</span>
            <FontAwesomeIcon icon={faCartShopping} /></Nav.Link>         
           
          
          </Nav>
        </>
       ))}
           
            
            
            
        
          <Form.Check className='ms-5 ' onClick={() => { mode === 'light' ? setMode('dark', localStorage.setItem('mode', "dark")) : setMode('light', localStorage.setItem('mode', "light")) }} type="switch"id="custom-switch"/>
          
      <img  onClick={()=>{handleClick('en')}} style={{width:'30px',height:'20px',borderRadius:'4px'}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAteJQni/vM0D///8AvOv6ISr4JkE9pC7vKDfvLDrvMT7uFSnvLTv709XuHi/uGCvuIzP83N7+9PX0h435v8LwPEj0iI76ycv97O3uDyX2naHzcnnyanL0fIP94+X82933q6/yXmf3o6fxTlj1kpftABftAAjyY2v1kJbwRFD4t7v5xcj0f4b3qKz+8PH6ztGwnb5uAAADQUlEQVR4nO3b2XLaMABGYRp3keUViNkdcEhCmzTJ+79dgRSzFAzp34nUmfNdccGF54yxFuRWCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B/6DEHrCwStK+9YG4fGhLG1rq/kPN/yWZPlRVX2euWiyLM8dn09Z3iVb9nuxyjpBL91ktt5ZLy+B33KZ6JuOzhwc5f6HNCffHHU7RzGW7vLQtfXdpI3+fL5zX61QdLv96erooMqdX11p3iSz0a9vXTPizjK0jTNoqK8DoLbyNMfsB/5bPS4Ey+ZDPN408uGadrrJJmf/bzIZ6P+zp23iA6eddYMR20/BxAv8g2ftvUejw4U+Xzm5Szah3zZ7bZe98RTztoJ+Y4yk2298ckx1tri7YNXCxH3+azZTvfK8zOUeOLTLNB9vnQ76M6y81+POj49BJ3ns/PtAu2C2V04CbrmAy7rQs7zpdd1vqrpsWbCzdeTt3s09qGi63z2qq731PTTNaPxcBnQpssvFsubNIyqZw/6uc5nRnW+edPNF1fBTTk0plztIZhwOEmCsQdjiOt8Wb1FNW0eN6JkuSDp3r+unpEP4/bqSflBl9jEcT6bb/elmn+L8WK9onsbY9aTHA9+u67zheM6X3Fm2I2mu3sywcvwY66wmeN8pl6vdc7lCCd7+Xo+3Hyu822nLcmZBYc1D7s7+YN7L7ZgHOfLkk2Px7zhazZMw26yd/e1v19l7gu6zlfv0M8a8sXp+Cn40+vP3PXcxXW+wabF8+l8cfVyJN7a2PH+i+t83H2KlGefgpFXwrxPwqpDwppXw46LxNzVtx/7fe9nbZ2P3ea/wH8dEv5p0/A/r4RTBhrOuGjSC05YxZywOonzfZILTpdOvdhg+YMX+TjbLDo8WT/jZP378F6HhreKRLzTJuKNSpE1WVpUZbdXVkWeGa+WGEf4lu/qP3ub/CsErW8QtD5BQD4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk/wCt9YGQi1kVPEAAAAASUVORK5CYII=" alt="" />
          <img  onClick={()=>{handleClick('az')}} className='ms-3' style={{width:'30px',height:'20px',borderRadius:'4px'}}  src="data:image/png;base64,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" alt="" />
     
       
        </Navbar.Collapse>
  
      </Container>
    </Navbar>
 

  )
}

export default Header
