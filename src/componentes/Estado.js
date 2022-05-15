import React from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends React.Component{
    constructor(props){
        super(props);
        this.state = {//Aqui estamos creando el objeto del estado
            contador:0 // estado
        };

        // setInterval(()=>{
        //     this.setState({
        //         contador: this.state.contador +1
        //     })
        // }, 1000)
    }
    render(){//Cada vez que el estado se modifica se vuelve a ejecutar el pintado de jsx
        return (// que se traduce en un elemento del dom que se vuelve a redibujar
            <div>
                <h2>El state</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}