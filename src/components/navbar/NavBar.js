import React from 'react'
import { Button, Nav, Navbar,NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Envelope,Youtube,Instagram,Telegram } from 'react-bootstrap-icons';
import {buton} from './navbar.module.css';

export default function NavBar() {
    return (
        <Navbar expand="sm">
           <NavbarBrand href="/" className="text-white">Curious Founders</NavbarBrand>
           <NavbarToggle aria-controls="basic-navbar-nav" />
           <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink href="#home">
                        <Envelope size={24}/>
                    </NavLink>
                    <NavLink href="#link" >
                        <Telegram size={24}/>
                    </NavLink>
                    <NavLink href="#link" >
                        <Instagram size={24} />
                    </NavLink>
                    <NavLink href="#link">
                        <Youtube size={24} />
                    </NavLink>
                </Nav>
                <Button className={buton}>Join Community</Button> 
            </NavbarCollapse>
        </Navbar>

    )
}
