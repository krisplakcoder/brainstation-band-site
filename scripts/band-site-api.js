
class BandSiteApi {

    constructor(key) {
        this.apiKey = key;
        this.baseUrl = "https://project-1-api.herokuapp.com/"; 
    }

    async postComment(obj) {
        
            try {
                const response = await axios.post(
                    this.baseUrl + "comments/?api_key=" + this.apiKey,
                    obj
                ); console.log(response.data);
            } catch (error) {console.error(error)}
        
    }

    async getComments() {
        const commentList = await axios.get(this.baseUrl + "comments/?api_key=" + this.apiKey);
        return commentList;
    }

    async getShows() {
        const showsList = await axios.get(this.baseUrl + "showdates/?api_key=" + this.apiKey);
        return showsList;
    }
}

export default BandSiteApi;