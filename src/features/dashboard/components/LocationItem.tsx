import flagImgSrc from '@/assets/Marker.svg';
import { FC } from 'react';
import styled from 'styled-components';

//////////////////
/* STYLES */
//////////////////
const StyledLocationItem = styled.div`
  padding: 1.5rem 0 1.5rem 2.5rem;
  border-bottom: var(--border-width-sm) solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  > p {
    margin-bottom: 1.5em;
    > span {
      margin-left: 0.25em;
    }
  }
`;

/////////////////
/* INTERFACE */
/////////////////
type ICoordinateValue = {
  label: 'Lat'|'Long';
  value: number;
};

type ILocationItemProps = {
  lat: number;
  long: number;
  index: number;
};

// ** Main comp
const LocationItem: FC<ILocationItemProps> = ({lat, long, index}) => {
 
  return (
    <StyledLocationItem>
      <p>
        <img width="12" src={flagImgSrc} alt="flag" /> <span>Location {index}</span>
      </p>
      <table>
        <tbody>
          <LocationDisplayBlock label='Lat' value={lat} />
          <LocationDisplayBlock label='Long' value={long} />
        </tbody>
      </table>
    </StyledLocationItem>
  );
};

export default LocationItem;

//////////////////
/* HELPER COMP */
//////////////////
const StyledLabel = styled.td`
  font-weight: 700;
  padding-right: 0.5em;
`;

const StyledValue = styled.td`
  color: var(--color-brand-500);
  font-family: 'Roboto', sans-serif;
  text-align: right;
  font-weight: 500;
  padding: 0.5em 0.825em;
  font-size: 1.8rem;
  border: var(--border-width-xs) solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

const LocationDisplayBlock: FC<ICoordinateValue> = ({ label, value }) => {
  return (
    <tr>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </tr>
  );
};
