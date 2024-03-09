import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ** icon import
import frameIconSrc from '@/assets/nav-icon/vertical-bar.svg';
import rulerIconSrc from '@/assets/nav-icon/ruler.svg';
import overlayIconSrc from '@/assets/nav-icon/layers.svg';

const StyledVerticalNav = styled.aside`
  background-color: var(--color-grey-0);
  min-height: 100vh;
  max-width: 9rem;
  border-right: 2px solid var(--color-grey-200);
  padding: 1.5rem;
  box-shadow: -1rem 0 2rem -3rem rgba(0, 0, 0, 0.3);
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    transition: all 0.3s;
    padding: 1rem;
    border-radius: var(--border-radius-md);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-brand-500);
  }

  & img {
    width: 2.2rem;
    height: 2.2rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-0);
  }
`;

export default function VerticalNav() {
  return (
    <StyledVerticalNav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <img src={frameIconSrc} alt="vertical bars" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/measurement">
            <img src={rulerIconSrc} alt="vertical bars" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cad-overlay">
            <img src={overlayIconSrc} alt="vertical bars" />
          </StyledNavLink>
        </li>
      </NavList>
    </StyledVerticalNav>
  );
}
