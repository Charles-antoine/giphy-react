import React, { useState } from "react";
import { TweenMax, Power2 } from 'gsap/TweenMax';


class Alert extends React.Component {

    showPopup = () => {
        const target = document.querySelector('.alert');
        target.classList.remove('hide');
        target && TweenMax.to(target,.5,{opacity: 0,delay:.25,ease: Power2.easeInOut, onComplete:() => {
            target.classList.add('hide');
            target.style.opacity = 1;
        }})
    }


    // componentDidUpdate() {
    //     if (this.props.isOpen) {
    //         // showPopup();
    //     }
    // }



    render(){
        return (
            <div>
                <div className="alert hide"><h2>Link copied</h2></div>
            </div>
    
        )}
}


export default Alert;