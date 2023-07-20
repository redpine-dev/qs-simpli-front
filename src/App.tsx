import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { initLogin } from "./services/authService";
import { useEffect, useState } from "react";
import { mdiCircleSlice1 } from "@mdi/js";
import Icon from "@mdi/react";
import Layout from "./components/Layout";
import { Routes } from "./config/Routes";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Views/Login/Login";
import "./App.css";
import Home from "./components/Views/Home/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#BF549A",
      },
      secondary: {
        main: "#ED6E11",
      },
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      initLogin().finally(() => setLoading(false));
    };
    init();
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          {loading ? (
            <div className="h-full flex justify-center items-center">
              <div className="animate-spin text-altakBlue">
                <Icon size={6} path={mdiCircleSlice1}></Icon>
              </div>
            </div>
          ) : (
            <AppRoutes>
              <Route
                path={Routes.Home}
                element={<ProtectedRoute element={<Home />}></ProtectedRoute>}
              ></Route>

              <Route path={Routes.Login} element={<Login />}></Route>
            </AppRoutes>
          )}
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
