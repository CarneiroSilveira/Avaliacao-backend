class CalcService{
     pegarMenu(){
        const Menu = {
            "menu": "/",
            "soma": "/sum",
            "subtração": "/sub",
            "divisão": "/div",
            "multiplicação": "/mult",
            "potencia": "/pot",
            "raiz-quadrada": "/raiz"
        }
        return Menu
    }

     soma(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0 || num2.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return num1 + num2;
    }

     subtracao(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0 || num2.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return num1 - num2;
    }

     divisao(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0 || num2.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return num1 / num2;
    }

     multiplicacao(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0 || num2.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return num1 * num2;
    }

     potenciacao(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0 || num2.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return num1 ** num2;
    }

     raiz(num1){
        if(isNaN(num1)){
            throw new Error("Envie um numero por favor");
        }
        if(num1.lenth === 0){
            throw new Error("Enviar os dois numeros é obrigatorio");
        }
        return Math.sqrt(num1);
    }
}

module.exports = new CalcService()