var restaurants = [
    { 
        name: "Tasquinha do Lagarto", address: "R. de Campalide 258, Lisboa",
        lat: 38.734495, lon: -9.164574
    },

    { 
        name: "Indian Dreams Benfica", address: "R. Olivéra Serpa 35D, 1500-356 Lisboa",
        lat: 38.750077, lon: -9.205245
    },

    { 
        name: "Boa Esperança", address: "Av. Gomes Pereira 3, 1500-328 Lisboa",
        lat: 38.750276, lon: -9.197377
    },
    { 
        name: "Costa do Malabar", address: "R. Rosa Damasceno 6, 1900-396 Lisboa",
        lat: 38.735810, lon: -9.132050
    },
    
    { 
        name: "Restaurante Tonga", address: "Av. do Uruguai 26, 1500-613 Lisboa",
        lat: 38.752308, lon: -9.196907
    },

    { 
        name: "Restaurante Cantinho do Aziz", address: "Rua de sao lourenço nº5, 1100-530 Lisboa",
        lat:38.714129, lon: -9.135654
    },
    
    { 
        name: "Sushi Shop", address: "Via Po 160",
        lat: 41.9156915, lon: 12.471871
    }

    
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}