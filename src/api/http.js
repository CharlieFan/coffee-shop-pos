import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

function processData(data = {}) {
    return JSON.stringify(data)
}

const get = function (url, query) {
    return myAxios.get(url, {
        params: query
    }).then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
        throw err
    })
}

const post = function (url, data) {
    return myAxios.post(url, processData(data))
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const put = function (url, data) {
    return myAxios.put(url, processData(data))
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

// Delete only for demo. Ideally not to operate DB directly.
const apiDelete = function(url) {
    return myAxios.delete(url).then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
        throw err
    })
}
export {
    get,
    post,
    put,
    apiDelete
}
