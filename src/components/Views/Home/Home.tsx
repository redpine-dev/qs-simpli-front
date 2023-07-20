import { Button } from "@mui/material";
import { ChangeEvent } from "react";
import { readExcel } from "../../../utils/readExcel";

const Home: React.FC = () => {
  function handleUpload(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files![0];
    readExcel(file)
      .then((rows: any[]) => {
        console.log(JSON.stringify(rows));
        e.target.value = "";
      })
      .catch((err: any) => {
        e.target.value = "";
      });
  }

  return (
    <div className="home">
      <img
        src={"bienvenido.png"}
        className="welcome-image mt-10"
        alt="Bienvenido"
      />
      <div className="welcome-title">¡Bienvenid@!</div>
      <div>
        <input
          accept=".xls, .xlsx"
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={(e) => handleUpload(e)}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component="span"
          >
            Carga Masiva
          </Button>
        </label>
      </div>
    </div>
  );
};
export default Home;
