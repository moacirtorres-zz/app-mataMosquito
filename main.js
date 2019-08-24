var altura = 0
var largura = 0
var vidas = 1
var tempo = 16
var criaMosquitoTempo = 1500

// Seleção do nível de dificuldade
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
	
} else if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'muitoDificil') {
	//750
	criaMosquitoTempo = 750
}

// Pegando altura e largura da página e atualizando a medida que o usuário muda
function resize() {

altura = window.innerHeight
largura = window.innerWidth

console.log(largura, altura)

}

resize()

// Criando cronômetro
var cronometro = setInterval(function(){
	tempo = tempo - 1
	document.getElementById('cronometro').innerHTML = tempo
	if (tempo<0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href= 'vitoria.html'
	}
}, 1000)



// Removendo o mosquito após aparecer uma vez

var criaMosquito = setInterval(function() {
if(document.getElementById('mosquito')) {
document.getElementById('mosquito').remove()

// Controlando as vidas caso o usuário não clique no mosquito

if (vidas>3) {
window.location.href = "fim_de_jogo.html"
}
document.getElementById('vida' + vidas).src="imagens/coracao_vazio.png"
vidas++

}

// Posição do Mosquito
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
console.log(posicaoX, posicaoY)

// Criando elemento img do Mosquito
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'

// Tamanho e direção da imagem
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

// Posição do mosquito na tela
mosquito.style.left = posicaoX + "px"
mosquito.style.top = posicaoY + "px"
mosquito.style.position = "absolute"


document.body.appendChild(mosquito)
mosquito.id = 'mosquito'
mosquito.onclick = function() {
this.remove()
}

}, criaMosquitoTempo)

// Função tamanho aleatório

function tamanhoAleatorio() {
var classe = Math.floor(Math.random() * 3)


switch (classe) {
case 0:
return 'mosquito'
case 1:
return 'mosquito2'
case 2:
return'mosquito3'
}
}


// Função lado aleatório
// 
function ladoAleatorio() {
var classe = Math.floor(Math.random() * 2)
switch (classe) {
case 0: 
return 'ladoA'
case 1:
return 'ladoB'
}
}