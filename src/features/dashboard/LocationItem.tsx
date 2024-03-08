import flagImgSrc from '@/assets/Marker.svg';
import { FC } from 'react';
import styled from 'styled-components';

const StyledLocationItem = styled.div`
  padding: 1.5rem 0 1.5rem 2.5rem;
  border-bottom: var(--border-width-sm) solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  > p {
    margin-bottom: 1.5em;
    > span {
      margin-left: .25em;
    }
  }
`;


type LocationDataType = {
  label: string;
  value: number;
};
export default function LocationItem() {
  const lat = {
    label: 'Lat',
    value: 37.56755685,
  };

  const long = {
    label: 'Long',
    value: 126.97328373,
  };
  return (
    <StyledLocationItem>
      <p>
        <img width="12" src={flagImgSrc} alt="flag" /> <span>Location 1</span>
      </p>
      <table>
        <LocationDisplayBlock {...lat} />
        <LocationDisplayBlock {...long} />
      </table>
    </StyledLocationItem>
  );
}



const StyledLabel = styled.td`
  font-weight: 700;
  padding-right: .5em;
`;

const StyledValue = styled.td`
  color: var(--color-brand-500);
  font-family: 'Roboto', sans-serif;
  text-align: right;
  font-weight: 500;
  padding: .5em .825em;
  font-size: 1.8rem;
  border: var(--border-width-xs) solid var(--color-grey-400);
  border-radius: var(--border-radius-md);
`;

const LocationDisplayBlock: FC<LocationDataType> = ({ label, value }) => {
  return (
    <tr>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </tr>
  );
};
