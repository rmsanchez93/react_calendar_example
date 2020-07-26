import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCalendar from 'react-google-calendar-api';

//import components we built
import EventsContainer from './EventsContainer'


export default class App extends React.Component {
  state={
    signedIn: false, //track of auth token
    events: [] //array to hold events from GoogleCalendar
  }

  handleClick=(target)=>{

    if(target.name == 'Sign In'){
      console.log('signing into google');
      ApiCalendar.handleAuthClick();
      this.setState({
        signedIn:true
      })
    }
    else if(target.name == 'Sign Out'){
      console.log('signing outta google');
      ApiCalendar.handleSignoutClick();
    }
    else{
      alert('wtf this shouldnt run, something wrong')
    }

  }

  getEvents = () => {
    console.log('get events')
    if (ApiCalendar.sign)
    ApiCalendar.listUpcomingEvents(10)
      .then(({result}) => {
        console.log(result.items);
        this.setState({
          events: result.items
        })
      });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.signedIn ? <button onClick={this.getEvents}>Click to see calendar in console!</button> : <img src={logo} className="App-logo" alt="logo" />}
          <p>
          <code>testing google calendar api</code>
          </p>
          <div>
      <br/>
          {this.state.events.length > 0 ? <EventsContainer events={this.state.events}/> : <h1>No events, please sign in</h1>}
      <br/>
          </div>
          <button name= "Sign In" onClick = {(e)=> this.handleClick(e.target)}>Click to sign in to Google</button>
          <button name= "Sign Out" onClick = {(e)=> this.handleClick(e.target)}>Click to sign out of Google</button>
        </header>
      </div>
    );

  }
}