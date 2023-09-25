import axios from "axios";

export async function getAdminData(){
        const response = axios.post(`http://localhost:5000/admindash`)

        return response;
}