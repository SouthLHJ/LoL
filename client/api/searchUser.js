class SearchUserApi {
    constructor(baseURL) {
        this.baseURL=baseURL;
        this.getOption = {
            method : "get"
        }
        this.postOption = {
            method : "post",
            headers : {
                'content-type': 'application/json'
            }
        }
    }

    async find(user){
        const res = await fetch(this.baseURL+"/user"+`?user=${user}`,{
            ...this.getOption,
        });
        const json = await res.json();
        return json;
    }
}

export default SearchUserApi;