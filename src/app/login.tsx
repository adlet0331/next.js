'use client'

import { Component, useState } from "react";

export default class LoginForm extends Component{
    state = {
        inputId : ""
    }

    handleIdChanged = () => {
        this.setState({
            id: this.state.inputId
        })
    }

    render(){

        return(
            <>
                <label htmlFor="input_id">ID: </label>
                <input type="text" name="input_id" value={this.state.inputId} onChange={this.handleIdChanged}/>
            </>
        )
    }
}