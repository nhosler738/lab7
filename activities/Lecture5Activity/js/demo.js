let name = "Emma";
function nameHer() {
    name = "Nathan";
    console.log(name);
    name = "Audrey";
    console.log(name);
}
console.log(name);

nameHer();




function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

let lordNelson = new Hotel('lordNelson', 50, 30);
console.log(lordNelson);

let windowScreen = window.screen;
console.log(windowScreen);

let documentURL = document.URL;
console.log(documentURL);