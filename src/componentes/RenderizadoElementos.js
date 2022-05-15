import React from "react";
import data from '../Utils/data.json';

function ElementoLista(props){
    return(
        <li>
            <a 
              href={props.el.web}
              target="blank"> 
                {props.el.name}
            </a>
        </li>
    )
}

export default class RenderizadoElementos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h3>Renderizado de Elementos</h3>
                <h4>Estaciones del año</h4>
                <ol>
                    {this.state.seasons.map(el => <li key={el}>{el}</li>)}
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {data.frameworks.map(el =><ElementoLista key={el.id} el={el}/> )}
                </ul>
            </div>
        )
    }
}