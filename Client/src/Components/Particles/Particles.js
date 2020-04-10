
import React from 'react';
import "./Particles.css"

import Particles from 'react-particles-js';

const Particle = () => {

  



return (
  <div>
     <Particles className ='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 300,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
              "out_mode": "out",
              "speed": "10"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
  </div>
)
}
export default Particle;
