//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const users = 'https://danikho2020.github.io/json/user.json'




var getJSONData = function (url) {
  var result = {};
  
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}



document.addEventListener("DOMContentLoaded", function () {
 
  getJSONData(users).then(function(resultObj){
   if (resultObj.status === "ok" ){
    document.getElementById('enviar').addEventListener('click', function () { //al hacer click tira la funcion guiado por el id 
      var usuario = document.getElementById("name").value;
      var contrasena = document.getElementById("password").value;
      let usuarios=resultObj.data;

      for (let i = 0; i < usuarios.length; i++) {
        let pepe = usuarios[i]; ;
        
      
      if (usuario.length == 0 || contrasena.length == 0) {
        document.getElementById("nada").classList.remove('invalid-feedback');
        document.getElementById("nada").innerHTML="*Por favor ingresa sus datos para ingresar."
        
      } else if (usuario == pepe.user && contrasena == pepe.password) {
        location.href = "juegito.html";
      } else {
        document.getElementById("nada").classList.remove('invalid-feedback');
        document.getElementById("nada").innerHTML="*Por favor ingresa la contraseña correcta o revise su Usuario."
      }}
    })
   }  
  })

});
