import styled from 'styled-components';

// ** Comp
import LocationMap from './LocationMap';
import LocationList from './LocationList';
import { useEffect } from 'react';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export default function Dashboard() {

  useEffect(() => {
    const doLoadLocations = async () => {
      
    }
    doLoadLocations()
  }, [])
  return (
    <StyledDashboard>
      <LocationList />
      <LocationMap />
    </StyledDashboard>
  );
}
