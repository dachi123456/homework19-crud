import { useNavigate } from "react-router-dom";
import TodoForm from "../components/todoForm"
import useRequest from "../hooks/useRequest";

const CreatePage = () => {
    const {loading,sendRequest} = useRequest({url:'/api/v1/Todolist',method: 'POST'})
    const navigate = useNavigate()

    const onFormSubmit = (task,firstName,lastName,deadLine) => {
        sendRequest([{task,firstName,lastName,deadLine}])
        .then(() => navigate('/'))
      };

    return(
        <div>
            
            <TodoForm onFormSubmit={onFormSubmit}/>
        </div>
    )

}

export default CreatePage