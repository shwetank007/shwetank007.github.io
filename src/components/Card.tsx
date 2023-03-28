
interface Props {
    title?: string;
    text?: string;
    image?: string;
    url?: string;
}

export default function Card(props: Props) {

    const handleClick = () => {
        if (props.url) {
            window.open(props.url, "_blank");
        } else {
            console.log("No URL provided")
            return
        }
    }

    return (
        <div className="card bg-secondary" onClick={handleClick}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-desc px-sm-3 px-2">
                <h5 className="card-title text-center text-white mb-2">{props.title}</h5>
                <p className="card-text text-white text-center">{props.text}</p>
            </div>
            <div className="card-body">
                <h5 className="card-title fs-3 text-center text-white">{props.title}</h5>
            </div>
        </div>
    );
}