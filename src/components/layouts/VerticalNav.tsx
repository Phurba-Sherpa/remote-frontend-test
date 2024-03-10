import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    transition: all 0.4s;
    padding: 1rem;
    border-radius: var(--border-radius-md);
  }

  & > svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    & .nav-icon {
      fill: var(--color-grey-0);
    }
    background-color: var(--color-brand-500);
  }
`;

export default function VerticalNav() {
  return (
    <StyledVerticalNav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.12122L4.52 0.0012207V13.8112L0 15.9412V2.12122Z"
                fill="#C7C7C7"
                className="nav-icon"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.89 2.12122L6.10999 0.0012207V13.8112L10.89 15.9412V2.12122Z"
                fill="#C7C7C7"
                className="nav-icon"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.48 2.12122L17 0.0012207V13.8112L12.48 15.9412V2.12122Z"
                fill="#C7C7C7"
                className="nav-icon"
              />
            </svg>
           
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/measurement">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="nav-icon"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.34 0L7.12 1.78L5.34 3.56L6.53 4.75L8.31 2.97L13.06 7.72L11.28 9.5L12.47 10.69L14.25 8.91L19 13.66L13.66 19L0 5.34L5.34 0ZM16.03 10.69L13.65 13.07L14.84 14.26L17.22 11.88L16.03 10.69ZM10.09 4.75L7.71 7.13L8.9 8.32L11.28 5.94L10.09 4.75Z"
                fill="#C7C7C7"
              />
            </svg>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cad-overlay">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='nav-icon' fill-rule="evenodd" clip-rule="evenodd" d="M0 4.16L9.5 0L19 4.16L9.5 8.31L0 4.16Z" fill="#C7C7C7" />
              <path
              className='nav-icon'
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.97 6.82996L19 7.71996L9.5 11.88L0 7.71996L2.04 6.82996L9.5 10.09L16.97 6.82996Z"
                fill="#C7C7C7"
              />
              <path
              className='nav-icon'
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.97 10.39L19 11.28L9.5 15.44L0 11.28L2.04 10.39L9.51 13.66L16.97 10.39Z"
                fill="#C7C7C7"
              />
            </svg>

          </StyledNavLink>
        </li>
      </NavList>
    </StyledVerticalNav>
  );
}
