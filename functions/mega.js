export function mega(qtd = 6, numeros = []) {
    if(qtd < 6 || qtd >60 ){
        throw new Error("Quantidade inválida!")
    }

    if(numeros.length === qtd){
        return numeros.sort((n1,n2)=>n1-n2)
    }

    const valor = parseInt(Math.random() * 60 + 1)

    if(numeros.includes(valor)){
        return mega(qtd,numeros)
    }else{
        return mega(qtd,[...numeros,valor])
    }
}

