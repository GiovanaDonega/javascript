<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giovana Donegá - Esportes e Filmes</title>
    <style>
        /* Reset básico */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Fonte e cores */
        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(to right, #e0f7fa, #b2ebf2); /* Gradiente azul claro */
            color: #003d6c; /* Azul escuro */
            line-height: 1.6;
            transition: background 0.3s ease, color 0.3s ease;
        }

        /* Estilo do cabeçalho */
        header {
            background: #00acc1; /* Azul forte */
            color: white;
            text-align: center;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        header h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        /* Estilo dos botões */
        button {
            background-color: #00796b; /* Azul esverdeado */
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease, transform 0.3s ease;
        }

        button:hover {
            background-color: #004d40; /* Azul esverdeado escuro */
            transform: scale(1.05);
        }

        button:active {
            background-color: #003d34; /* Azul esverdeado mais escuro */
        }

        /* Estilo das seções */
        main {
            padding: 20px;
        }

        section {
            margin-bottom: 40px;
            border-radius: 12px;
            background: #ffffff; /* Branco */
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
            font-family: 'Open Sans', sans-serif;
            font-size: 2rem;
            color: #00796b; /* Azul esverdeado */
            border-bottom: 2px solid #00acc1;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        /* Estilo dos itens de esporte e filme */
        .sport-item, .movie-item {
            border: 2px solid #00796b; /* Azul esverdeado */
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            background: #e0f2f1; /* Azul claro esverdeado */
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .sport-item.visible, .movie-item.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .sport-item:hover, .movie-item:hover {
            background: #b2dfdb; /* Azul esverdeado mais claro */
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        /* Estilo do tema escuro */
        body.dark-mode {
            background: linear-gradient(to right, #003d6c, #004d40); /* Gradiente azul escuro */
            color: #e0f7fa; /* Azul claro */
        }

        body.dark-mode header {
            background: #004d40; /* Azul esverdeado escuro */
        }

        body.dark-mode section {
            background: #003d6c; /* Azul escuro */
        }

        body.dark-mode .sport-item, body.dark-mode .movie-item {
            border: 2px solid #004d40; /* Azul esverdeado escuro */
            background: #002f3c; /* Azul escuro */
        }

        body.dark-mode .sport-item:hover, body.dark-mode .movie-item:hover {
            background: #001f2c; /* Azul muito escuro */
        }
    </style>
</head>
<body>
    <header>
        <h1>Giovana Donegá</h1>
        <button id="themeToggle">Tema Escuro</button>
        <button id="welcomeMessage">Mostrar Boas-vindas</button>
    </header>
    
    <main>
        <section class="sports">
            <h2>Esportes</h2>
            <div class="sport-item">
                <h3>Futebol</h3>
                <p>O futebol é o esporte mais popular do mundo, jogado por milhões de pessoas. Acompanhe as principais ligas e campeonatos.</p>
            </div>
            <div class="sport-item">
                <h3>Basquete</h3>
                <p>O basquete é um esporte emocionante, conhecido pelas suas jogadas rápidas e cestas impressionantes. A NBA é uma das principais ligas.</p>
            </div>
            <div class="sport-item">
                <h3>Tênis</h3>
                <p>O tênis é um esporte de precisão e estratégia, jogado em uma quadra. Os torneios Grand Slam são altamente prestigiados.</p>
            </div>
        </section>
        
        <section class="movies">
            <h2>Catálogo de Filmes</h2>
            <div class="movie-item">
                <h3>Inception</h3>
                <p>Direção: Christopher Nolan</p>
                <p>Descrição: Dom Cobb é um ladrão especializado em extrair segredos dos sonhos. Um último trabalho pode dar a ele a chance de uma vida normal.</p>
            </div>
            <div class="movie-item">
                <h3>The Matrix</h3>
                <p>Direção: The Wachowskis</p>
                <p>Descrição: Neo descobre a verdade sobre a realidade que conhece e se junta a um grupo de rebeldes para lutar contra as máquinas.</p>
            </div>
            <div class="movie-item">
                <h3>Interstellar</h3>
                <p>Direção: Christopher Nolan</p>
                <p>Descrição: Um grupo de exploradores viaja através de um buraco de minhoca para garantir a sobrevivência da humanidade.</p>
            </div>
        </section>
    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleButton = document.getElementById('themeToggle');
            const welcomeButton = document.getElementById('welcomeMessage');

            // Alternar entre temas claro e escuro
            themeToggleButton.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    themeToggleButton.textContent = 'Tema Claro';
                } else {
                    themeToggleButton.textContent = 'Tema Escuro';
                }
            });

            // Mostrar mensagem de boas-vindas
            welcomeButton.addEventListener('click', () => {
                alert('Bem-vindo à página de Giovana Donegá!');
            });

            // Função para adicionar classe de animação aos itens visíveis
            function animateOnScroll() {
                const elements = document.querySelectorAll('.sport-item, .movie-item');
                const windowHeight = window.innerHeight;

                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;

                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            }

            // Adicionar evento de rolagem e inicialização
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Inicializar a animação ao carregar a página
        });
    </script>
</body>
</html>
