import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import './App.css'
import { fetchData} from './api'
import header from './images/header.jpg'

import Particle from './Components/Particles/Particles'
 
import ReactTypingEffect from 'react-typing-effect';




class App extends  React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData})
  

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country: country})
  }

  
  render() {
    const {data, country} =this.state;
    return (
     <div className= "container">
        <ReactTypingEffect className="staysafe" text='Stay Safe, Stay at Home' />
          
       
       <Particle />
       <img className="image" src={header} alt='COVID-19' />
      
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Cards data= {data} />
       <Chart data ={data} country={country} />
      
     </div>  
    )
  }
}

export default App;
