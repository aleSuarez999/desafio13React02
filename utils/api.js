import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api"
    
   
})

export const getTasks = async () => {
    console.log("llega a gettasks")
    const resp = await axiosInstance.get('/tasks')
    return resp.data
}

export const postTasks = async (body) => {
    console.log("manda post ", body)
    const resp = await axiosInstance.post('/tasks', body)
    console.log("recibe  ", resp)
    return resp.data
}
