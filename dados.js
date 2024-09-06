let dados = [
    {
        titulo: "O Exorcista",
        descricao: "Uma jovem é possuída por uma força demoníaca, e um padre é chamado para realizar um exorcismo.",
        imdb: "https://www.imdb.com/title/tt0070047/",
        wikipedia: "https://pt.wikipedia.org/wiki/O_Exorcista_(filme)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbfGwBKWJn4hDfJQyG4FglycSXGRT7goPQA&s",
        tags : "terror, horror, exorcismo, possessão demoníaca, clássico, sobrenatural, medo, suspense, religião, padre, demônio, anos 70, William Friedkin, Linda Blair, Ellen Burstyn, filme de culto, cinema, assustador, icônico, thriller psicológico, rituais religiosos"
    },
    {
        titulo: "O Iluminado",
        descricao: "Um escritor, sua esposa e seu filho se mudam para um isolado hotel de montanha no inverno, onde eventos sobrenaturais começam a ocorrer.",
        imdb: "https://www.imdb.com/title/tt0081505/",
        wikipedia: "https://pt.wikipedia.org/wiki/The_Shining",
        imagem:"https://br.web.img3.acsta.net/pictures/14/10/10/19/21/152595.jpg",
        tags : "terror psicológico, Stephen King, Stanley Kubrick, Jack Nicholson, hotel assombrado, isolamento, loucura, suspense, clássico, anos 80, sobrenatural, Danny Torrance, Wendy Torrance, Redrum, Overlook Hotel, labirinto, inverno, thriller, adaptação literária, filme de culto"
    },
    {
        titulo: "A Bruxa de Blair",
        descricao: "Um grupo de estudantes universitários desaparece enquanto filma um documentário sobre uma lenda local sobre uma bruxa.",
        imdb: "https://www.imdb.com/title/tt0185937/",
        wikipedia: "https://pt.wikipedia.org/wiki/Blair_Witch",
        imagem: "https://br.web.img3.acsta.net/pictures/16/09/05/15/42/354197.jpg",
        tags : "terror, found footage, filme independente, floresta assombrada, lenda urbana, desaparecimento, bruxa, documentário fictício, anos 90, suspense, Heather Donahue, Michael C. Williams, Joshua Leonard, baixo orçamento, icônico, sustos, terror psicológico, final aberto, improvisação, festival de Sundance"
    },
    {
        titulo: "It - A Coisa",
        descricao: "Um grupo de crianças precisa enfrentar um antigo mal que se alimenta do medo, ressurgindo a cada 27 anos na cidade de Derry.",
        imdb: "https://www.imdb.com/title/tt1396484/",
        wikipedia: "https://pt.wikipedia.org/wiki/It_(2017)",
        imagem: "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg",
        tags: "terror, Stephen King, palhaço, sobrenatural, amizade, infância, medo, Derry, anos 80, remake, Pennywise, grupo de amigos, clássico moderno, sustos, adaptação literária"
    },
    {
        titulo: "Atividade Paranormal",
        descricao: "Um casal jovem começa a gravar vídeos de si mesmos enquanto dormem, na esperança de capturar evidências de atividade paranormal em sua casa.",
        imdb: "https://www.imdb.com/title/tt1179904/",
        wikipedia: "https://pt.wikipedia.org/wiki/Atividade_Paranormal",
        imagem: "https://media.fstatic.com/zf7DyCEuZH1EAtQzrVVwdCNkl1k=/322x478/smart/filters:format(webp)/media/movies/covers/2010/02/ea4dc71d9ea25ca0325e38310413c74a.jpg",
        tags: "terror, found footage, sobrenatural, espíritos, casa assombrada, medo, baixo orçamento, série de filmes, suspense, sustos, câmeras de segurança, filme independente, fenômenos paranormais, franquia de sucesso"
    },
    {
        titulo: "Invocação do Mal",
        descricao: "Os investigadores paranormais Ed e Lorraine Warren ajudam uma família aterrorizada por uma presença maligna em sua casa.",
        imdb: "https://www.imdb.com/title/tt1457767/",
        wikipedia: "https://pt.wikipedia.org/wiki/The_Conjuring",
        imagem: "https://media.fstatic.com/zf7DyCEuZH1EAtQzrVVwdCNkl1k=/322x478/smart/filters:format(webp)/media/movies/covers/2010/02/ea4dc71d9ea25ca0325e38310413c74a.jpg",
        tags: "terror, baseado em fatos reais, sobrenatural, espíritos, Ed Warren, Lorraine Warren, James Wan, casa assombrada, possessão, anos 70, sustos, suspense, filme de culto, franquia de sucesso, exorcismo, Annabelle"
    },
    {
        titulo: "Corra!",
        descricao: "Uma jovem negra começa a desconfiar de que a família de seu namorado branco esconde segredos sombrios.",
        imdb: "https://www.imdb.com/title/tt5052448/",
        wikipedia: "https://pt.wikipedia.org/wiki/Get_Out",
        imagem: "https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg",
        tags: "terror, suspense, Jordan Peele, crítica social, racismo, mistério, mente humana, sequestro, controle mental, família disfuncional, sustos, filme independente, premiado, inovação, crítica social, paranoia"
    },
    {
        titulo: "Us",
        descricao: "Uma família se depara com cópias do mal de si mesmos durante uma viagem de férias.",
        imdb: "https://www.imdb.com/title/tt6857112/",
        wikipedia: "https://en.wikipedia.org/wiki/Us_(2019_film)",
        imagem: "https://br.web.img3.acsta.net/pictures/19/02/07/14/16/5034340.jpg",
        tags: "terror, suspense, Jordan Peele, doppelgängers, mistério, família, luta pela sobrevivência, crítica social, psicológico, suspense, originalidade, simbolismo, sustos, cinema moderno, thriller"
    },
    {
     
        titulo: "Arachnophobia",
         descricao: "Uma pequena cidade é aterrorizada por uma espécie de aranha venenosa e mortal.",
        imdb: "https://www.imdb.com/title/tt0099052/",
         wikipedia: "https://pt.wikipedia.org/wiki/Arachnophobia_(filme)",
        imagem: "https://m.media-amazon.com/images/M/MV5BMzMzODg5MDk4OV5BMl5BanBnXkFtZTYwNTM0Nzc3._V1_QL75_UY207_CR0,0,140,207_.",
         tags: "terror, horror, aranhas, insetos, natureza, criatura, pânico, medo, suspense, invasão, cientista, campo, cidade pequena, Frank Marshall, Jeff Daniels, Julian Sands, filme de terror dos anos 80"

    },
    {
        titulo: "Baratas Assassinas",
        descricao: "Uma praga de baratas gigantes e mutantes invade uma cidade, aterrorizando os moradores.",
        imdb: "https://www.imdb.com/title/tt0135165/?language=pt-br", 
        wikipedia: "https://en.wikipedia.org/wiki/Bug_Buster", 
        imagem: "https://m.media-amazon.com/images/M/MV5BMTY1ODg3Nzc1NV5BMl5BanBnXkFtZTcwMTEwNjUyMQ@@._V1_.jpg", 
        tags: "terror, horror, baratas, insetos, praga, mutante, invasão, nojo, medo, suspense, cidade, cientista, experimento, criatura"
    },
    {
        titulo: "Ratatouille: Uma Aventura Culinária",
        descricao: "Um rato com um paladar refinado e um sonho de se tornar um chef de cozinha de renome mundial encontra uma chance única de mostrar seu talento em Paris.",
        imdb: "https://www.imdb.com/title/tt0382932/",
        wikipedia: "https://pt.wikipedia.org/wiki/Ratatouille_(filme)#:~:text=Ratatouille%20(bra%3A%20Ratatouille%3B%20prt,tornar%20um%20chef%20de%20cozinha.",
        imagem : "https://upload.wikimedia.org/wikipedia/pt/8/82/Ratatouille_p%C3%B4ster.jpg",
        tags: "animação, culinária, comida, ratos, Paris, chef, sonho, amizade, família, comédia, aventura, Disney, Pixar, fantasia, toque especial"
    }
]