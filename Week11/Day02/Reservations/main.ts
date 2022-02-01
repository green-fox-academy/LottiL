import { Reservation } from "./Reservation";

function initializeReservation(numberOfReservations:number): Reservation[] {
    let reservationList : Reservation[]=[];
    for (let i = 0; i < numberOfReservations; i++) {
        reservationList.push(new Reservation);        
    }
    return reservationList;
}

let reservationList:Reservation[]=initializeReservation(8);
reservationList.toString();