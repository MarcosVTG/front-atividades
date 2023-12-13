<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Universidade Estadual de Santa Cruz - UESC</title>
</head>
<body>

    <!-- Header -->
    <header class="header">
        <h1>UESC - Universidade Estadual de Santa Cruz</h1>
        <div class="logo"></div>
    </header>

    <!-- Main Content -->
    <main class="content">
        <!-- Menu -->
        <section class="menu">
            <div class="head">
                <h2>Menu</h2>
            </div>
            <div class="menu-items">
                <span>Menu 1</span>
                <span>Menu 2</span>
                <span>Menu 3</span>
                <span>Menu 4</span>
                <span>Menu 5</span>
                <span>Menu 6</span>
                <span>Menu 7</span>
            </div>
        </section>

        <!-- Notícias -->
        <section class="noticias">
            <div class="head">
                <h2>Notícias</h2>
            </div>
            <div class="content" id="noticias">
                <article>
                    <h3>Notícia 1</h3>
                    <p><a href="#">Lorem ipsum dolor sit amet consectetur.</a></p>
                </article>
                <article>
                    <h3>Notícia 2</h3>
                    <p><a href="#">Lorem ipsum dolor sit amet consectetur.</a></p>
                </article>
                <article>
                    <h3>Notícia 3</h3>
                    <p><a href="#">Lorem ipsum dolor sit amet consectetur.</a></p>
                </article>
                <button>Mais Notícias</button>
            </div>
        </section>

        <!-- Destaques -->
        <section class="destaques">
            <div class="head">
                <h2>Destaques</h2>
            </div>
            <div class="content">
                <img src="https://cdn.pixabay.com/photo/2021/10/23/08/25/social-media-6734382_1280.png" alt="Redes Sociais">
                <img src="https://cdn-icons-png.flaticon.com/512/224/224595.png" alt="Biblioteca Virtual">
            </div>
        </section>

        <!-- Serviços -->
        <section class="servicos">
            <div class="head">
                <h2>Serviços</h2>
            </div>
            <div class="content" id="servicos">
                <div class="setor">
                    <div class="setor-titulo" onclick="expansao(this)">Setor 1</div>
                    <ul class="lista">
                        <li><p>Serviço 1</p></li>
                        <li><p>Serviço 2</p></li>
                        <li><p>Serviço 3</p></li>
                    </ul>
                </div>
                <div class="setor">
                    <div class="setor-titulo" onclick="expansao(this)">Setor 2</div>
                    <ul class="lista">
                        <li><a href="#">Serviço 1</a></li>
                        <li><a href="#">Serviço 2</a></li>
                        <li><a href="#">Serviço 3</a></li>
                    </ul>
                </div>
                <!-- ... (adicionar outros setores conforme necessário) ... -->
            </div>
        </section>

        <!-- Resultados -->
        <section class="resultados">
            <div class="head">
                <h2>Resultados</h2>
            </div>
            <div class="content" id="resultados">
                <!-- ... (seus resultados) ... -->
                <button>Outros Resultados</button>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <p>UNIVERSIDADE ESTADUAL DE SANTA CRUZ - Campus Soane Nazaré de Andrade, Rodovia Jorge Amado, km 16, Bairro Salobrinho. CEP 45662-900. Ilhéus-Bahia</p>
    </footer>

    <!-- Scripts -->
    <script>
        function expansao(element) {
            var servicosLista = element.nextElementSibling;
            var todosSetores = document.querySelectorAll('.setor');

            // Fechar todos os setores antes de abrir o selecionado
            todosSetores.forEach(function (setor) {
                if (setor !== element.parentElement) {
                    var servicosOutroSetor = setor.querySelector('.lista');
                    servicosOutroSetor.style.display = 'none';
                }
            });

            // Alternar a visibilidade do setor atual
            servicosLista.style.display === 'none' || servicosLista.style.display === ''
                ? (servicosLista.style.display = 'block')
                : (servicosLista.style.display = 'none');
        }
    </script>
</body>
</html>
