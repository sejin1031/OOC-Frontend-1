import React, { Component } from 'react'
import './Payment.scss';

export default class Payment extends Component {
  constructor(props){
    super(props);
    this.state={
      price:0,
      disrate:1,
      discount:0,
    }
  }
  componentDidMount(){
    var hour = this.props.time.substring(0,2);
    var price = (hour >= 22 || hour < 6 ?7000:(hour >= 6 && hour < 10 ? 8000 : 10000))
    this.setState({price:this.props.seat.length * price})
  }
  render() {
    return (
      <div className="paymentcontent">
        <div className="dc content">
          <div className="title">할인</div>
          <div className="paycontent">
            할인내용
          </div>
        </div>
        <div className="payment content">
          <div className="title">결제수단</div>
          <div className="paycontent">
            결제수단내용
          </div>
        </div>
        <div className="ticketinfo content">
          <div className="title">티켓정보</div>
          <div className="paycontent">
            <ul>
            <li>{this.props.cinema}</li><br/>
            <li>{this.props.date}</li><br/>
            <li>{this.props.movie}</li><br/>
            <li>{this.props.seat}</li><br/>
            <li>{this.props.time}</li><br/>
            <li>{this.state.price}</li>
            </ul>
          </div>
          <div className="paybutton">결제하기!</div>
        </div>
      </div>
    )
  }
}
