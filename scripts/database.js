const database = {
    bands: [{
        name: "Scheherazade",
        members: 3,
        genre: "Classical Punk",
        yearEst: 1990
    }, {
        name: "Bananas in Pajamas",
        members: 5,
        genre: "Pop",
        yearEst: 2001
    }, {
        name: "Trouble with Tribbles",
        members: 2,
        genre: "Space LoFi",
        yearEst: 2005
    }, {
        name: "Monkey House",
        members: 4,
        genre: "Alternative",
        yearEst: 1999
    }, {
        name: "Sherlock",
        members: 4,
        genre: "Dubstep",
        yearEst: 2010
    }, {
        name: "Sequence Diagram",
        members: 26,
        genre: "Esoterica",
        yearEst: 2000
    }],
    venues: [{
        name: "The Outhouse",
        address: "523 Roberts St",
        sqft: 2000,
        maxOccupancy: 50
    }, {
        name: "Thunderdome",
        address: "9222 Veranda Dr",
        sqft: 3500,
        maxOccupancy: 82
    }, {
        name: "The Hobbit Hole",
        address: "423 Baggins Ln",
        sqft: 2200,
        maxOccupancy: 55
    }, {
        name: "Yellow Submarine",
        address: "12 Pennylane",
        sqft: 5000,
        maxOccupancy: 100
    }],
    bookings: [{
        bandName: "Trouble with Tribbles",
        venueName: "Yellow Submarine",
        date: "8/25/2023"
    }, {    
        bandName: "Monkey House",
        venueName: "Thunderdome",
        date: "8/25/2023"
    }, {
        bandName: "Bananas in Pajamas",
        venueName: "The Outhouse",
        date: "8/25/2023"
    }, {
        bandName: "Scheherazade",
        venueName: "The Hobbit Hole",
        date: "8/25/2023"     
    }, {
        bandName: "Scheherazade",
        venueName: "The Outhouse",
        date: "8/25/2023"        
    }, {
        bandName: "Monkey House",
        venueName: "Yellow Submarine",
        date: "8/26/2023"        
    }, {
        bandName: "Trouble with Tribbles",
        venueName: "The Outhouse",
        date: "8/26/2023"        
    }, {
        bandName: "Sherlock",
        venueName: "The Hobbit Hole",
        date: "8/27/2023"        
    }, {
        bandName: "Scheherazade",
        venueName: "Yellow Submarine",
        date: "8/27/2023"       
    }, {
        bandName: "Sequence Diagram",
        venueName: "Thunderdome",
        date: "8/27/2023"     
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}