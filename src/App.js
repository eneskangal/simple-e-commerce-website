import React, { Component } from 'react';
import "./app.css"
import Content from './Content';
import Yanmenu from './Yanmenu';
class App extends Component{     
    state = 
    {
        sex: "Erkek",
        tur:"turu secın",
        sort:"secin"
    };
    sex=(e)=>{
        this.setState({sex:e}) 
    }
    tur=(e)=>{
        this.setState({tur:e}) 
    }
    sıralama=(e)=>{
        this.setState({sort:e}) 
    }
    render(){                                             
        return(            
            <div className="container">                                            
                <div className="row">
                    <div className="col-lg-3">                        
                        <Yanmenu cinsiyet={this.sex} tur={this.tur} sıralama={this.sıralama}></Yanmenu>                      
                    </div>
                    <div className="col-lg-9">                        
                        <Content cinsiyet={this.state.sex} tur={this.state.tur} sıralama={this.state.sort}></Content>
                    </div>
                </div>                              
            </div>
        );
    }
}
export default App;