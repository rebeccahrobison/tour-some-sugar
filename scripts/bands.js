import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === "band") {
            let venuesArray = []
            let venuesCounter = 0
            
            for (const booking of bookings) {

                if (booking.bandName === clickedItem.dataset.name) {
                    venuesArray.push(booking.venueName)
                    venuesCounter++
                }
            }
            
            if (venuesCounter === 0) {
                window.alert(`${clickedItem.dataset.name} isn't playing at any venues`)
            } else if (venuesCounter === 1) {
                window.alert(`${clickedItem.dataset.name} is booked at ${venuesArray[0]}`)
            } else {
                let alertText = `${clickedItem.dataset.name} is booked at `
                let i = 0
                while (i < venuesArray.length - 1) {
                    alertText += `${venuesArray[i]}, `
                    i++
                }
                alertText += `${venuesArray[i]}`
                window.alert(alertText)
            }
        }


    }
)
export const Bands = () => {
    let html = `<ul>`

    for (const band of bands) {
        html += `<li
                data-type="band"
                data-name="${band.name}"
                data-genre="${band.genre}"
                data-year="${band.yearEst}"
                >${band.name}
                </li>`
    }
    html += `</ul>`
    return html
}

// Function to find venue a band is playing at
// const findVenue = (venue) => {
//     let bandVenue = null
//     for (const band of bands) {
//         if (place.bandName === band.name) {
//             bandVenue = ba
//         }

//     }
// }