var input = document.querySelector(".inputTekst");
var knop = document.querySelector(".knop");
var temperatuur = document.querySelector(".temperatuur");
var beschrijving = document.querySelector(".beschrijving");
var locatie = document.querySelector(".locatie");
var icoon = document.querySelector(".icoon");
var map = document.querySelector("#map");



knop.addEventListener('click',function(weer){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=66a1f3d30bb90537cdbea4895a2a32bf')
    .then(response => response.json())
    .then(data => {
        var locatieValue = data['name'];
        var temperatuurValue = data['main']['temp'];
        var beschrijvingValue = data['weather'][0]['description'];
        var icoonValue = data['weather'][0]['icon'];
        latValue = data["coord"]['lat'];
        lonValue = data["coord"]['lon'];

    
        locatie.innerHTML = locatieValue;
        temperatuur.innerHTML = Math.round(temperatuurValue - 272.15) + " -° C";
        beschrijving.innerHTML = beschrijvingValue;
        icoon.innerHTML = `<img src="icons/${icoonValue}.png"/>`;
        
    })

    .catch(err => alert("Stad niet herkend."))

})

mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja3N0dWRlbnQiLCJhIjoiY2s5ODkydGh3MHc5dzNvcGNvaG0zbDVzbCJ9.H3C8QVDzDBbraontUu0v1Q';
var map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/dark-v10', 
    center: [4.3, 52.07],
    zoom: 10
    });

knop.addEventListener('click',function(kaart){
    var pos1 = latValue;
    var pos2 = lonValue;
    
    map.flyTo({
        center: [pos2,pos1],
        essential: true
    });
});
                      
