// ** 3rd
import styled from 'styled-components';
import { FC } from 'react';

// ** others
import LocationItem from './LocationItem';
import { Icoordinate } from '../useLocation';

/////////////////
/* STYLES */
/////////////////
const StyledLocationList = styled.div`
  min-height: 100dvh;
`;

type ILocationProps = {
  locations: Icoordinate[] | null;
};

const LocationList: FC<ILocationProps> = ({ locations }) => {
  return (
    <StyledLocationList>
      {locations?.map((coordinate, index) => (
        <LocationItem
          lat={coordinate.at(0) as number}
          long={coordinate.at(1) as number}
          key={`${coordinate.at(0)}${coordinate.at(1)}`}
          index={index + 1}
        />
      ))}
    </StyledLocationList>
  );
};

export default LocationList;
