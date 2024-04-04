function calcular() {
    let ini =  window.document.getElementById('verificar').value
    let final = window.document.getElementById('fim').value
    let  passo = window.document.getElementById('passos').value
    let res = window.document.getElementById('res')
  //crie tres objetos com entrada de um valor (não convertido para numeros) para poder fazer os calculos


    if  (ini.length == 0 || final.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossivel contar'
    } else { 
        res.innerHTML = 'contando'
        let i = Number(ini.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if( p <= 0) {
            window.alert('impossivel contar! considerando passo 1')
            p = 1;
        }
        if( i < f ) {
        // contagem crescente
        for ( let c = i; c <= f;c += p ) {
            res.innerHTML = `${c}`
        }} else {
            // contagem decrescente
            for( let c = i; c >= f; c -= p) {
                res.innerHTML= ` ${c} u\{1f449} ` 
            }}
            

        }}