let siteData = getData();

window.onload = RunScripts();

function RunScripts() {
    updateFooter();
    GenerateContent();
}

function updateFooter() {
    let currentDate = new Date();
    document.getElementById("footerText").innerHTML = `Design & Coding by Arek, Copyright &#169; ${currentDate.getFullYear()}`
}

function switchNavbar() {
    let navbar = document.getElementById("navBar");
    let navbtn = document.getElementById("navbtn");

    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }

    if (navbtn.className === "fa fa-bars") {
        navbtn.className = "fas fa-times";
    } else {
        navbtn.className = "fa fa-bars";
    }
}

function GenerateContent() {
    let eventsInfo = document.getElementById("events");
    let attractionsInfo = document.getElementById("attractions");
    let guesthousesInfo = document.getElementById("guesthouses");
    let hotelsInfo = document.getElementById("hotels");

    if (eventsInfo) {
        GenerateEvents(eventsInfo);
    }
    if (attractionsInfo) {
        GenerateAttractions(attractionsInfo);
    }
    if (guesthousesInfo) {
        GenerateGuesthouses(guesthousesInfo);
    }
    if (hotelsInfo) {
        GenerateHotels(hotelsInfo);
    }
}

function GenerateEvents(target) {
    for (let index = 0; index < siteData.events.length; index++) {
        const element = array[index];
        let name = element.name;
        let description = element.description;
        let date = element.date;
        let venue = element.venue;
        let image = element.image;
        let website = element.website;
        // etc...
        let htmlString = (`
        <div class="card">
            <header>
                <h3>${name}</h3>
            </header>
            <div class="cardContent clearfix">
                <p>${date}</p>
                <p>${venue}</p>
                <hr>
                <img src="images/events/${image}">
                <p>${description}</p><br>
            </div>
            <div>
                <a href="${website}">Visit event website</a>
            </div>
        </div>
        `);
        target.innerHTML += htmlString;
    }
    // siteData.events.forEach(element => {
    //     let name = element.name;
    //     let description = element.description;
    //     let date = element.date;
    //     let venue = element.venue;
    //     let image = element.image;
    //     let website = element.website;
    //     // etc...
    //     let htmlString = (`
    //     <div class="card">
    //         <header>
    //             <h3>${name}</h3>
    //         </header>
    //         <div class="cardContent clearfix">
    //             <p>${date}</p>
    //             <p>${venue}</p>
    //             <hr>
    //             <img src="images/events/${image}">
    //             <p>${description}</p><br>
    //         </div>
    //         <div>
    //             <a href="${website}">Visit event website</a>
    //         </div>
    //     </div>
    //     `);
    //     target.innerHTML += htmlString;

    // });
}

function GenerateGuesthouses(target){

}

function GenerateHotels(target) {
    siteData.stay.hotels.forEach(element => {
        let name = element.name;
        let description = element.description;
        let address = element.address;
        let phone = element.phone;
        let email = element.email;
        let image = element.image;
        let website = element.website;
        let location = element.locaton;
        // etc...
        let htmlString = (`
        <div class="card">
            <header>
                <h3>${name}</h3>
            </header>
            <div class="cardContent clearfix">
                <p>
                <a href="${location}"><i class="fas fa-map-marker-alt"></i>${address}</a> tel:${phone}
                <a href="${website}"><i class="far fa-tv"></i>${website}</a></p>
                <p>
                    <a href="mailto:${email}"><i class="far fa-envelope"></i> ${email}</a>
                </p>
                <hr>
                <img src="images/stay/${image}">
                <p>${description}</p><br>
            </div>
            <div>
                <a href="${website}">Visit event website</a>
            </div>
        </div>
        `);
        target.innerHTML += htmlString;
    });
}

function getData() {
    let data = JSON.parse(`
    {
        "events": [
            {
                "name": "Quarter Block Party",
                "description": "Presented by Makeshift Ensemble and Southern Hospitality Board for the fifth year running, the festival will sprawl through the city's streets and venues with over 50 music, art and theatre performances.",
                "date": "08 Feb - 10 Feb 2019",
                "venue": "Various venues",
                "image": "ev1.png",
                "website": "http://quarterblockparty.com/"
            },
            {
                "name": "Cork French Film Festival",
                "description": "The Cork French Film Festival screens the best in French and international features, documentaries and short films. Our programme includes Irish premières and provides direct access to top international film-makers with Q&A screenings and master classes.",
                "date": "24 Feb - 04 Mar 2019",
                "venue": "Various venues",
                "image": "ev2.jpg",
                "website": "https://www.corkfrenchfilmfestival.com/"
            },
            {
                "name": "Ortus Chamber Music Festival",
                "description": "Come to a superb programme of chamber music in Cork City and County performed by an outstanding line-up of Irish and international musicians - Mairéad Hickey, Patrick Rafter and American William Hagen on violin, Sinéad O'Halloran and Ella van Poucke from the Netherlands on cello, the celebrated Irish pianist Michael McHale, UK violist Timothy Ridout, clarinettist Jessie Grimes and Clare piper Fergal Breen. From much loved Beethoven and Schumann to recent compositions by Irish composers, it is a musical treat on our doorstep not to be missed!",
                "date": "March 1st 2019 Friday – 8pm",
                "venue": "Aula Maxima, University College Cork",
                "image": "ev3.png",
                "website": "http://ortusfestival.ie/"
            },
            {
                "name": "St. Patrick's Day Festival",
                "description": "The 4 day family event, which runs from 17-20 March, will be visual feast with a kaleidoscope of colour and pageantry in celebration of the National holiday. It is expected to attract over 80,000 people to the City over the weekend.",
                "date": "15 Mar - 18 Mar 2019",
                "venue": "Various venues",
                "image": "ev4.jpg",
                "website": "https://www.corkcity.ie/en/cork-st-patrick-s-festival/"
            }
        ],
        "stay": {
            "guesthouses": [
                {
                    "name": "Garnish Guesthouse",
                    "description": "Enjoy your bed & breakfast in our attractive Georgian Guest House right opposite the beautiful grounds of UCC, the University College Cork, ideally located for city shoppers, lovers of nightlife or those who prefer quieter pursuits such as leisurely strolls along the river bank, parks and historic sites of Cork City. Our luxury B&B on Western Road Cork.",
                    "address": "18 Western Rd, Mardyke, Cork",
                    "phone": "+353 21 427 5111",
                    "email": "info@garnish.ie",
                    "website": "http://www.garnish.ie/",
                    "image": "gh1.jpg",
                    "locaton": "https://goo.gl/maps/Yw79aReUhVz"
                },
                {
                    "name": "Redclyffe Guesthouse",
                    "description": "Overlooking Fitzgerald Park, The Redclyffe Guesthouse is opposite University College Cork. Cork city centre is a 10-minute walk and Redclyffe offers free Wi-Fi, free parking and traditional breakfasts.",
                    "address": "1 Western Rd, Mardyke, Cork, T12 D9P8",
                    "phone": "+353 21 427 3220",
                    "email": "info@redclyffe.com",
                    "website": "http://www.redclyffe.com/",
                    "image": "gh2.jpg",
                    "locaton": "https://goo.gl/maps/PhCAjcCGCzA2"
                }
            ],
            "hotels": [
                {
                    "name": "Ambassador Hotel & Health Club Cork",
                    "description": "For anyone wishing to experience the true essence of the wonderful City of Cork, what better hotel to stay than at the elegant newly refurbished Ambassador Hotel & Health Club, Cork. Presiding with an air of grandness from the top of Military Hill in the historic area of St. Luke’s, this is the perfect location for business or leisure in the heart of Cork City.",
                    "address": "Military Hill, St Luke's, Cork",
                    "phone": "+353 21 453 9000",
                    "email": "info@ambassadorhotel.ie",
                    "website": "http://www.ambassadorhotel.ie/",
                    "image": "ho1.jpg",
                    "locaton": "https://goo.gl/maps/uNE3Ngu3z5M2"
                },
                {
                    "name": "Clayton Hotel Cork City",
                    "description": "Clayton Hotel Cork City is Cork's premier 4 Star city centre hotel and is superbly located overlooking Cork's famous River Lee and facing the inspired architecture of City Hall.",
                    "address": "Lapp's Quay, Centre, Cork, T12 RD6E",
                    "phone": "+353 21 422 4900",
                    "email": "res.corkcity@claytonhotels.com",
                    "website": "https://www.claytonhotelcorkcity.com/",
                    "image": "ho2.jpg",
                    "locaton": "https://goo.gl/maps/cuzyyvDfYXE2"
                },
                {
                    "name": "Jurys Inn Cork",
                    "description": "Whether you’re exploring the local sights, visiting for business or catching a ferry from the port, Jurys Inn Cork is ideally located for your stay in this beautiful coastal city. We know the little details matter, and that’s why we have everything from stylish yet comfortable rooms, on-site restaurants, events spaces and more at our hotel in Cork.",
                    "address": "Anderson's Quay, Cork, T12 DCR9",
                    "phone": "+353 21 494 3000",
                    "email": "jurysinncork@jurysinns.com",
                    "website": "https://www.jurysinns.com/hotels/cork",
                    "image": "ho3.jpg",
                    "locaton": "https://goo.gl/maps/Vsbc4WuLr5B2"
                }
            ]
        }
    }
    `);
    console.log(data);
    return data;
}
