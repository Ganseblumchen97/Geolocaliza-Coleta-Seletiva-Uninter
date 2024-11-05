var iconRecycle = L.icon({
  iconUrl: 'Icons/recycle-solid.svg', // Caminho para o seu arquivo SVG
  iconSize: [32, 32], // Tamanho do ícone (ajuste conforme necessário)
  iconAnchor: [16, 32], // Ponto onde o ícone estará ancorado (ajuste conforme necessário)
  popupAnchor: [0, -32] // Ponto onde o popup aparecerá em relação ao ícone
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // Obtém a posição atual
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Inicializa o mapa
    var map = L.map('map').setView([lat, lon], 13);

    // Adiciona a camada do mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);

    // Adiciona um marcador para a localização do usuário
    L.marker([lat, lon]).addTo(map).bindPopup("Você está aqui").openPopup();

    // Adiciona pontos fictícios para coleta seletiva
    var pontos = [
      { lat: lat + 0.01, lon: lon + 0.01, descricao: "Ponto de Coleta 1" },
      { lat: lat - 0.01, lon: lon - 0.01, descricao: "Ponto de Coleta 2" },
      { lat: lat - 0.12, lon: lon + 0.47, descricao: "Ponto de Coleta 3" },
      { lat: lat - 0.11, lon: lon + 0.44, descricao: "Ponto de Coleta 4" },
      { lat: lat - 0.10, lon: lon + 0.45, descricao: "Ponto de Coleta 5" }
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

// Remove o loader quando a página estiver completamente carregada
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

  