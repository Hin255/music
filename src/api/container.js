import axios from 'axios'

const getMusiclistByIndex = function(index, callback) {
    axios.get(`/top/list?idx=${index}`).then(res => {
        callback(res)
    }).catch(error => {
        console.log(error)
    })
}

export default getMusiclistByIndex
