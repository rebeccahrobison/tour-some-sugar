import { getBookings } from "./database.js"

const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {

    }
)

export const Bookings = () => {
    let html = `<ul>`

    for (const booking of bookings) {
        html += `<li 
            data-type="bookings"
            data-bandName="${booking.bandName}
            data-date="${booking.bookingDate}
            data-venueName="${booking.venueName}"
            >${booking.bandName} are playing at ${booking.venueName} on ${booking.date}
            </li>
            `
    }
    html += `<ul>`
    return html
}