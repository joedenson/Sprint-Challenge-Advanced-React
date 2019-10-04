import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';

class App extends React.Component {
constructor(){
  super();
  this.state = {
players: []
  }
}


componentDidMount(){
  axios.get('http://localhost:5000/api/players')
  .then(res=>{
    console.log(res.data)
    this.setState({
      players: res.data
    })
  })
  .catch(err => console.log(err));
}




render(){



  return (
    <div className="App">
      <Navbar />
      
      <div className='players'>
      <h2 className='top-100'>Top 100 Players:</h2>
      {this.state.players.map(player=> (
        <div key={player.id} player={player.name} className='player'>{player.name}</div>
      ))}
      
      </div>
    </div>
  );
}
}

export default App;
