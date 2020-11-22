import React from 'react';
import Calendar from 'react-calendar';

class Widget1 extends React.Component {
    /// no Constructor


    /// Methode Render
    render() {
        return (
            <div>
                <h1 style={{ color: 'white' }}> My Calendar </h1>
                <Calendar

                />
            </div>
        );
    }

}

export default Widget1;