import React from 'react';
import preloader from '../../../assets/images/spinner2.svg'


let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt="" />
    </div>
}
export default Preloader;