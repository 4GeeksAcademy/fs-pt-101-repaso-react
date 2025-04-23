import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import digiApi from "../services/digiApi"

export const Pagination = () => {

    const { store, dispatch } = useGlobalReducer()
    const [currentPage, setCurrentPage] = useState(store.digimons?.pageable.currentPage)

    const handleClick = (num) => {
        setCurrentPage(num)
        let url = 'https://digi-api.com/api/v1/digimon?pageSize=20&page='+num
        digiApi.nextDigimonList(url).then(data=>dispatch({type: 'get_digimon_list', payload: data})) 
    }

    const tesat = () => {
        console.log(store.digimons?.pageable.totalPages);
        let aux=[]
        for (let i =0; i<store.digimons?.pageable.totalPages; i++) {
            aux.push(i+1) 
        }
        console.log(aux)
        return aux.map(el=> <span className="border border-2 cursor-pointer" onClick={()=>handleClick(el)}>{el}</span>)
    }

    tesat()
    return (
        <>

            {tesat()}

        </>

    )
}