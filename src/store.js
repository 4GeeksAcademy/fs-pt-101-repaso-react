export const initialStore=()=>{
  return{
    message: null,
    digimonId: null,
    digimon: null,
    digimons: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'new_digimon':
      return {
        ...store,
        digimonId: action.payload
      }
    case 'get_digimon_single':
      // console.log('valor de objeto action al llamar get digimon single ---> ',action)
      return{
        ...store,
        digimon: action.payload
      }
    case 'get_digimon_list':
      // console.log('valor de objeto action al llamar get digimon list ---> ',action)
      return{
        ...store, 
        digimons: action.payload
      }
    case 'add_task':
      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
