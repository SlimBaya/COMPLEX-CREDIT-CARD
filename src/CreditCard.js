import React,{Component} from 'react';


const renderCardNumber = number => {

    number = number.toString()
    let resultStr = ''
    for(let i =0; i < number.length; i += 4) {
      resultStr += number.slice(i, i + 4) + ' '
    }
    return resultStr.trim()
}

  const renderValidThru = thru => {
    thru = thru.toString()
     return thru.slice(0, 2) + '/' + thru.slice(2)
  }

  class CreditCard extends Component {
     
      render() { 
          return ( 
   
  <div className="cardList">
            <h1 className="cardTitle">  CREDIT CARD  </h1> <br/>
            <h3 className="cardNumber">  {renderCardNumber(this.props.cardNumber)} </h3>
            <h4 className="ValidThru">  {renderValidThru(this.props.validThru)} </h4>
            <h2 className="holderName">  {this.props.holderName.toUpperCase()} </h2>
            <img className="cardLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/langfr-280px-Mastercard-logo.svg.png"/>
    </div>
          )
      }}
  export default CreditCard;
