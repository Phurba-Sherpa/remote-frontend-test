import styled from 'styled-components';

// ** Comp
import LocationMap from './LocationMap';
import LocationList from './components/LocationList';
import { Icoordinate, useLocation } from './useLocation';
import { ReactNode } from 'react';

///////////////////
/* STYLES */
///////////////////
const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const { data, status } = useLocation();


  if (status === 'error') {
    alert('No response from server')
  }

  console.log('I am here')
  return (
    <StyledDashboard>
      <LocationList locations={data?.locations as Icoordinate[]} />
      <LocationMap />
    </StyledDashboard>
  );
};

export default Dashboard;
