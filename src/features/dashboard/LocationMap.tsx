import styled from 'styled-components';

const StyledLocationMap = styled.div`
  min-height: 100dvh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function LocationMap() {
  return <StyledLocationMap>LocationMap</StyledLocationMap>;
}
