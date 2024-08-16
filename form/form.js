function getData(event) {
  event.preventDefault();
//   const name = document.getElementById("name").value;
//   const age  = document.getElementById("age").value;

const name = document.getElementsByName("name")[0].value;
const age = document.getElementsByName("age")[0].value;

  alert(`Name: ${name} age: ${age}`);
}
