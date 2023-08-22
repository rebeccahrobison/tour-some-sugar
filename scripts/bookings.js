import { getBookings, getBands } from "./database.js"

const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === "bookings") {

            for (const band of bands) {
                if (clickedItem.dataset.bandname === band.name) {
                window.alert(`
                    ${band.name}
                    ${band.genre}
                    Formed in ${band.yearEst}
                    ${band.members} band members`)
                }
                
                
            }
        }
            
    }
)

export const Bookings = () => {
    let html = `<ul>`

    for (const booking of bookings) {
        html += `<li 
            data-type="bookings"
            data-bandname="${booking.bandName}"
            data-date="${booking.bookingDate}"
            data-venuename="${booking.venueName}"
            >${booking.bandName} are playing at ${booking.venueName} on ${booking.date}
            </li>
            `
    }
    html += `<ul>`
    return html
}