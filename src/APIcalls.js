export function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(data => {
        console.log(data, 'DATA <><><><')
        return data;
    })
    .catch(err => {
        console.log(err, 'ERR <<><><><')
        throw err;
    })
}