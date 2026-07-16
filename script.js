
        function enviarWhats(event) {
            event.preventDefault()
            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5591985553738'

            const texto = `Olá, me chamo ${nome}, ${mensagem}`
            const msgformatada = encodeURIComponent(texto)

            const url = `https://wa.me/${telefone}/?text=${msgformatada}`

            window.open(url, '_blank')
        }

   