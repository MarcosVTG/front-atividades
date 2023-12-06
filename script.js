<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style-form.css">
    <title>Agência de Viagens - Criação de Pacotes</title>
</head>
<body>
    <div class="form">
        <form id="novo-pacote">
            <h2>Crie Novos Pacotes de Viagem com Impacto!</h2>
            <label for="cidade">Destino Incrível:</label>
            <input type="text" id="cidade" name="cidade" required>
            
            <label for="pacote">Categoria do Pacote:</label>
            <input type="text" id="pacote" name="pacote" required>
            
            <label for="preco">Investimento (R$):</label>
            <input type="number" id="preco" name="preco" step="0.01" required>
            
            <label for="observacoes">Detalhes Surpreendentes:</label>
            <textarea id="observacoes" name="observacoes" rows="4" required></textarea>
            
            <label for="url-img">URL da Imagem Inspiradora:</label>
            <input type="url" id="url-img" name="url-img" required>
            
            <input type="submit" id="adicionar" value="Criar Pacote Memorável">
        </form>
    </div>
    
    <br>
    
    <hr>
    
    <br>
    
    <div class="container"
        <!-- Aqui serão exibidos os pacotes de viagem -->
    </div>
    
    <script src="./script.js"></script>
</body>
</html>
