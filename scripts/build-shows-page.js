const showSchedule = [{date: "Mon Sept 06 2021", venue:"Ronald Lane", location: "San Francisco, CA"},
    {date:"Tue Sep 21 2021", venue: "Pier 3 East", location: "San Francisco, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge",location: "San Francisco, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency",location: "San Francisco, CA"},
    {date:"Fri Nov 26 2021", venue: "Moscow Center",location: "San Francisco, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club",location: "San Francisco, CA"}
];

const APIKEY = {"api_key":"786b5d53-7b33-4879-9c76-32d0d5cdb7ef"};

const labels = ["DATE","VENUE", "LOCATION"];

const showContainerTag = document.querySelector(".shows");

// A function that prints for column

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

    for (i = 0; i < labels.length; i++) {
        ulTag.appendChild(printScheduleLabel(labels[i]));
    }

    for (j = 0; j < showSchedule.length; j++) {
        
        let ulTag = document.createElement('ul');
        ulTag.classList.add("shows-schedule");
        showContainerTag.appendChild(ulTag);

        ulTag.appendChild(printListDataBold(showSchedule[j].date));
        ulTag.appendChild(printListData(showSchedule[j].venue));
        ulTag.appendChild(printListData(showSchedule[j].location));
        ulTag.appendChild(printButton());


    }
}

function printScheduleMobile() {

    // const labels = ["DATA","VENUE", "LOCATION"];
    printShow();

    for (j = 0; j < showSchedule.length; j++) {

        let ulTag = document.createElement('ul');
        ulTag.classList.add("shows-schedule");
        showContainerTag.appendChild(ulTag);

        for (i = 0; i < labels.length; i++) {

            ulTag.appendChild(printScheduleLabel(labels[i]));

            if (labels[i] === 'DATE') {
                ulTag.appendChild(printListDataBold(showSchedule[j].date));
            } else if (labels[i] === 'VENUE') {
                ulTag.appendChild(printListData(showSchedule[j].venue));

            } else if (labels[i] === 'LOCATION') {
                ulTag.appendChild(printListData(showSchedule[j].location));
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
            // document.body.style.backgroundColor = "purple";
            printScheduleMobile();
        } else {
            showsTag.innerHTML = " ";
            // document.body.style.backgroundColor = 'red';
            printScheduleTablet();
        }
    }

    watchScreenSize.addEventListener('change', listenScreenSize)
    listenScreenSize(watchScreenSize)


}


runShowSchedule();

const buttons = document.getElementsByTagName('button');

const buttonPressed = e => {
    
    for (i = 0; i < buttons.length; i++){
        if (buttons[i] === e.target) {
            if (buttons[i].parentElement.style.backgroundColor === "gainsboro") { buttons[i].parentElement.style.backgroundColor = "white";}
            else {buttons[i].parentElement.style.backgroundColor = "gainsboro";}
        } else {buttons[i].parentElement.style.backgroundColor = "white";}
    }
}

for (let button of buttons) {
    button.addEventListener('click', buttonPressed);
}
