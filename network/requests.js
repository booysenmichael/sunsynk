const axios = require('axios');
const url = "Thiswillnbetheurlforsunsynkendpoint";

//Let's setup a axios client
const request = axios.create({
    baseURL:url
})

const getInfo = async ()=>{
    const response = await request.get();
    return response
}

module.exports = {
    getInfo
}