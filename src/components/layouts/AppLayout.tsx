import { type ReactNode } from "react"

// ** Comp
import VerticalNav from "./VerticalNav"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

//////////////////
/* STYLES */
//////////////////
const StyledAppLayout = styled.div`
display: flex;
`

const StyledMainLayout = styled.main`
  width: 100%;
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
        <VerticalNav />
        <StyledMainLayout>
          <Outlet />
        </StyledMainLayout>
    </StyledAppLayout>
  )
}
