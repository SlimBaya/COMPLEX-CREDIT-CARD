import React,{Component} from 'react';
import CreditCard from "./CreditCard.js";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {holderName:'********',
                  cardNumber:'****************',
                  validThru:'****' }
  }
  changeName=(e)=>{
    this.setState({holderName:e.target.value})
  }
  changeNumber=(e)=>{
    this.setState({cardNumber:e.target.value})
  }
  ValidThru=(e)=>{
    this.setState({validThru:e.target.value})
  }

  render() { 
    return ( 
      <div>
    
      <input type='text' maxLength='20' placeholder='Holder Name' onChange={this.changeName}/>
      <input type='text' maxLength='16' placeholder='Card Number' onChange={this.changeNumber}/>
      <input type='text' maxLength='4' placeholder='Card Number' onChange={this.ValidThru}/>

      <CreditCard
          holderName={this.state.holderName}
          cardNumber={this.state.cardNumber}
          validThru={this.state.validThru} />

  </div>
     );
  }
}
 

export default App;