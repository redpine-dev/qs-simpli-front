import { Card, TextField, Button } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Routes } from "../../../config/Routes"
import { useAppSelector } from "../../../hooks/storeHooks"
import { useForm } from "../../../hooks/useForm"
import { login } from "../../../services/authService"

const Login: React.FC = () => {
  const initialValues = {
    name: "",
    password: "",
  }
  const loggedIn = useAppSelector((s) => !!s.authReducer.token)
  const [values, , handleChange] = useForm(initialValues)
  const [loading, setloading] = useState(false)

  if (loggedIn) {
    return <Navigate to={Routes.Home} />
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
      <div className="flex justify-center">
        <object data="6.svg" width="300" height="300"> </object>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setloading(true)
            login(values.name, values.password).finally(() =>
              setloading(false)
            )
          }}
          className="flex flex-col justify-center gap-2 mt-2 p-2"
        >
          <TextField
            onChange={handleChange}
            id="name"
            name="name"
            label="Usuario"
          ></TextField>
          <TextField
            onChange={handleChange}
            id="password"
            name="password"
            label="Contraseña"
            type="password"
          ></TextField>
          {loading ? (
            <div className="text-center">Cargando</div>
          ) : (
            <Button type="submit" variant="contained">
              Login
            </Button>
          )}
        </form>
      </Card>
    </div>
  )
}

export default Login
