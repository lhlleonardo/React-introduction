import React, { Component } from 'react';

import TechItem from "./TechItem";

class TechList extends Component{
    state = {
        newTech: '',
        techs: [
            'NodeJS',
            'ReactJS',
            'React' 
        ]
    };

    // Executs on shows components
    componentDidMount(){
        const techs = localStorage.getItem('techs');

        if (techs){
            this.setState({ techs: JSON.parse(techs) });
        }

    };

    // Executs in ever alterations on properties and states 
    componentDidUpdate(_, prevState){
        if (prevState.techs != this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    };

    // Executs on delete components
    componentWillUnmount(){

    };

    handleInputChance = e => {
        this.setState({ newTech: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        //console.log(this.state.newTech);

        this.setState({ techs: [... this.state.techs, this.state.newTech],
                        newTech: ''})
    };

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t != tech) })
    };

    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <ul>
                {this.state.techs.map(tech =>  <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>)}
                </ul>
                <input 
                    type='text'
                    onChange={ this.handleInputChance } 
                    value={ this.state.newTech }
                />
                <button type='submit'>Enviar</button>
            </form>
        );
    };
};

export default TechList;