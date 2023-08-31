import { Alert, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { readExcel } from "../../../utils/readExcel";
import { sendExcel } from "../../../services/excelService";

const Home: React.FC = () => {
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  function handleUpload(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files![0];
    readExcel(file)
      .then((rows: any[]) => {
        console.log(rows);
        sendExcel(rows)
          .then((res) => {
            if (res) setSuccessAlert(true);
            else setErrorAlert(true);
          })
          .catch((err: any) => {
            setErrorAlert(true);
          });

        e.target.value = "";
      })
      .catch((err: any) => {
        alert(err);

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
      {successAlert && (
        <Alert
          severity="success"
          sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
          onClose={() => {
            setSuccessAlert(false);
          }}
        >
          Excel Cargado exitosamente
        </Alert>
      )}
      {errorAlert && (
        <Alert
          severity="error"
          sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
          onClose={() => {
            setErrorAlert(false);
          }}
        >
          Hubo un error
        </Alert>
      )}
    </div>
  );
};
export default Home;
