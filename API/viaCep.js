const eventClique = () => {
    var requestURL = 'https://viacep.com.br/ws/01001000/json/';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        // Requisição finalizada. Faça o processamento aqui.
        var retorno = request.response;
        console.log(retorno.localidade);
        console.log(retorno);
        console.log(request);
    };
};
