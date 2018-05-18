
var privateKeyMarvel = 'fd677ca1a7179fc0fd3d391c112a766d255ca330';
var publicKeyMarvel = '92c98cfd032165a4e664ea0b53491be5';


function getMarvelComics() {
   var time = new Date().getTime();
   var hash = CryptoJS.MD5(time + privateKey + publicKey).toString();
   var url = 'https://gateway.marvel.com:443/v1/public/comics'
   var characterId = '1009718';

   console.log(url);

   $.getJSON(url, {
      ts: time,
      apikey: publicKey,
      hash: hash,
      characters: characterId})
      .done(function(data) {
         drawResult(data.data.results);
      })
      .fail(function(err) {
         console.log(err);
      });
};


function drawResult(results) {
   for (var i = 0; i< results.length; i++) {
      var parrafo = document.createElement('p');
      var contenido = document.createTextNode(results[i].title);
      parrafo.appendChild(contenido);

      document.body.appendChild(parrafo);
   }
}


getMarvelComics();
