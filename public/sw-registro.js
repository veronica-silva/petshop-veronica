if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw-petshop.js")
    .then(function () {
      console.log("Service Worker registrado com sucesso");
    })
    .catch(function (error) {
      console.log("Erro no Service Worker " + error.message);
    });
} else {
  console.log("erro");
}
