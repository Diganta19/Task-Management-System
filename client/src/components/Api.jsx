import axios from "axios";

export async function getData(id){
        const response = axios.post(`http://localhost:5000/todos/${id}`)

        return response;
}