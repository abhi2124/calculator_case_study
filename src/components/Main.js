
import React, { Component } from 'react';
import '../styles/main.css';
import Screen from '../components/Screen';
import Button from '../components/Button';
class Main extends Component{
    constructor(){
        super();
        this.state={
            input:'',
            output:''
        }
        this.handleClick = this.handleClick.bind(this);
        }
     render(){
            return(
        <div>
                    <div>
                    <Screen input={this.state.input} output={this.state.output}/>
                    </div>
                    <div className="flexContainer">
                    <div className="button">
                        
                        <Button label={'1'} handleClick={this.handleClick} type='input' />
                        <Button label={'2'} handleClick={this.handleClick} type='input' />
                        <Button label={'3'} handleClick={this.handleClick} type='input' />
                    </div>
                     <div className="button">    
                        <Button label={'4'} handleClick={this.handleClick} type='input' />
                        <Button label={'5'} handleClick={this.handleClick} type='action' />
                        <Button label={'6'} handleClick={this.handleClick} type='action' />
                    </div>
                     <div className="button">
                        <Button label={'7'} handleClick={this.handleClick} type='input' />
                        <Button label={'8'} handleClick={this.handleClick} type='input' />
                        <Button label={'9'} handleClick={this.handleClick} type='input' />
                     </div>
                     <div className="button">   
                        <Button label={'-'} handleClick={this.handleClick} type='input' />
                        <Button label={'+'} handleClick={this.handleClick} type='action' />
                        <Button label={'/'} handleClick={this.handleClick} type='action' />
                     </div>
                      <div className="button">
                        <Button label={'*'} handleClick={this.handleClick} type='input' />
                        <Button label={'.'} handleClick={this.handleClick} type='input' />
                        <Button label={'0'} handleClick={this.handleClick} type='input' />
                     </div>
                     <div className="button">   
                        <Button label={'Cls'} handleClick={this.handleClick} type='action' />
                        <Button label={'='} handleClick={this.handleClick} type='action' />
                    </div>
                    </div>
      </div> 

            );
}

    handleClick(event){
        const value = event.target.value; 
        
        switch (value) {
        case '=': { 
            const output = eval(this.state.input).toString();
            this.setState({ output });
            break;
        }
        case 'Cls': {
            this.setState({ input: '', output: '' });
            break;
        }
        default: {
            this.setState({ input: this.state.input += value})
            break;
        }
        }
    }

}

export default Main;