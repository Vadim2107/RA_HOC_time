import { UpgradedDate } from './DateTimePretty';

export default function Video(props) {
    return (
        <div className="video">
            <iframe title="title" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            <UpgradedDate date={props.date} />
        </div>
    )
}
