
const Cards = ({user}) => {
    const {name, login, picture}=user
    return (

        <div className="card">
            <img src={picture.large} className="card-img-top" alt={login.username}/>
            <div className="card-body">
                <h5 className="card-title">{name.first} {name.last}</h5>
                <a href="#" className="btn btn-primary">Segir</a>
            </div>
        </div>
    )
}

export default Cards
