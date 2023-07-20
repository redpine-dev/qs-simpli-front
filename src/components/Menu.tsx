import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Routes } from "../config/Routes";
import { mdiLogoutVariant } from "@mdi/js";
import Icon from "@mdi/react";
import store from "../store";
import { AuthActions } from "../reducers/AuthReducer";

const Menu: React.FC = () => {
  const history = useLocation();

  const route = history.pathname;

  return (
    <div>
      <div
        className="flex w-72 h-full  gap-3 text-xl overflow-y-auto flex-col bg-archiBlue text-archiGrey"
        style={{ flex: "0 0 200px" }}
      >
        <Link to={Routes.Home}>
          <MenuItem>
            <div
              className={`${
                route === Routes.Home ? "text-archiLightBlue" : ""
              }`}
            >
              Inicio
            </div>
          </MenuItem>
        </Link>

        <MenuItem
          onClick={() => {
            store.dispatch({ type: AuthActions.DelToken, payload: null });
          }}
        >
          <ListItemText>Cerrar sesión</ListItemText>
          <ListItemIcon sx={{ color: "inherit" }}>
            <Icon className="w-7" path={mdiLogoutVariant}></Icon>
          </ListItemIcon>
        </MenuItem>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Menu;
