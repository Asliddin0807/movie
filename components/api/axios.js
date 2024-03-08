import axios from 'axios'

export const apiRequest = async(url, param) => {
    try{
        const options = {
            method: 'GET',
            url: url,
            params: param ? param : {}
        };
        const { data } = await axios.request(options)
        return data
    }catch(err) {
        return err
    }
}

