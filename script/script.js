function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length === 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente.')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') //é a mesma coisa que colocarmos dentro do html <img id='foto'>

       if (fsex[0].checked) {
        genero= 'Homem'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'style/homem_bebe.jpg')
        } else if (idade <21){
           //jovem 
            img.setAttribute('src', 'style/homem_jovem.jpg')
        } else if (idade <50){
            //adulto
            img.setAttribute('src', 'style/homem_adulto.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'style/homem_idoso.jpg')
        }

       } else if (fsex[1].checked) {
        genero= 'Mulher'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'style/mulher_bebe.jpg')
        } else if (idade <21){
           //jovem 
           img.setAttribute('src', 'style/mulher_jovem.jpg')
        } else if (idade <50){
            //adulto
            img.setAttribute('src', 'style/mulher_adulta.jpg')
        }else {
            //idosa
            img.setAttribute('src', 'style/mulher_idosa.jpg')
        }
       }

       res.style.textAlign = 'center' //- Essa linha de código estilisa o html se eu colocar ela, a estilisação só aparecerá após a execução
       res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}

