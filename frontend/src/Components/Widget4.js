import React from 'react';
import Iframe from 'react-iframe';

class Widget4 extends React.Component {

    render() {
        const url = "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=EF5466&layout=&size=medium&type=playlist&id=8441097202&app_id=1"
        return (
            <Iframe
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                size="small"
                src={url}
                width="200"
                height="200">

            </Iframe>
        )
    }
}
export default Widget4;