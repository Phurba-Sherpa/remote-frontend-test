import styled from "styled-components"
import LocationItem from "./LocationItem"

const StyledLocationList = styled.div`
    min-height: 100dvh;
`
export default function LocationList() {
  return (
    <StyledLocationList>
      <LocationItem />
      <LocationItem />
      <LocationItem />
    </StyledLocationList>
  )
}
