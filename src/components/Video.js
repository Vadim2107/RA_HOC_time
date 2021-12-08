import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';

export default function Video(props) {
    const Logger = DateTimePretty(DateTime);
    console.log(props.date);

    return (
        <div className="video">
            <iframe title="title" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            <Logger date={props.date} />
        </div>
    )
}
