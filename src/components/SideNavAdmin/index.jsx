import { SignOut } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { navLinks } from './navLinks';
import { Container, NavLink, NavLinkContainer, Footer } from './styles';
import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useLocation();

    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink 
                    key={link.id} 
                    to={link.path}
                    $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}
