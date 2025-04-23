import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { DigiCard } from "../components/digiCard.jsx";
import { Pagination } from "../components/pagination.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
		<Pagination/>
			<ul>
				<li>conectar con api</li>
				<ol>
					<li>crear servicios</li>
					<li>consumir servicios</li>
					<li>pasar respuesta de la api al store</li>
				</ol>
				<li>generar componentes para la informacion</li>
				<li>mapeamos la informacion del store</li>
				<li>generar funcionalidad</li>
			</ul>
			<div className="row">

				{store.digimons?.content.map(el => <DigiCard key={el.id} name={el.name} image={el.image} did={el.id} />)}
			</div>



		</div>
	);
}; 