const database = {
    bands: [{
        id: 1,
        name: "Scheherazade",
        members: 3,
        genre: "Classical Punk",
        yearEst: 1990
    }, {
        id: 2,
        name: "Bananas in Pajamas",
        members: 2,
        genre: "Pop",
        yearEst: 2001
    }, {
        id: 3,
        name: "Trouble with Tribbles",
        members: 2,
        genre: "Space LoFi",
        yearEst: 2005
    }, {
        id: 4,
        name: "Monkey House",
        members: 4,
        genre: "Alternative",
        yearEst: 1999
    }, {
        id: 5,
        name: "Sherlock",
        members: 4,
        genre: "Dubstep",
        yearEst: 2010
    }, {
        id: 6,
        name: "Sequence Diagram",
        members: 1,
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
    }],
    bandMembers: [{
        id: 1,
        firstName: "A",
        lastName: "B",
        yearBorn: 1980,
        role: "lead singer",
        bandId: 1
    }, {
        id: 2,
        firstName: "C",
        lastName: "D",
        yearBorn: 1981,
        role: "guitar",
        bandId: 1
    }, {
        id: 3,
        firstName: "E",
        lastName: "F",
        yearBorn: 1982,
        role: "piano",
        bandId: 1
    }, {
        id: 4,
        firstName: "G",
        lastName: "H",
        yearBorn: 1983,
        role: "glockenspiel",
        bandId: 2
    }, {
        id: 5,
        firstName: "I",
        lastName: "J",
        yearBorn: 1984,
        role: "triangle",
        bandId: 2
    }, {
        id: 6,
        firstName: "K",
        lastName: "L",
        yearBorn: 1985,
        role: "theramin",
        bandId: 3
    }, {
        id: 7,
        firstName: "M",
        lastName: "N",
        yearBorn: 1986,
        role: "lead singer",
        bandId: 3
    }, {
        id: 8,
        firstName: "O",
        lastName: "P",
        yearBorn: 1987,
        role: "bass guitar",
        bandId: 4
    }, {
        id: 9,
        firstName: "Q",
        lastName: "R",
        yearBorn: 1988,
        role: "lead singer",
        bandId: 4
    }, {
        id: 10,
        firstName: "S",
        lastName: "T",
        yearBorn: 1989,
        role: "guitar",
        bandId: 4
    }, {
        id: 11,
        firstName: "U",
        lastName: "V",
        yearBorn: 1990,
        role: "drummer",
        bandId: 4
    }, {
        id: 12,
        firstName: "W",
        lastName: "X",
        yearBorn: 1991,
        role: "lead singer",
        bandId: 5
    }, {
        id: 13,
        firstName: "Y",
        lastName: "Z",
        yearBorn: 1992,
        role: "keyboard",
        bandId: 5
    }, {
        id: 14,
        firstName: "Aa",
        lastName: "Bb",
        yearBorn: 1993,
        role: "guitar",
        bandId: 5
    }, {
        id: 15,
        firstName: "Cc",
        lastName: "Dd",
        yearBorn: 1994,
        role: "bass guitar",
        bandId: 5
    }, {
        id: 16,
        firstName: "Ee",
        lastName: "Ff",
        yearBorn: 1995,
        role: "penny whistle",
        bandId: 6
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

export const getBandMembers = () => {
    return database.bandMembers.map(bandMember => ({...bandMember}))
}