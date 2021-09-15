// display
const number = document.querySelector(".number");
// function ubah display
let nilai;
function display(digit) {
  if (number.textContent == "0") {
    number.textContent = digit;
  } else {
    number.textContent += digit;
  }
  return (nilai = number.textContent);
}
// function menjumlahkan
function jumlah() {
  let hasil;
  //   tambah
  if (nilai.includes("+")) {
    let b = nilai.split("+");
    hasil = parseFloat(b[0]) + parseFloat(parseFloat(b[1]));
  }
  //   kurang
  else if (nilai.includes("-")) {
    let b = nilai.split("-");
    hasil = parseFloat(b[0]) - parseFloat(b[1]);
  }
  //   kali
  else if (nilai.includes("×")) {
    let b = nilai.split("×");
    hasil = parseFloat(b[0]) * parseFloat(b[1]);
  }
  //   bagi
  else if (nilai.includes("÷")) {
    let b = nilai.split("÷");
    hasil = parseFloat(b[0]) / parseFloat(b[1]);
  }

  number.textContent = hasil;
  return;
}
function reset() {
  return (number.textContent = "0");
}

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "btn") {
    display(e.target.textContent);
    const clear = document.querySelector(".clear");
    if (number.textContent != "0") {
      clear.textContent = "CE";
    }
  }
  if (e.target.className == "btn equals") {
    jumlah();
  }
  if (e.target.className == "btn clear") {
    reset();
  }
});
