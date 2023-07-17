
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import useRequest from "../hooks/useRequest";

const MainPage = () => {

    const {error,loading,response,resendRequest} = useFetch({url:'/api/v1/Todolist', method: 'GET'})
    const {sendRequest} = useRequest({method:'DELETE'})


    const taskList1 = response?.items?.map(t => {
      return {
        task: t.task,
        id: t._uuid,
        firstName: t.firstName,
        lastName:t.lastName,
        deadline: t.deadline
      };
    }) || [];

    const handleDelete = (taskId) => {
      sendRequest(null, `api/v1/todolist/${taskId}`)
      .then(() => resendRequest())
    }
    
     if(loading) return <p>loading . . .</p>
     if(error) return <p>{error}</p>
    return <div>
    
      {taskList1.map((task) => (
        <div key={task.id} style={{border: '1px solid grey'}}>
          <p>task: {task.task}</p>
          <p>name: {task.firstName}</p>
          <p>lastName: {task.lastName}</p>
          <p>deadline: {task.deadline}</p>
          <button onClick={() => handleDelete(task.id)}>complate</button>
          <Link to={`/edit/${task.id}`}>edit</Link>
        </div>
      ))}
    </div>
}

export default MainPage