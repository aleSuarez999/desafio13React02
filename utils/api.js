import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api"
   
})

export const getTasks = async () => {
    console.log("llega a gettasks")
    const resp = await axiosInstance.get('/tasks')
    /*
        esto no me funciona y no entiendo, ver despues
        .then( (datos) => {
        console.log("datos", datos.data.ok)
        console.log("datos", datos.data.tasks)
        if (datos.data.ok)
        {
            return datos.data.tasks
        }
    })
    .catch((error) => console.error("error", error))
    */
    return resp.data.tasks
        
}

export const postTasks = async (body) => {
    const resp = await axiosInstance.post('/tasks', body)
    return resp.data
}
