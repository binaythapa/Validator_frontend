import * as XLSX from "xlsx";

export const extractHeader = ({ excelFile }) => {
  return new Promise((resolve, reject) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    if (excelFile && fileTypes.includes(excelFile.type)) {
      console.log("Excel file type");
      let reader = new FileReader();

      reader.onload = (e) => {
        let file = e.target.result;

        const workbook = XLSX.read(file, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const headerData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        })[0];
        resolve(headerData);
      };

      reader.readAsArrayBuffer(excelFile);
    } else {
      reject({ error: "ERROR FILE TYPE" });
    }
  });
};

export const changeArrToObj = (arr) => {
  let obj = {};
  arr.forEach((item) => {
    obj = { ...obj, [item]: item };
  });
  return obj;
};
