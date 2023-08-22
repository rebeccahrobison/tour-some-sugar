import { getVenues, getBookings } from "./database.js"

const venues = getVenues()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === "venues") {
            let bandsArray = []
            let bandCounter = 0
            
            for (const booking of bookings) {

                if (booking.venueName === clickedItem.dataset.name) {
                    bandsArray.push(booking.bandName)
                    bandCounter++
                }
            }
            
            if (bandCounter === 0) {
                window.alert(`There are no bands booked to the venue`)
             }
            if (bandCounter === 1) {
                window.alert(`${booking.bandName} is booked to the venue`)
            } else {
                let alertText = ``
                let i = 0
                while (i < bandsArray.length - 1) {
                    alertText += `${bandsArray[i]}, `
                    i++
                }
                alertText += `and ${bandsArray[i]} are booked to the venue`
                window.alert(alertText)
            }
            
            
            
            // window.alert("")
        }
    }
)

export const Venues = () => {
    let html = `<ul>`

    for (const venue of venues) {
        html += `<li 
            data-type="venues"
            data-name="${venue.name}"
            data-sqft="${venue.sqft}"
            data-maxOccupancy="${venue.maxOccupancy}"
            >${venue.name}
            </li>
            `
    }
    html += `<ul>`
    return html
}