//funcão para manter a barra de rolagem sempre embaixo
//a função sempre é chamada quando enviar uma mensagem
function scroll() {
    let setScroll = document.getElementById('txt')
    setScroll.scrollTop = setScroll.scrollHeight
}

//função para enviar a mensagem e acionar as outras funções 
//dependendo da resposta do cliente
function enviarMsm() {
    document.getElementById('btn').addEventListener('click', enviar)

    function enviar() {
        const text = document.getElementById('content').value
        
        const novoEnvio = document.createElement('p')
        novoEnvio.classList.add('cliente')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(text)
        novoEnvio.appendChild(novoTxt)

        if(text == 1 || text == 2) {
            firstOption()

        }else if(text > 4 && text < 11) {
        getPedido()

        } else {
            const novoEnvio = document.createElement('p')
            const divPai = document.getElementById('txt')
            divPai.appendChild(novoEnvio)
            const novoTxt = document.createTextNode(`Número inváido!`)
            novoEnvio.appendChild(novoTxt)
        }

        scroll()

        //limpa o campo apos o envio
        document.getElementById('content').value = ''
    }
}
enviarMsm()

//auto mensagem para o cliente assim que entrar no site
//foi usado o setTime para fazer uma ordem de chegada de mensagem
function msmAuto() {

    setTimeout(() => {
        const hora = new Date()
        let horaAtual = hora.getHours()

        if(horaAtual >= 0 && horaAtual <= 11) {
            const novoEnvio = document.createElement('p')
            const divPai = document.getElementById('txt')
            divPai.appendChild(novoEnvio)
            const novoTxt = document.createTextNode('Bom Dia!')
            novoEnvio.appendChild(novoTxt)

        }else if(horaAtual >= 12 && horaAtual <= 17 ) {
            const novoEnvio = document.createElement('p')
            const divPai = document.getElementById('txt')
            divPai.appendChild(novoEnvio)
            const novoTxt = document.createTextNode('Boa Tarde!')
            novoEnvio.appendChild(novoTxt)

        }else {
            const novoEnvio = document.createElement('p')
            const divPai = document.getElementById('txt')
            divPai.appendChild(novoEnvio)
            const novoTxt = document.createTextNode('Boa Noite!')
            novoEnvio.appendChild(novoTxt)
        }


    },1000)

    setTimeout(() => {

        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode('Como posso te ajudar?')
        novoEnvio.appendChild(novoTxt)
    },2000)

    setTimeout(() => {

        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode('1- Cardápio')
        novoEnvio.appendChild(novoTxt)
    },2500)

    setTimeout(() => {

        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode('2- Cancelar')
        novoEnvio.appendChild(novoTxt)
    },2500)
}
msmAuto()

//add os sabores das pizzas a variaveis
const frango = '6- pizza sabor Frango c/ Catupiry'
const moda = '7- pizza sabor à Moda'
const lombo = '8- pizza sabor Lombinho'
const calabresa = '9- pizza sabor Calabresa'
const chefe = '10- pizza do Chefe'

function firstOption() {

    const text = document.getElementById('content').value

    if(text == 1) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Selecione uma opção:\n${frango}\n${moda}\n${lombo}\n${calabresa}\n${chefe}`)
        novoEnvio.appendChild(novoTxt)
    }

    if(text == 2) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode('Obrigado pela preferencia e volte sempre!')
        novoEnvio.appendChild(novoTxt)
    }
}


function getPedido() {
    const text = document.getElementById('content').value

    if(text == 6) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Você escolheu a pizza ${frango}. Seu pedido está sendo preparado`)
        novoEnvio.appendChild(novoTxt)
    }
    if(text == 7) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Você escolheu a ${moda}. Seu pedido está sendo preparado`)
        novoEnvio.appendChild(novoTxt)
    }
    if(text == 8) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Você escolheu a ${lombo}. Seu pedido está sendo preparado`)
        novoEnvio.appendChild(novoTxt)
    }
    if(text == 9) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Você escolheu a ${calabresa}. Seu pedido está sendo preparado`)
        novoEnvio.appendChild(novoTxt)

    }
    if(text == 10) {
        const novoEnvio = document.createElement('p')
        const divPai = document.getElementById('txt')
        divPai.appendChild(novoEnvio)
        const novoTxt = document.createTextNode(`Você escolheu a ${chefe}. Seu pedido está sendo preparado`)
        novoEnvio.appendChild(novoTxt)
    }

   var timePedido =  setInterval(() => {
        time()
    }, 1000);
    

}


let m = 39
let s = 59
function time() {
    let rest = s -= 1

    document.getElementById('time').style.display = 'block'

    if(rest < 1) {
        m -=1
        s += 59
    }
    if(m < 0) {
        document.getElementById('time').style.display = 'none'
    }
    
    formatoS = (rest <10 ? `0${rest}` : rest)
    formatoM = m < 10 ? `0${m}` : m

    let formatoTotal = `${formatoM}:${formatoS} minutos`
    document.getElementById('time').innerHTML = `Seu pedido saído em <br> ${formatoTotal}`
}