function verificar() {
    var data = new Date()
    var ano = data.getFullYear()//ano atual com quatro dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //criando imagem dinamicamente
        var img = document.createElement('img')
        img.setAttribute('id','foto')//criando identificador para o elemento img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) { //condições para escolher a foto
                //criança
               img.setAttribute('src','assets/imag/menino.png')
            }  else if (idade < 21) {
                //jovem
                img.setAttribute('src','assets/imag/rapaz.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','assets/imag/homem.png')
            } else {
                //idoso
                img.setAttribute('src','assets/imag/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             //condições para escolher a foto
             if (idade >= 0 && idade < 12) { //condições para escolher a foto
                //criança
               img.setAttribute('src','assets/imag/menina.png')
            }  else if (idade < 21) {
                //jovem
                img.setAttribute('src','assets/imag/moça.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','assets/imag/mulher.png')
            } else {
                //idoso
                img.setAttribute('src','assets/imag/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}