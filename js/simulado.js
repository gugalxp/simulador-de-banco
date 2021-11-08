function verify() {

    var sacar = window.document.getElementById('saque')
    var res = window.document.getElementById('res')
    var ver = sacar.value

    // Validação das condições do valor ser múltiplo de 5 e não aceitar o formulário nulo.
    if (ver == 0) {

        alert(`Você sacou zero reais. Tente novamente digitando um numero acima de zero!.`)

    } else {

        if (ver % 5 == 0) {
            var alerta = (`Você está sacando ${ver} reais. Clique em ok para sacar!`)
            window.alert(alerta)

        } else {

            alert('Não foi possivel efetuar o saque. Digite algum valor numérico múltiplo de 5!')
            Headers('Location: index.html')

        }
    }


    // condição que coloca a maior nota como a principal a ser tirada idependente do valor do saque.


    while (ver >= 100) {

        document.write('<img src="img/cem.png" style="width: 200px;" height="100px">')
        ver = (ver - 100)


    }


    while (ver >= 50) {

        document.write('<img src="img/cinquenta.png" style="width: 200px;" height="100px">')
        ver = ver - 50
    }

    while (ver >= 20) {

        document.write('<img src="img/vinte.png" style="width: 200px;" height="100px">')
        ver = ver - 20

    }

    while (ver >= 10) {

        document.write('<img src="img/dez.png" style="width: 200px;" height="100px">')
        ver = ver - 10
    }

    while (ver >= 5) {

        document.write('<img src="img/cinco.png" style="width: 200px;" height="100px">')
        ver = ver - 5
    }



}