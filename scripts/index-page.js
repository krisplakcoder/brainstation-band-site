import BandSiteApi from "./band-site-api.js";

const APIKEY = {"api_key":"786b5d53-7b33-4879-9c76-32d0d5cdb7ef"};

const COMMENTS = new BandSiteApi(APIKEY.api_key);
const commentList = await COMMENTS.getComments();

console.log(commentList.data);

function printComment(obj) {

    let commentSection = document.querySelector('.comments__list');

    let commentEl = document.createElement('div');
    commentEl.classList.add("comments-section");
    commentSection.appendChild(commentEl);

    let imageContainerEl = document.createElement('div');
    imageContainerEl.classList.add("image__container");
    
    let imageEl = document.createElement('div');
    imageEl.classList.add("image");
    imageContainerEl.appendChild(imageEl);
    commentEl.appendChild(imageContainerEl);

    let commentSectionParticulars = document.createElement('div');
    commentSectionParticulars.classList.add('comments-section__details-section');

    let commentSectionDetails = document.createElement('div');
    commentSectionDetails.classList.add("comments-section__details");
    commentEl.appendChild(commentSectionDetails);
    commentSectionDetails.appendChild(commentSectionParticulars);

    let nameEl = document.createElement('div');
    nameEl.classList.add('name');
    let dateEl = document.createElement('div');
    dateEl.classList.add('date');
    
    commentSectionParticulars.appendChild(dateEl);
    commentSectionParticulars.appendChild(nameEl);

    let commentBoxEl = document.createElement('div');
    commentBoxEl.classList.add('comments-box');
    commentSectionDetails.appendChild(commentBoxEl);

    dateEl.innerText = dateConvertor(obj.timestamp);
    nameEl.innerText = obj.name;

    commentBoxEl.innerText = obj.comment;

}

for (let i = 0; i < commentList.data.length; i++) {
    printComment(commentList.data[i]);
}

function dateConvertor(date) {
    let newDate = new Date(date);
    return newDate.toDateString();
}
