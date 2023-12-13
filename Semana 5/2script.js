<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Universidade Estadual de Santa Cruz - UESC</title>
</head>
<body>

    <!-- Seu conteúdo HTML -->

    <!-- Scripts -->
    <script>
        // Função para fazer uma requisição genérica usando Fetch
        function fazerRequisicao(url, successCallback, errorCallback) {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.statusText);
                    }
                })
                .then(data => successCallback(data))
                .catch(error => errorCallback(error));
        }

        // Requisição para obter resultados
        fazerRequisicao('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3', function (data) {
            try {
                const resultadosDOM = document.querySelector('#resultados');
                data.items.forEach((item, id) => {
                    resultadosDOM.children[id * 2].innerHTML = item.titulo;
                    resultadosDOM.children[id * 2 + 1].innerHTML = item.introducao;

                    // Criar um link "Saiba mais"
                    const novoLink = document.createElement('a');
                    novoLink.href = item.link;
                    novoLink.textContent = 'Saiba mais...';
                    resultadosDOM.children[id * 2 + 1].appendChild(novoLink);
                });
            } catch (error) {
                console.log(error);
            }
        }, function (error) {
            console.log(error);
        });

        // Requisição para obter dados de meteorologia
        fazerRequisicao('https://api.openweathermap.org/data/2.5/weather?lat=-14.795999193380537&lon=-39.17346823068079&lang=pt_br&appid=6b0044ed510c0cabb54f601d3daa70de', function (data) {
            try {
                const servicosDOM = document.querySelector('#servicos');
                const listasDOM = Array.from(servicosDOM.firstElementChild.children.item(1).children);

                const dadosTempo = [
                    (data.main.temp - 273.15).toFixed(1) + '°C',
                    'Umidade do ar: ' + data.main.humidity + '%',
                    data.weather[0].description.toString()
                ];

                const urlIcone = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                const icon = document.createElement('img');
                icon.src = urlIcone;

                servicosDOM.firstElementChild.firstElementChild.textContent = 'Previsão do Tempo no Campus';
                listasDOM.forEach((item, id) => {
                    item.textContent = dadosTempo[id];
                });

                servicosDOM.firstElementChild.children.item(1).appendChild(icon);
            } catch (error) {
                console.log(error);
            }
        }, function (error) {
            console.log(error);
        });

        // Requisição para obter notícias
        fazerRequisicao('https://api.worldnewsapi.com/search-news?api-key=a1866c1a071e4ef49aef93db0f2beab5&language=pt&entities=LOC:Brasil&source-countries=br&number=3&earliest-publish-date=2023-10-01', function (data) {
            try {
                const noticiasDOM = document.querySelector('#noticias');
                data.news.forEach((item, id) => {
                    noticiasDOM.children[id * 2 + 1].innerHTML = item.title;
                    noticiasDOM.children[id * 2 + 1].href = item.url;
                });
            } catch (error) {
                console.log(error);
            }
        }, function (error) {
            console.log(error);
        });
    </script>
</body>
</html>
