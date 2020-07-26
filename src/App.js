import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCalendar from 'react-google-calendar-api';


export default class App extends React.Component {
  state={
    signedIn: false //track of auth token
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
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.signedIn ? <button onClick={this.getEvents}>Click to see calendar in console!</button><img src={logo} className="App-logo" alt="logo" />}
          <p>
          <code>testing google calendar api</code>
          </p>
          <button name= "Sign In" onClick = {(e)=> this.handleClick(e.target)}>Click to sign in to Google</button>
          <button name= "Sign Out" onClick = {(e)=> this.handleClick(e.target)}>Click to sign out of Google</button>
        </header>
      </div>
    );

  }
}