
var hotel = {
    name: "Mencey",
    location: "Tenerife",
    description:"Maravilloso hotel en Tenerife, muy cerca del paseo marítimo y de los chiringuitos.",
    telephone:"+34-555-555-555",
    rutaImg: "https://hotels1.cdn.iberostar.com/uploads/image/49668/crops/16:9/1920/image.jpeg",
    start: "0",
    review: false,
};

// Preguna sobre puntuar el hotel.
hotel.start = prompt("Puntuación del 1 al 5");

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel.location;
document.getElementById("hotel-description").innerHTML = hotel.description;
document.getElementById("hotel-telephone").innerHTML = hotel.telephone;
document.getElementById("hotel-imagen").src = hotel.rutaImg;
document.getElementById("start").innerHTML = hotel.start + " estrellas.";

// Preguna sobre la reseña.
hotel.review = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("review-anonymous").checked = hotel.review;

