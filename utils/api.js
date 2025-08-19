import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api"
    
   
})

export const getTasks = async () => {
    console.log("llega a gettasks")
    const resp = await axiosInstance.get('/tasks')
    // viene un objeto que tiene el ok y tasks
//    console.log(resp.data.tasks)
  //  console.log(resp.data.tasks[0])
    return resp.data.tasks
}

export const postTasks = async (body) => {
    //console.log("manda post ", body)
    const resp = await axiosInstance.post('/tasks', body)
    //console.log("recibe  ", resp)
    return resp.data
}
