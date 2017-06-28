import React, { Component } from 'react';

class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleOn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if(!this.state.toggleOn){
            var isToggleOn = "on"
        }else{
            var isToggleOn = "off"
        }

        this.setState({
            toggleOn: !this.state.toggleOn
        })
    }

    render(){
        if(this.state.toggleOn){
            var isToggleOn = "On"
            var btnClass = "btn btn-success"
        }else{
            var isToggleOn = "Off"
            var btnClass = "btn btn-danger"
        }
        return(
            <div className="col-sm-12">
                <span>I AM: </span><button onClick={this.handleClick} className={btnClass}>{isToggleOn}</button>
            </div>
        )
    }
}

export default Toggle;