import React from 'react';
import Iframe from 'react-iframe';
import Widget3 from './Widget3';

class Widget4 extends React.Component{

    render(){

        return(
            <Iframe
              scrolling="no" 
              frameborder="0" 
              allowTransparency="true" 
              size="small"
              src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=EF5466&layout=&size=medium&type=playlist&id=3621673922&app_id=1" 
              width="200" 
              height="200">

            </Iframe>
        )
    }
}
export default Widget4;