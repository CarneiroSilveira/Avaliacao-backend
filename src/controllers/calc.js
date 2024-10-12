const calc = require("../services/calc");

class CalcController{
    servirMenu(req, res){
        try{
            const menu = calc.pegarMenu();
            return res.status(200).send(menu)
        } catch(e){
            return res.status(400).send({ error: `Erro ao enviar menu: ${e.message}` });
        }
    }
    sum(req, res){
        try{
            const { numero1, numero2 } = req.body
            const soma = calc.soma(numero1, numero2);
            return res.status(200).send(soma);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }
    div(req, res){
        try{
            const { numero1, numero2 } = req.body
            const div = calc.divisao(numero1, numero2);
            return res.status(200).send(div);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }

    pot(req, res){
        try{
            const { numero1, numero2 } = req.body
            const pot = calc.potenciacao(numero1, numero2);
            return res.status(200).send(pot);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }

    raiz(req, res){
        try{
            const { numero1 } = req.body
            const raiz = calc.raiz(numero1);
            return res.status(200).send(raiz);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }

    sub(req, res){
        try{
            const { numero1, numero2 } = req.body
            const sub = calc.subtracao(numero1, numero2);
            return res.status(200).send(sub);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }

    mult(req, res){
        try{
            const { numero1, numero2 } = req.body
            const mult = calc.multiplicacao(numero1, numero2);
            return res.status(200).send(mult);
        } catch(e){
            return res.status(400).send({ error: `Erro ao realizar calculo: ${e.message}` });
        }
    }
}

module.exports = new CalcController()