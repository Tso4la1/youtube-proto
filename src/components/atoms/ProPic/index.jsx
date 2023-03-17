import React from 'react';
import pics from '../../../assets/img/pix/unnamed.jpg';
import pics2 from '../../../assets/img/pix/profilew.jpg';


export const ProPic = (props) => {
    if (props.pro === "first") {
        return (
            <img src={pics} width="35px" alt="pic1" className='Br2' />
        )
    }

    if (props.pro === "second") {
        return (
            <img src={pics2} alt="pic2" width="35px" className='Br2'/>
        )
    }
}
