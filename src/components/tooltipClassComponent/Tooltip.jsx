import React, { Component } from 'react';
import './styles.css';

const icons = [
    { emoji: '🏠', label: 'Home' },
    { emoji: '📧', label: 'Email' },
    { emoji: '⚙️', label: 'Settings' }
];

class Tooltip extends Component {
    constructor() {
        super();
        this.state ={
            hovered:false,
            label: 'Home'
        };
    }
    onHover=(label)=>{
        this.setState({
            hovered:!this.state.hovered,
            label,
        })
    }
    render() {

        return (
            <div className="tooltip-container">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="tooltip-item"
                        onMouseEnter={()=>this.onHover(icon.label)}
                        onMouseLeave={()=>this.onHover(icon.label)}
                    >
                        <span>{icon.emoji}</span>
                        {this.state.hovered && this.state.label === icon.label&& <div className="tooltip-box">
                            {icon.label}
                        </div>}
                    </div>
                ))}
            </div>
        );
    }
}

export default Tooltip;
