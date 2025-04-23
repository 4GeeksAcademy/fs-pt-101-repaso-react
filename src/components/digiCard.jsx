import { Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const DigiCard = props => {
    const {store, dispatch} = useGlobalReducer()
    const navigate = useNavigate()

    const handleNavigate = () =>{
        dispatch({type: 'new_digimon', payload: props.did})
        navigate('/details/'+props.did)
    }

    const obj = {
        name: 'pepe'
    }

    obj.city='sevilla'

    return (

        <article className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top" src={props.image} alt={props.name} />
                <h3>{props.name}</h3>
                <button className="btn btn-primary" onClick={handleNavigate}>Learn more!</button>
            </div>
        </article>
    )
}