import axios from 'axios'

const getMusicSource = function(id, callback) {
    axios.get(`/song/url?id=${id}`).then(res =>{
        callback(res)
    }).catch(error => {
        console.log(error)
    })
}


export default getMusicSource

