import { Bookings } from "./bookings.js"
import { Venues } from "./venues.js"
import { Bands } from "./bands.js"

const bookings = Bookings()
const venues = Venues()
const bands = Bands()

let bookingsParentHTMLElement = document.querySelector(".bookings")
bookingsParentHTMLElement.innerHTML = bookings

let venuesParentHTMLElement = document.querySelector(".venues")
venuesParentHTMLElement.innerHTML = venues

let bandsParentHTMLElement = document.querySelector(".bands")
bandsParentHTMLElement.innerHTML = bands