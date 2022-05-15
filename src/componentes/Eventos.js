import React, {Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }

        this.sumar = this.sumar.bind(this) 
        //En el constructor le estamos declarando al this de la clasee
        //una propiedad llamada sumar, que lo que hace es igualar al metodo
        //sumar que tiene, y a ese metodo le bindea (enlaza) el elemento this
        this.restar = this.restar.bind(this)
    }

    sumar(){ //Tengo que bindear el this de la clase, pues aqui dentro el this da undefined
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(){
        console.log("Restando");
        console.log(this);
        this.setState({contador: this.state.contador - 1})
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}