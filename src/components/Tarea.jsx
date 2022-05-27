import { formatearFecha } from "../helpers/fornatearFecha"
import useProyectos from "../hooks/useProyectos"
import useAdmin from "../hooks/useAdmin"

const Tarea = ({tarea}) => {

    const {handleModalEditarTarea, handleModalEliminarTarea,completarTarea} = useProyectos()
    const {nombre, descripcion, prioridad, fechaEntrega, estado, _id} = tarea

    const admin = useAdmin()
  return (
    <div className="border-b p-4 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        {estado && <p className="text-white uppercase bg-green-500 rounded-lg p-1 text-xs ">Completado por: {tarea.completado.nombre}</p>}
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {admin && (
        <button
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
          onClick={() => handleModalEditarTarea(tarea)}
        >
          Editar
        </button>
        )}
          <button
          className= {`${ estado ?  'bg-sky-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
          onClick={() => completarTarea(_id)}
        >
          {estado ? 'Completa' : 'Incompleta'}
        </button>
        

        {admin && (
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
          onClick={() => handleModalEliminarTarea(tarea)}
        >
          Eliminar
        </button>
        )}
      </div>

    </div>
  )
}

export default Tarea