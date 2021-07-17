import Cards from "./Cards"
import Celebridades from '../../helpers/usuarios'

const ListCards = () => {


    return (

        <div className="container">
            <div className="row">
                {Celebridades.map(user => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                        <Cards user={user}/>
                    </div>))
                }
            </div>
        </div>
    )
}

export default ListCards
