let XLSX = require("xlsx");

const Convertidor = (archivo) => {
    const exel = XLSX.readFile(
        archivo
    );
    let nombreHoja = exel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(exel.Sheets[nombreHoja[0]]);
    let salida = [];
    salida.push(datos[3]);
    for (i = 11; i < (datos.length -1); i++) {
        salida.push(datos[i]);
    }
    for (i = 1; i < salida.length; i++) {
        delete salida[i].__EMPTY;
        delete salida[i].__EMPTY_1;
        delete salida[i].__EMPTY_4;
        delete salida[i].__EMPTY_5;
        delete salida[i].__EMPTY_12;
        delete salida[i].__EMPTY_14;
        delete salida[i].__EMPTY_16;
        delete salida[i].__EMPTY_17;
    }
    return salida
};

console.log(Convertidor("C:\\Users\\Jesus Lara\\proyectos\\excelJson\\AC128126.xls"))