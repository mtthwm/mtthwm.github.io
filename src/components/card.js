const Card = (props) => {
    return (
        <div className="card">
            {props.card ? 
            <div className="card-title">
                {props.card}
            </div>
            :null}
            <div className="card-body">

            </div>
        </div>
    )
}

export default Card;