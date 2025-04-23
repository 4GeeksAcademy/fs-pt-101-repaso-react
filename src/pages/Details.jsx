import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import digiApi from "../services/digiApi"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { DigiCard } from "../components/digiCard"

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const params = useParams() // utilizando el objeto
    const [lang, setLang] = useState('en')
    console.log(params)
    //const { id } = useParams() // desestructuracion del objeto

    useEffect(() => {
        digiApi.getDigimon(params.id).then(data => dispatch({ type: 'get_digimon_single', payload: data }))
    }, [store.digimonId])


    const handleLang = () => {
        setLang(lang == 'jp' ? 'en' : 'jp')
    }

    return (

        <div className="container">
            <h3>{store.digimon?.name} - {store.digimon?.types[0].type}</h3>
            <h4>{store.digimon?.releaseDate}</h4>
            <img src={store.digimon?.images[0].href} alt={store.digimon?.name} />
            <div>
                <button onClick={handleLang}>{lang == 'jp' ? 'en' : 'jp'}</button>
                <p>
                    {store.digimon?.descriptions[lang == 'jp' ? 0 : 1].description}
                </p>
            </div>
            <h4>skills</h4>
            <ul>
                {store.digimon?.skills.map(el => <li key={el.id}>{el.skill}</li>)}
            </ul>

            <div className="row">
                {store.digimon?.nextEvolutions.map(el => <DigiCard key={el.id} name={el.digimon} image={el.image} did={el.id} />)}
            </div>
            <p>se muestre la info del digimon con el id que aparece en el url </p>
        </div>
    )
}