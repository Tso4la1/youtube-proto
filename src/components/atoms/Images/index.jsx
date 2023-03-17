import React from 'react';
import logo from '../../../assets/img/channels4_profile.jpg';


export const Images = (props) =>{
    if (props.name === "image") {
        return (
            <img src = {logo} alt = "picture" {...props} /> 
      )
    
    }
}
