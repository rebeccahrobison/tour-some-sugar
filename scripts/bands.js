import { getBands, getBookings, getBandMembers } from "./database.js"

const bands = getBands()
const bookings = getBookings()
const bandMembers = getBandMembers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === "band") {
            let alertText = ``
            let bandMembersArray = []
            
            for (const bandMember of bandMembers) {
                console.log(clickedItem.dataset.id)
                console.log(bandMember.bandId)
                if (parseInt(clickedItem.dataset.id) === bandMember.bandId) {
                    bandMembersArray.push(bandMember)
                    console.log(bandMembersArray)
                }

            }
            for (const bandMember of bandMembersArray) {
                alertText += `
                ${bandMember.firstName} ${bandMember.lastName} (${bandMember.role})`
            }

            let venuesArray = []
            let venuesCounter = 0
            
            for (const booking of bookings) {

                if (booking.bandName === clickedItem.dataset.name) {
                    venuesArray.push(booking.venueName)
                    venuesCounter++
                }
            }
            


            if (venuesCounter === 0) {
                alertText += `No upcoming shows`
                window.alert(alertText)
            } else if (venuesCounter === 1) {
                alertText += `
                
                Upcoming shows:
                ${venuesArray[0]}`
                window.alert(alertText)
            } else {
                alertText += `
                
                Upcoming Shows:`
                let i = 0
                while (i < venuesArray.length - 1) {
                    alertText += `
                ${venuesArray[i]}, `
                    i++
                }
                alertText += `
                ${venuesArray[i]}`
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
                data-id="${band.id}"
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