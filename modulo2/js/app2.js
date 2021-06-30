var nameHotel, startPrint;


var hotel = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        description:"Maravilloso hotel en Tenerife, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://hotels1.cdn.iberostar.com/uploads/image/49668/crops/16:9/1920/image.jpeg",
        start: "cero",
        review: false,
    },
    Lani: {
        name: "Lani´s Suites Deluxe",
        location: "Lanzarote",
        description:"Maravilloso hotel en Lanzarote, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/44/7b/lani-s-suites-deluxe.jpg",
        start: "cero",
        review: false,
    },
    Bahiazul: {
        name: "Bahiazul Villas & Club",
        location: "Fuerteventura",
        description:"Maravilloso hotel en Fuerteventura, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/64/a8/bahiazul-villas-club.jpg?w=900&h=-1&s=1",
        start: "cero",
        review: false,
    },
};

var rankingStart = {
    cero: "<span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

// Preguna sobre que hotel quiere.
nameHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: Mencey, Lani o Bahiazul.")

document.getElementById("hotel-name").innerHTML = "Hotel " + hotel[nameHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel[nameHotel].location;
document.getElementById("hotel-description").innerHTML = hotel[nameHotel].description;
document.getElementById("hotel-telephone").innerHTML = hotel[nameHotel].telephone;
document.getElementById("hotel-imagen").src = hotel[nameHotel].rutaImg;

// Preguna sobre numero de estrellas.
hotel[nameHotel].start = prompt("¿Cuantas estrellas?: cero, una, dos, tres, cuatro o cinco");

startPrint = hotel[nameHotel].start;
document.getElementById("start").innerHTML = rankingStart[startPrint];

// Preguna sobre la reseña.
hotel[nameHotel].review = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("review-anonymous").checked = hotel[nameHotel].review;





