$(document).ready(function () {
  $(".header").append(' \
    <!DOCTYPE html> \
    <html lang="fr"> \
      <header> \
        <nav class="nav"> \
              <ul class="nav"> \
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="./index.html" title="index">Accueil</a></li> \
                <li class="nav-item"><a class="nav-link" href="./about.html" title="profile">Profil</a></li> \
                <li class="nav-item"><a class="nav-link" href="./tools.html" title="tools">Outils</a></li> \
                <li class="nav-item"><a class="nav-link" href="./contact.html" title="contact">Contactez-nous</a></li> \
              </ul> \
              \
        </nav> \
      </header> \
    </html> \
  ');
})

console.log(typeof(null))

$(document).ready(function () {
  $(".footer").append(' \
  <footer class="footer"> \
    <div> \
      <ul> \
        <li><a href="./index.html" title="index">Accueil</a></li> \
        <li><a href="#" title="about">Profil</a></li> \
        <li><a href="#" title="tools">Outils</a> \
      </ul> \
    </div> \
    \
    <div> \
      <ul class="nav"> \
          <li><a href="#" title="contact-form">Contactez-nous</a></li> \
          <li><a href="#" title="email">Email</a></li> \
          <li><a href="#" title="adress">Adresse</a></li> \
           <li><a href="#" title="phone">Téléphone</a></li> \
          <li><a href="#" title="socials">Réseaux sociaux</a></li> \
          <li><a href="#" title="legal">Mentions légales</a></li> \
      </ul> \
    </div> \
      \
    <div id="copyrigth"> \
      <p>©SAVIAD - Copyright 2023</p> \
    </div> \
  </footer> \
  ');
})

// $(document).ready(function () {
//
//   var newURL = document.URL.substring( 0, document.URL.lastIndexOf( "/" ))+'/header.html'
//   //
//   // alert(newURL);
//   //
//   // $('.header').load(newURL);
//
//   $.ajax({
//           url: newURL,
//           type: 'GET',
//           cors: false ,
//           dataType: 'html',
//           secure: false,
//           headers: {
//             'Access-Control-Allow-Origin': '*',
//           },
//           beforeSend: function (xhr) {
//             xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
//           },
//           success: function (data){
//
//           }
//       }).done(function(data) {
//     $(".header").textContent = data;
//   });
// })
