import React from 'react';

export default function DateTimePretty (DateTime) {
    return class extends React.Component {
        render() {
            const dateNow = new Date();
            const dateVideo = new Date(this.props.date);
            const range = dateNow.getTime() - dateVideo.getTime();

            console.log(range);

            let componentDate;

            if (range < 3600000) {
            componentDate = `${Math.ceil(range/ (60 * 1000))} минут назад`;
            } else if (range < 86400000) {
            componentDate = `${Math.ceil(range/ (60 * 60 * 1000))} часов назад`;
            } else {
            componentDate = `${Math.ceil(range/ (24 * 60 * 60 * 1000))} дней назад`;
            }

            return <DateTime date={componentDate}/>  
        }  
    }
}
