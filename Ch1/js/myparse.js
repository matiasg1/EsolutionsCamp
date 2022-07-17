/*
* Nombre: Matias Gerez
* Email: mati.gerez7@gmail.com

*/


let input = document.querySelector("#text");

let valueInputJSON;

// onchange del input
const inputJSON = (event) => {
  // borramos comillas de inicio y final
  const deleteQuotationMarks = event.target.value.slice(1, -1);
  // almacenamos en var global
  valueInputJSON = deleteQuotationMarks;
};

addEventListener();
function addEventListener() {
  input.addEventListener("change", inputJSON);
}

function convertToObject(json) {
  return eval("(" + json + ")");
}

const convertJsonToObject = () => {
  // convertimos el string en objeto
  const newObject = convertToObject(valueInputJSON);
  // mostramos
  console.log(newObject); 
  console.log(typeof newObject); // object
};


