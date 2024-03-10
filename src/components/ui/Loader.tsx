import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
  height: 100dvh;
`;
export default function Loader() {
  return (
    <StyledPage>
      <p>Loading...</p>
    </StyledPage>
  );
}
