import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import frame from '@/assets/nav-icon/vertical-bar.svg'
import ruler from '@/assets/nav-icon/ruler.svg'
import overlays from '@/assets/nav-icon/layers.svg'

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
    transition: all 0.3s;
    padding: 1rem;
    border-radius: var(--border-radius-md);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-brand-500);
    & div {
      background-color: var(--color-grey-0);
    }
  }
  & div {
    background-color: var(--color-grey-400);
    width: 2.4rem;
    height: 2.4rem;
  }

`;

const StyledIcon = styled.div<{url: string}>`
   -webkit-mask: url(${props => props.url}) no-repeat center;
    mask: url(${(props) => props.url}) no-repeat center;
`

export default function VerticalNav() {
  return (
    <StyledVerticalNav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <StyledIcon url={frame} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/measurement">
            <StyledIcon url={ruler} />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cad-overlay">
            <StyledIcon url={overlays} />
          </StyledNavLink>
        </li>
      </NavList>
    </StyledVerticalNav>
  );
}
