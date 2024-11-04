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
        { lat: lat - 0.01, lon: lon - 0.01, descricao: "Ponto de Coleta 2" }
      ];
  
      pontos.forEach(function (ponto) {
        L.marker([ponto.lat, ponto.lon]).addTo(map).bindPopup(ponto.descricao);
      });
    }, function () {
      alert("Não foi possível obter sua localização.");
    });
  } else {
    alert("Geolocalização não é suportada por este navegador.");
  }
  