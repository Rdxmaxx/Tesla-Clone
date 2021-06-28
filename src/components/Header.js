import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Y</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                {/* <a href="#">Menu</a> */}
                <MenuIconContainer onClick={() => setBurgerStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer><Close onClick={() => setBurgerStatus(false)}/></CloseContainer>   
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model S</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    
    li {
        padding: 15px 0;
        padding-left: 15px;
    }
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.25s ease-in;
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`