
const URL = "https://v1.jinrishici.com/all.json"
export const getPoetry =() =>

    fetch(URL).then(response =>
        response.json()
    ).then(response => {
        console.log(response)
        let {origin, author, content} = response;
        let [...data] = [origin, author, content];
        return data
    })
