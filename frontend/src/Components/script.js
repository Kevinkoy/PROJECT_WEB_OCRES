import API_WEATHER from './API_Weather';

// Fonction appelée lors du click du bouton
function start(ville) {
    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(ville);
    // Appel de la fonction fetchTodayForecast
  
    apiWeather
      .fetchTodayForecast()
      .then(function(response) {
        // Récupère la donnée d'une API
        const data = response.data;
  
        // On récupère l'information principal
        const main = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
  
        // Modifier le DOM
        document.getElementById('today-forecast-main').innerHTML = main;
        document.getElementById('today-forecast-more-info').innerHTML = description;
        document.getElementById('icon-weather-container').innerHTML = icon;
        document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
        
      })
      .catch(function(error) {
        // Affiche une erreur
        console.error(error);
      });
  
  

  }
  function nouvelle_ville(){
          var ville = document.getElementById("city-input").value;
          start(ville);
  }


  export default nouvelle_ville;