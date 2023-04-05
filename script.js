function verificar(){
//var sex = document.getElementById('sexualidade')
//var sexof = document.getElementsByName('sexo')
var fano = document.getElementById('anoNascimento')
var data = new Date()
var ano = data.getFullYear()
var res = document.getElementById('idade')

if(fano.value == 0 || fano.value > ano){
    window.alert('[erro] olhe novamnete')
}else{
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'homem'
    }else if(fsex[1].checked){
        genero ='mulher'
    }
    res.innerHTML = `idade calculada ${idade} anos e é  ${genero}`
}
}