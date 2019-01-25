var arr = [""];

var xmlhttp = new XMLHttpRequest();
      
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "restaurant.json", true);
xmlhttp.send();

function order0() {
  var num0 = document.getElementById("counter0").value;
  arr.push(num0);
  var price0 = mydata.food[0].price;
  var total0 = num0 * price0;
  localStorage.setItem("total0", total0);
  //adds to check on webpage
  var newTr = document.createElement('tr');
  var newTdA = document.createElement('td');
  var qty0 = document.createTextNode(num0);
  var tableQty0 = newTr.appendChild(newTdA).appendChild(qty0);
  
}

