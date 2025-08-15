import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1/',
    timeout: 10000, //Moi mot request gui den server se co 1 timeout nhat dinh neu qua 10 giay tra ra loi
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient

