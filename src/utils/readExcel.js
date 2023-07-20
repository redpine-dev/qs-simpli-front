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
          workbook.worksheets[0].eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
              let rowToArray = {};
              rowToArray[headers[0]] = row.getCell(1).value;
              rowToArray[headers[1]] = row.getCell(11).value;
              rowToArray[headers[2]] = row.getCell(70).value;
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
