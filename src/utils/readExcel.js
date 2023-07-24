import Excel from "exceljs";

export async function readExcel(file) {
  const reader = new FileReader();
  const wb = new Excel.Workbook();
  reader.readAsArrayBuffer(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const buffer = reader.result;
      let rowsToArray = [];
      let headers = ["reference", "status", "comments"];
      wb.xlsx
        .load(buffer)
        .then((workbook) => {
          var finished = false;
          workbook.worksheets[0].eachRow((row, rowNumber) => {
            if (rowNumber > 1 && !finished) {
              if (row.getCell(1).value === "Creadas") {
                finished = true;
                return;
              }
              let rowToArray = {};
              rowToArray[headers[0]] = row.getCell(1).value;

              switch (row.getCell(10).value) {
                case "1":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "2":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "3":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "4":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "4.05":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "6":
                  rowToArray[headers[1]] = "completed";
                  break;
                case "8":
                  rowToArray[headers[1]] = "failed";
                  break;
                case "21":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "10":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "12":
                  rowToArray[headers[1]] = "completed";
                  break;
                case "16":
                  rowToArray[headers[1]] = "failed";
                  break;
                case "22":
                  rowToArray[headers[1]] = "pending";
                  break;
                case "14":
                  rowToArray[headers[1]] = "failed";
                  break;
                case "14.1":
                  rowToArray[headers[1]] = "failed";
                  break;
                case "14.2":
                  rowToArray[headers[1]] = "failed";
                  break;
                default:
                  reject("Estado no encontrado en la fila " + rowNumber);
                  break;
              }
              if (row.getCell(10).value === 12) {
                rowToArray[headers[2]] = row.getCell(84).value;
              } else {
                rowToArray[headers[2]] = row.getCell(70).value;
              }
              rowsToArray.push(rowToArray);
            }
          });
        })
        .then(() => {
          resolve(rowsToArray);
        });
    };
  });
}
