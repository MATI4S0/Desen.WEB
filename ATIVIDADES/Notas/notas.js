// Elementos HMTL
const listaNotas = document.querySelector('#listaNotas')
const campoNota = document.querySelector('#nota')
const botaoAdicionar = document.querySelector('#btnAdicionar')
const botaoRemoverTudo = document.querySelector('#btnRemoverTudo')

// Carregar Notas
let notas = JSON.parse(
    localStorage.getItem('notas')
)

if (notas == null) {
    notas = []
}

// Adicionar Notas
function adicionarNota() {
    const texto = campoNota.value.trim()

    if (texto == "") {
        alert('Digite alguma coisa!!!')
        return
    }

    const novaNota = {
        texto : texto,
        concluida : false
    }

    notas.push(novaNota)

    localStorage.setItem(
        'notas',
        JSON.stringify(notas)
    )

    campoNota.value = ''

    exibirNotas()
}

// Exibir Notas
function exibirNotas() {
    listaNotas.innerHTML = ''

    if (notas.length == 0) {
        listaNotas.textContent = 'Nenhuma nota cadastrada'
        return
    }

    notas.forEach(function(nota, indice) {
        const item = document.createElement('li')

        // Texto
        const texto = document.createElement('span')
        texto.textContent = nota.texto

        texto.classList.add('texto-nota')

        if (nota.concluida) {
            texto.classList.add('concluida')
        }

        //Botão Remover
        const botaoRemover = document.createElement('button')

        botaoRemover.textContent = 'Remover'
        
        botaoRemover.addEventListener('click', function(){
            removerNota(indice)
        })

        item.appendChild(texto)
        item.appendChild(botaoRemover)
        listaNotas.appendChild(item)
    })
}

// Remover Notas
function removerNota(indice) {
    notas.splice(indice, 1)

    localStorage.setItem(
        "notas",
        JSON.stringify(notas)
    )

    exibirNotas()
}

//Remover Todas as Notas
function removerTudo() {
    notas = []

    localStorage.setItem(
        "notas",
        JSON.stringify(notas)
    )

    exibirNotas()
}


// Eventos
botaoAdicionar.addEventListener('click', adicionarNota)
botaoRemoverTudo.addEventListener('click', removerTudo)

exibirNotas()