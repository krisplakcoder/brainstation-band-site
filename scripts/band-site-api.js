
class BandSiteApi {

    constructor(key) {
        this.apiKey = key;
        this.baseUrl = "https://project-1-api.herokuapp.com/"; 
    }

    // postComment(comment) {
        
    // }

    async getComments() {
        const commentList = await axios.get(this.baseUrl + "comments/?api_key=" + this.apiKey);
        return commentList;
    }

    async getShows() {
        const showsList = await axios.get(this.baseUrl + "showdates/?api_key=" + this.apiKey);
        // console.log(showsList);
        return showsList;
    }
}

export default BandSiteApi;