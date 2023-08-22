import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {

    }
)

// Function to find venue a band is playing at
// const findVenue = (venue) => {
//     let bandVenue = null
//     for (const band of bands) {
//         if (place.bandName === band.name) {
//             bandVenue = ba
//         }

//     }
// }

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