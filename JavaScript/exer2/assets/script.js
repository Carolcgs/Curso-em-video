
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
  //  var hora = 13  para testear
    msg.innerHTML = `Agora são ${hora} horas.`
   


    if(hora >= 0 && hora < 12){
        img.src = 'assets/img/cafe.png'
        document.body.style.background ='#aad6c8c5'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'assets/img/tarde.png'
        document.body.style.background ='#fdcda9' 

    }else{
        img.src = 'assets/img/n.png'
        document.body.style.background ='#171431'
    }


}
