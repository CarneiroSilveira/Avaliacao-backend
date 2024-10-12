const CalcService = require("../src/services/calc")

describe("Test funcao somar", () => {
    it("verifica o pegar menu", () => {
        const resultado = CalcService.pegarMenu();
        const menuMock = {
            "menu": "/",
            "soma": "/sum",
            "subtração": "/sub",
            "divisão": "/div",
            "multiplicação": "/mult",
            "potencia": "/pot",
            "raiz-quadrada": "/raiz"
        }
        expect(resultado).toStrictEqual(menuMock)
    })

    
});

describe("Test funcao somar", () => {
    
    it("verifica o somar positivo", () => {
        const resultado = CalcService.soma(1, 2)
        expect(resultado).toBe(3)
    })
    it("Verificar o somar negativo",() => {
        const resultado = CalcService.soma(-2, 3)
        expect(resultado).toBe(1)
    })
});

describe("Test funcao subitração", () => {
    
    it("verifica o subitrair positivo", () => {
        const resultado = CalcService.subtracao(10, 2)
        expect(resultado).toBe(8)
    })
    it("Verificar o subitrair negativo",() => {
        const resultado = CalcService.subtracao(-8, -5)
        expect(resultado).toBe(-3)
    })
});

describe("Test funcao divisão", () => {
    
    it("verifica o divisão positivo", () => {
        const resultado = CalcService.divisao(10, 2)
        expect(resultado).toBe(5)
    })
    it("verifica o divisão negativo",() => {
        const resultado = CalcService.divisao(-2, -2)
        expect(resultado).toBe(1)
    })
});

describe("Test funcao multiplicação", () => {
    
    it("verifica o multiplicação positivo", () => {
        const resultado = CalcService.multiplicacao(10, 2)
        expect(resultado).toBe(20)
    })
    it("verifica o multiplicação negativo",() => {
        const resultado = CalcService.divisao(-7, -7)
        expect(resultado).toBe(1)
    })
});

describe("Test funcao potecialização", () => {
    
    it("verifica o potecializaçãoo positivo", () => {
        const resultado = CalcService.potenciacao(10, 2)
        expect(resultado).toBe(100)
    })
    it("verifica o potecialização negativo",() => {
        const resultado = CalcService.potenciacao(-6, -2)
        expect(resultado).toBe(0.027777777777777776)
    })
});

describe("Test funcao Raiz", () => {
    
    it("verifica o Raiz positivo", () => {
        const resultado = CalcService.potenciacao(2)
        expect(resultado).toBe(100)
    })
    it("verifica o Raiz negativo",() => {
        const resultado = CalcService.potenciacao(-2)
        expect(resultado).toBe(0.027777777777777776)
    })
});