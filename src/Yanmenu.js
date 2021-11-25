import React, { Component } from 'react';
import "./app.css"

class Yanmenu extends Component{             
    render() {       
        return (
            <div>
                <div id="yanmenu">                                                       
                    <select onChange={e =>this.props.cinsiyet(e.target.value)}>
                        <option>cinsiyet secin</option>
                        <option>Erkek</option>
                        <option>Kadın</option>                        
                    </select>
                    <select onChange={e =>this.props.tur(e.target.value)}>
                        <option>turu secın</option>
                        <option>T-shirt</option>
                        <option>Kot</option> 
                        <option>Mont</option>  
                        <option>Ic camasır</option>                         
                    </select>
                    <select onChange={e =>this.props.sıralama(e.target.value)}>
                        <option>secin</option>
                        <option>Azalanda Yuksege</option>
                        <option>Yuksekten Azalana</option>                                                
                    </select>                    
                </div>                               
            </div>
        );
    }
}

export default Yanmenu;