import { Tab } from "./components/Tab.tsx";
import './TopBar.css'
import { BurgerIcon } from "../burgerIcon.tsx";
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/images/InterraLogoWhite.png';

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
    <div className={'bar'}>
      <Tab section={'/'} style={{minHeight: '4.25em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={logo} className="topBarLogo"  />
      </Tab>
      <div
        className={'desktop'}
        style={{
          display: 'flex', justifyContent: 'space-between', marginRight: '2%', gap: '2rem',
          textWrap: 'nowrap',
        }}
      >
        {/* <Tab section="hero" >Home</Tab>
        <Tab section='about' >About Us</Tab>
        <Tab section='expertise' >Our Expertise</Tab>
        <Tab section='services' >Our Services</Tab>
        <Tab section='clients' >Clients</Tab>
        <Tab section='team' >Leadership Team</Tab>
        <Tab section='contact' >Contact us</Tab> */}
        <Tab section='/'>Home</Tab>
        <Tab section='/expertise'>Expertise</Tab>
        <Tab section='/clients'>Clients</Tab>
        <Tab section='/#team'>Leadership Team</Tab>
      </div>
      <div className="menuButton mobile" ref={menuRef}>
        <BurgerIcon onClick={() => setIsMenuOpen(curr => !curr)} className="mobile" style={{ width: '1em', height: '1em', userSelect: 'none' }}>
        </BurgerIcon>
        <div className={`menu ${isMenuOpen ? 'open' : 'closed'}`} style={{ display: 'flex', flexDirection: 'column', gap: '1em', textWrap: 'nowrap' }}>
          <Tab style={{color: '#004e42'}} onClick={() => setIsMenuOpen(false)} section='/' >Home</Tab>
          <Tab style={{color: '#004e42'}} onClick={() => setIsMenuOpen(false)} section='/expertise' >Our Expertise</Tab>
          <Tab style={{color: '#004e42'}} onClick={() => setIsMenuOpen(false)} section='/clients' >Clients</Tab>
          <Tab style={{color: '#004e42'}} onClick={() => setIsMenuOpen(false)} section='/#team' >Leadership Team</Tab>
        </div>
      </div>

    </div>

  )
}
