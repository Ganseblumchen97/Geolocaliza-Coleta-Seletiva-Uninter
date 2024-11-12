document.addEventListener("DOMContentLoaded", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // Oculta o carregamento e exibe o mapa
      document.getElementById("loading").style.display = "none";
      document.getElementById("map").style.display = "block";
      
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map);

      L.marker([lat, lon]).addTo(map).bindPopup("Você está aqui").openPopup();

      var iconRecycle = L.icon({
        iconUrl: 'Icons/recycle-solid.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      var pontos = [
        { lat: lat - 0.12, lon: lon + 0.47, descricao: "Ponto de Coleta 1" },
        { lat: lat - 0.11, lon: lon + 0.44, descricao: "Ponto de Coleta 2" },
        { lat: lat - 0.09, lon: lon + 0.45, descricao: "Ponto de Coleta 3" },
        { lat: lat - 0.07, lon: lon + 0.42, descricao: "Ponto de Coleta 4" }
      ];

      pontos.forEach(function (ponto) {
        L.marker([ponto.lat, ponto.lon], { icon: iconRecycle }).addTo(map).bindPopup(ponto.descricao);
      });
    }, function () {
      alert("Não foi possível obter sua localização.");
    });
  } else {
    alert("Geolocalização não é suportada por este navegador.");
  }
});
