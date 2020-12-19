import React from 'react';
import preloader from '../../../assets/images/spinner2.svg'


let Preloader = (props) => {
    return <div style={{height: '100%'}}>
        <img src={preloader} alt="" />
    </div>
}
export default Preloader;