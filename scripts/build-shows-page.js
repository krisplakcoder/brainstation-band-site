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
const minScreen = window.matchMedia('(min-width: 787px)');
let newList = document.getElementById("show__listings");

// printShow(showSchedule, screen.width);

minScreen.addEventListener('change', printShow(showSchedule, screen.width));

function printShow (array, x) {

    if (x < 787) {


        for (i = 0; i < array.length; i++) {

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
            paraSecondLine.innerText = array[i].date;

            let paraThirdLine = document.createElement('p');
            paraThirdLine.classList.add("shows__details", "shows__title");
            newListItem.appendChild(paraThirdLine);
            paraThirdLine.innerText = "VENUE";

            let paraFourthLine = document.createElement('p');
            paraFourthLine.classList.add('shows__details');
            newListItem.appendChild(paraFourthLine);
            paraFourthLine.innerText = array[i].venue;

            let paraFifthLine = document.createElement('p');
            paraFifthLine.classList.add("shows__details", "shows__title");
            newListItem.appendChild(paraFifthLine);
            paraFifthLine.innerText = "LOCATION";

            let paraSixthLine = document.createElement('p');
            paraSixthLine.classList.add('shows__details');
            newListItem.appendChild(paraSixthLine);
            paraSixthLine.innerText = array[i].location;

            const showButton = document.createElement('button')
            showButton.classList.add('shows__button');
            newListItem.appendChild(showButton);
            showButton.innerText = "Buy Tickets";
        }
    } else {
            let newListItem = document.createElement('li');
            newListItem.classList.add('shows__category');
            newList.appendChild(newListItem);

            let paraFirstLine = document.createElement('p');
            paraFirstLine.classList.add("shows__details", "shows__title");
            newListItem.appendChild(paraFirstLine);
            paraFirstLine.innerText = "DATE";

            let paraThirdLine = document.createElement('p');
            paraThirdLine.classList.add("shows__details", "shows__title");
            newListItem.appendChild(paraThirdLine);
            paraThirdLine.innerText = "VENUE";

            let paraFifthLine = document.createElement('p');
            paraFifthLine.classList.add("shows__details", "shows__title");
            newListItem.appendChild(paraFifthLine);
            paraFifthLine.innerText = "LOCATION";

            for (i = 0; i < array.length; i++) {

                let newListItem = document.createElement('li');
                newListItem.classList.add('shows__details', 'shows--border', 'shows__list');
                newList.appendChild(newListItem);

                let paraSecondLine = document.createElement('p');
                paraSecondLine.classList.add('shows__details', 'shows--bold');
                newListItem.appendChild(paraSecondLine);
                paraSecondLine.innerText = array[i].date;

    
                let paraFourthLine = document.createElement('p');
                paraFourthLine.classList.add('shows__details');
                newListItem.appendChild(paraFourthLine);
                paraFourthLine.innerText = array[i].venue;

                let paraSixthLine = document.createElement('p');
                paraSixthLine.classList.add('shows__details');
                newListItem.appendChild(paraSixthLine);
                paraSixthLine.innerText = array[i].location;

                const showButton = document.createElement('button')
                showButton.classList.add('shows__button');
                newListItem.appendChild(showButton);
                showButton.innerText = "Buy Tickets";
            }

        }

    }

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



