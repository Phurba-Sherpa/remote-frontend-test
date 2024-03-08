import styled from 'styled-components';

// ** Comp
import LocationMap from './LocationMap';
import LocationList from './LocationList';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
`;
export default function Dashboard() {
  return (
    <StyledDashboard>
      <LocationList />
      <LocationMap />
    </StyledDashboard>
  );
}
