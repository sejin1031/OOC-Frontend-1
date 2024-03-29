import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from "container/menu/MenuContainer";
import MainContainer from "container/main/MainContainer";
import BookRouter from "route/BookRouter";
import Ticket from "container/ticket/Ticket";
class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      token:"",
      isLoggedin:false,
      cinema: "선택 전",
      movieId: -1,
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      screen: 0,
      seat: [],
    }
    this.tokenHandler = this.tokenHandler.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.cinemaHandler = this.cinemaHandler.bind(this);
    this.movieIdHandler = this.movieIdHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.screenHandler = this.screenHandler.bind(this);
    this.seatHandler = this.seatHandler.bind(this);
    this.initializeState = this.initializeState.bind(this);
  }
  tokenHandler(){
    this.setState({token:"asdf"});
  }
  dateHandler = e => {
    this.setState({ date: e });
  };
  cinemaHandler = e => {
    this.setState({ cinema: e });
  };
  movieIdHandler = e => {
    this.setState({ movieId: e });
  };
  movieHandler = e => {
    this.setState({ movie: e });
  };
  timeHandler = e => {
    this.setState({ time: e.time , screen: e.screen});
  };
  screenHandler = e => {
    this.setState({ screen: e });
  };
  seatHandler = e => {
    console.log(e);
    let newSeat = this.state.seat;
    if (newSeat.includes(e)) {
      newSeat.splice(newSeat.indexOf(e), 1);
      console.log(newSeat);
    } else {
      newSeat.push(e);
      this.setState({ seat: newSeat });
    }
  };
  initializeState(){
    this.setState({
      cinema: "선택 전",
      movieId: -1,
      movie: "선택 전",
      date: "선택 전",
      time: "선택 전",
      screen: 0,
      seat: [],
    });
  }
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <MenuContainer token = {this.state.token} tokenHandler={this.tokenHandler}/>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route path="/book" component={
              ()=><BookRouter 
              tokenHandler={this.tokenHandler}
              dateHandler={this.dateHandler}
              cinemaHandler={this.cinemaHandler}
              movieIdHandler={this.movieIdHandler}
              movieHandler={this.movieHandler}
              timeHandler={this.timeHandler}
              screenHandler={this.screenHandler}
              seatHandler={this.seatHandler}
              token={this.state.token}
              cinema={this.state.cinema}
              movieId={this.state.movieId}
              movie={this.state.movie}
              date={this.state.date}
              seat={this.state.seat}
              time={this.state.time}
              screen={this.state.screen}
              initializeState={this.initializeState}
              />} />
            <Route path="/ticket" component={()=><Ticket token={this.state.token}/>}/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;
