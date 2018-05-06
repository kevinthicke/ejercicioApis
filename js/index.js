
var key = 'KEY';

function translate() {
   var url = "https://translation.googleapis.com/language/translate/v2?key=" + key;
   url += "&source=" + "ES";
   url += "&target=" + "EN";
   url += "&q=" + "¿como estas?";

   $.getJSON(url, function (data, status) {
      console.log(data);
      drawResult(data.data.translations);
   });

};


function translatedText() {
   var time = new Date().getTime();
   var hash = CryptoJS.MD5(time + key).toString();
   var url = 'https://translation.googleapis.com/language/translate/v2?key=' + key;
   url += '&source=' + 'ES';
   url += '&target=' + 'EN';
   url += '&q=' + 'Hola';
   //url += '&q=' + '¿como estas?';

   console.log(url);

   $.getJSON(url, {
      ts: time,
      apikey: key,
      hash: hash})
      .done(function(data) {
         console.log(data);
         drawResult(data.data.translations);
      })
      .fail(function(err) {
         console.log(err);
         drawError(err);
      });
};

function drawResult(results) {
   for (var i = 0; i < results.length; i++) {
      var parrafo = document.createElement('p');
      var contenido = document.createTextNode(results[i].translatedText);
      parrafo.appendChild(contenido);

      document.body.appendChild(parrafo);
   }
}

function drawError(err) {
   var h2 = document.createElement('h2');
   var contenido = document.createTextNode(err);
   h2.appendChild(contenido);

   document.body.appendChild(h2);
}

//translate();
translatedText();
