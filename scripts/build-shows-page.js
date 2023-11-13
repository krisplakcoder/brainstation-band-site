const showSchedule = [
    {
    date: "Mon Sep 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"},

    {
        date: "Tue Sep 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }

]

// <ul class="shows__list">
//             <li class="shows__details">
//                 <p><span class= "shows--title">Date</span></p>
//                 <p><span class = "shows--bold">Mon Sep 06 2021</span></p>
//                 <p><span class= "shows--title">Venue</span></p>
//                 <p>Ronald Lane</p>
//                 <p><span class= "shows--title">Location</span></p>
//                 <p>San Francisco, CA</p>
//                 <button class="shows__button">BUY TICKETS</button>
//             </li>
//         </ul>

let newList = document.getElementById("show__listings");

for (i = 0; i < showSchedule.length; i++) {

    let newListItem = document.createElement('li');
    newListItem.classList.add('shows__details', 'shows--border', 'shows__list');
    newList.appendChild(newListItem);


    let paraFirstLine = document.createElement('p');
    paraFirstLine.classList.add("shows__details", "shows__title");
    newListItem.appendChild(paraFirstLine);
    paraFirstLine.innerText = "DATE";

    let paraSecondLine = document.createElement('p');
    paraSecondLine.classList.add('shows__details', 'shows--bold');
    newListItem.appendChild(paraSecondLine);
    paraSecondLine.innerText = showSchedule[i].date;

    let paraThirdLine = document.createElement('p');
    paraThirdLine.classList.add("shows__details", "shows__title");
    newListItem.appendChild(paraThirdLine);
    paraThirdLine.innerText = "VENUE";

    let paraFourthLine = document.createElement('p');
    paraFourthLine.classList.add('shows__details');
    newListItem.appendChild(paraFourthLine);
    paraFourthLine.innerText = showSchedule[i].venue;


    let paraFifthLine = document.createElement('p');
    paraFifthLine.classList.add("shows__details", "shows__title");
    newListItem.appendChild(paraFifthLine);
    paraFifthLine.innerText = "LOCATION";

    let paraSixthLine = document.createElement('p');
    paraSixthLine.classList.add('shows__details');
    newListItem.appendChild(paraSixthLine);
    paraSixthLine.innerText = showSchedule[i].location;

    const showButton = document.createElement('button')
    showButton.classList.add('shows__button');
    newListItem.appendChild(showButton);
    showButton.innerText = "Buy Tickets";
}

const buttons = document.getElementsByTagName('button');

const buttonPressed = e => {
    
    for (i = 0; i < buttons.length; i++){
        if (buttons[i] === e.target) {
            if (buttons[i].parentElement.style.backgroundColor === "#e1e1e1") { buttons[i].parentElement.style.backgroundColor = "white";}
            else {buttons[i].parentElement.style.backgroundColor = "#e1e1e1";}
        } else {buttons[i].parentElement.style.backgroundColor = "white";}
        // if (buttons[i].parentElement.style.backgroundColor === "white") {
        //     e.target.parentElement.style.backgroundColor = "#e1e1e1"; }
        // else {e.target.parentElement.style.backgroundColor = "white";}
    }
}

for (let button of buttons) {
    button.addEventListener('click', buttonPressed);
}

// btn[0].addEventListener('click', () => {
//     btn[0].parentElement.style.backgroundColor = "#e1e1e1";
// })

// btn[1].addEventListener('click', () => {
//     btn[1].parentElement.style.backgroundColor = "#e1e1e1";
// })

// btn[2].addEventListener('click', () => {
//     btn[2].parentElement.style.backgroundColor = "#e1e1e1";
// })

// btn[3].addEventListener('click', () => {
//     btn[3].parentElement.style.backgroundColor = "#e1e1e1";
// })

// btn[4].addEventListener('click', () => {
//     btn[4].parentElement.style.backgroundColor = "#e1e1e1";
// })

// btn[5].addEventListener('click', () => {
//     btn[5].parentElement.style.backgroundColor = "#e1e1e1";
// })



// btn[indexButton].addEventListener('click', () => {

//     if (btn[indexButton].parentElement.style.backgroundColor = "#e1e1e1") {
//         for (i = 0; i < btn.length && i != indexButton; i++) {
//             btn[i].parentElement.style.backgroundColor = "white";
//         }
//     } else {btn[i].parentElement.style.backgroundColor = "e1e1e1";
//             indexButton = i;}
// })