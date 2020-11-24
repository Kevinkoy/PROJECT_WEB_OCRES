import React from 'react';
import './Widget7.css';


class Widget7 extends React.Component {

    render() {
        
        return (
            <article class="horloge">
                <div class="heures-container">
                    <div class="heures"></div>
                </div>
                <div class="minute-container">
                    <div class="minutes"></div>
                </div>
                <div class="secondes-container">
                    <div class="secondes"></div>
                </div>
            </article>
        )
    }

}
export default Widget7;