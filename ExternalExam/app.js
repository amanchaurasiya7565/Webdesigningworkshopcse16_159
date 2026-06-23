function check(){
  let n = +document.getElementById("num").value;
  document.getElementById("res").innerText = n%2===0 ? "Even" : "Odd";
}