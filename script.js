
function inputData() {
  var inp = document.getElementById("myText").value;
  const url = "https://api.nationalize.io/?name="+inp;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(names) {
      getData(names);
    })
    .catch(function(err) {
      console.log(err.message);
    });
}

function getData(names) {
  number=names.country;
  let nameDiv = document.querySelector("#names");
  nameDiv.innerHTML = "";
  let table_ = document.createElement("table");
  row = table_.insertRow();
  cell = row.insertCell();
  cell.innerHTML = "Countries";
  cell = row.insertCell();
  cell.innerHTML = "Probabilities";

  for(let i=0;i<number.length;i++){
    let row = table_.insertRow()
    let country_id = row.insertCell();
    country_id.innerHTML = names.country[i].country_id;;
    let probability = row.insertCell();
    probability.innerHTML = names.country[i].probability;
  }
  nameDiv.appendChild(table_);
}
