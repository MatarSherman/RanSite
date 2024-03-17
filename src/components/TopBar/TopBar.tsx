import { Tab } from "./components/Tab";
import './TopBar.css'
import { BurgerIcon } from "../burgerIcon";
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/images/Interra Logo.jpg'

export const TopBar = () => {
  const menuRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (menuRef.current && !((menuRef.current as any).contains(event.target))) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={'bar'}
      style={{
        background: 'white', width: '101vw', 
        boxShadow: '0px 0px 5px 0px black', display: 'flex', alignItems: 'center',
        zIndex: 1, position: 'fixed',
      }}>
      <Tab section={'home'}>
        <img src={logo} style={{width:'10em'}}/>
      </Tab>
      <div
        className={'desktop'}
        style={{
          display: 'flex', justifyContent: 'space-between', marginRight: '2%', gap: '2rem',
          textWrap: 'nowrap',
        }}
      >
        <Tab section="home" >Home</Tab>
        <Tab section='about' >About Us</Tab>
        <Tab section='expertise' >Our Expertise</Tab>
        <Tab section='services' >Our Services</Tab>
        <Tab section='clients' >Clients</Tab>
        <Tab section='team' >Leadership Team</Tab>
        <Tab section='contact' >Contact us</Tab>
      </div>
      <div className="menuButton mobile" ref={menuRef}>
        <BurgerIcon onClick={() => setIsMenuOpen(curr => !curr)} className="mobile" style={{ width: '1em', height: '1em', userSelect: 'none' }}>
        </BurgerIcon>
        <div className={`menu ${isMenuOpen ? 'open' : 'closed'}`} style={{ display: 'flex', flexDirection: 'column', gap: '1em', textWrap: 'nowrap' }}>
          <Tab onClick={() => setIsMenuOpen(false)} section="home" >Home</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='about' >About Us</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='expertise' >Our Expertise</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='services' >Our Services</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='clients' >Clients</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='team' >Leadership Team</Tab>
          <Tab onClick={() => setIsMenuOpen(false)} section='contact' >Contact us</Tab>
        </div>
      </div>

    </div>

  )
}
