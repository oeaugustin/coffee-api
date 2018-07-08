document.getElementById("clickMe").onclick = makeReq;

function makeReq(){

  let strain = document.getElementById("selectThing").value;
    console.log(strain)

  let request = new XMLHttpRequest();
  request.open('GET', '/coffee?coffee='+strain, true);
  console.log(strain)

  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("name").innerHTML = data.name
        document.getElementById("species").innerHTML = data.species
        document.getElementById("region").innerHTML = data.region
        console.log(data.name)
        console.log(data.species)
        console.log(data.region)
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      console.log('er')
      // There was a connection error of some sort
    };

    request.send();
}
