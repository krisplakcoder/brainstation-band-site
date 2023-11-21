import BandSiteApi from "./band-site-api.js";
const APIKEY = {"api_key":"786b5d53-7b33-4879-9c76-32d0d5cdb7ef"};

const newShows = new BandSiteApi(APIKEY.api_key);
const newShowSchedule = await newShows.getShows();



const labels = ["DATE","VENUE", "LOCATION"];
const showContainerTag = document.querySelector(".shows");


function printShow() {

    let showTag = document.createElement('h1');
    showTag.classList.add("shows__heading");
    showTag.innerText = "Shows";
    showContainerTag.appendChild(showTag);
}

function printScheduleLabel (label) {

    let labelTag = document.createElement('li');
    labelTag.classList.add("shows__label");
    labelTag.innerText = label;
    return labelTag;
}


function printListDataBold (arrayIndex) {
    let dataTag = document.createElement('li');
    dataTag.classList.add("shows__detail", "shows__detail--bold");
    dataTag.innerText = arrayIndex;
    return dataTag;
}

function printListData (arrayIndex) {

    let dataTag = document.createElement('li');
    dataTag.classList.add("shows__detail");
    dataTag.innerText = arrayIndex;
    return dataTag;
}

function printButton() {
    let btn = document.createElement('button')
    btn.classList.add('cta-shows');
    btn.innerText = "Buy Tickets";
    return btn;
}

function printScheduleTablet() {

    printShow();

    let ulTag = document.createElement('ul');
    ulTag.classList.add("shows-schedule", "shows-schedule--flex");
    showContainerTag.appendChild(ulTag);

    for (let i = 0; i < labels.length; i++) {
        ulTag.appendChild(printScheduleLabel(labels[i]));
    }

    for (let j = 0; j < newShowSchedule.data.length; j++) {
        
        let ulTag = document.createElement('ul');
        ulTag.classList.add("shows-schedule");
        showContainerTag.appendChild(ulTag);

        ulTag.appendChild(printListDataBold(dateConvertor(newShowSchedule.data[j].date)));
        ulTag.appendChild(printListData(newShowSchedule.data[j].place));
        ulTag.appendChild(printListData(newShowSchedule.data[j].location));
        ulTag.appendChild(printButton());


    }
}

function printScheduleMobile() {

    printShow();

    for (let j = 0; j < newShowSchedule.data.length; j++) {

        let ulTag = document.createElement('ul');
        ulTag.classList.add("shows-schedule");
        showContainerTag.appendChild(ulTag);

        for (let i = 0; i < labels.length; i++) {

            ulTag.appendChild(printScheduleLabel(labels[i]));

            if (labels[i] === 'DATE') {
                ulTag.appendChild(printListDataBold(dateConvertor(newShowSchedule.data[j].date)));
            } else if (labels[i] === 'VENUE') {
                ulTag.appendChild(printListData(newShowSchedule.data[j].place));

            } else if (labels[i] === 'LOCATION') {
                ulTag.appendChild(printListData(newShowSchedule.data[j].location));
            }
            
        }
        ulTag.appendChild(printButton());
    }

}


const runShowSchedule = () => {
    let watchScreenSize = window.matchMedia('(max-width: 767px)');
    let showsTag = document.querySelector(".shows");


    const listenScreenSize = query => {
        

        if (query.matches) {
            showsTag.innerHTML = " ";
            printScheduleMobile();
        } else {
            showsTag.innerHTML = " ";
            printScheduleTablet();
        }
    }

    watchScreenSize.addEventListener('change', listenScreenSize);
    listenScreenSize(watchScreenSize);

}


runShowSchedule();

const buttons = document.getElementsByTagName('button');

const buttonPressed = e => {
    
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i] === e.target) {
            if (buttons[i].parentElement.style.backgroundColor === "gainsboro") { buttons[i].parentElement.style.backgroundColor = "white";}
            else {buttons[i].parentElement.style.backgroundColor = "gainsboro";}
        } else {buttons[i].parentElement.style.backgroundColor = "white";}
    }
}

for (let button of buttons) {
    button.addEventListener('click', buttonPressed);
}

function dateConvertor(date) {
    let newDate = new Date(date);
    return newDate.toDateString();
}

