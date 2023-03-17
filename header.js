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
              </ul> \
              \
        </nav> \
      </header> \
    </html> \
  ');
})

$(document).ready(function () {
  $(".footer").append(' \
    <footer class="footer"> \
      <div> \
        <ul class="nav"> \
          <li class="nav-item"><a class="nav-link" href="./index.html" title="index">Accueil</a></li> \
          <li class="nav-item"><a class="nav-link" href="./about.html" title="about">Profil</a></li> \
          <li class="nav-item"><a class="nav-link" href="./tools.html" title="tools">Outils</a> \
        </ul> \
      </div> \
        \
      <div> \
        <ul class="nav"> \
          <li class="nav-item"><a class="nav-link" href="" title="contact-form">Contactez-nous</a></li> \
          <li class="nav-item"><a class="nav-link" href="" title="email">Email</a></li> \
          <li class="nav-item"><a class="nav-link" href="" title="adress">Adresse</a></li> \
          <li class="nav-item"><a class="nav-link" href="" title="phone">Téléphone</a></li> \
           <li class="nav-item"><a class="nav-link"href="" title="socials">Réseaux sociaux</a></li> \
          <li class="nav-item"><a class="nav-link" href="#" title="legal">Mentions légales</a></li> \
          </ul> \
      </div> \
        \
      <p>©SAVIAD - Copyright 2023</p> \
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
