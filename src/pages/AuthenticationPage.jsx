import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

const AuthenticationPage = () => {
  return (
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  )
}

export default AuthenticationPage