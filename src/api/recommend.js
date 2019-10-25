import axios from 'axios'

const getBanner = function(typeId, callback) {
    axios.get(`/banner?type=${typeId}`).then(res =>{
        callback(res)
    }).catch(error => {
        console.log(error)
    })
}


export default getBanner
