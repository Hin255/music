import axios from 'axios'

const getMusicMenu = function(callback) {
    axios.get('/toplist').then(res =>{
        callback(res)
    }).catch(error => {
        console.log(error)
    })
}


export default getMusicMenu

