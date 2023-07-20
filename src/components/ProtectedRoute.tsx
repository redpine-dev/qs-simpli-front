import { Navigate } from "react-router-dom"
import { Routes } from "../config/Routes"
import { useAppSelector } from "../hooks/storeHooks"
interface Props {
  element: React.ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  const loggedIn = useAppSelector((s) => !!s.authReducer.token)
  return loggedIn ? element : <Navigate to={Routes.Login} />
}

export default ProtectedRoute
