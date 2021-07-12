/* DECLARACION DE VARIABLES  */
var simbolMoney = "€"
var roomTypePrice = {Standard: 100, JuniorSuite: 120, Suite: 150,};
var factorRoomOcupa = 0.25;
var parkingFee = 10;
var precioSPA = 20;

var hotel = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        description:"Maravilloso hotel en Tenerife, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://hotels1.cdn.iberostar.com/uploads/image/49668/crops/16:9/1920/image.jpeg",
        rutaImg2: "https://cdnh.octanio.com/photos/14/14871H/14871_11.jpeg",
        start: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    },
    Lani: {
        name: "Lani´s Suites Deluxe",
        location: "Lanzarote",
        description:"Maravilloso hotel en Lanzarote, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/44/7b/lani-s-suites-deluxe.jpg",
        rutaImg2: "https://www.lanissuites.com/wp-content/uploads/2019/02/LanisSuites-Foto-27.jpg",
        start: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    },
    Bahiazul: {
        name: "Bahiazul Villas & Club",
        location: "Fuerteventura",
        description:"Maravilloso hotel en Fuerteventura, muy cerca del paseo marítimo y de los chiringuitos.",
        telephone:"+34-555-555-555",
        rutaImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/64/a8/bahiazul-villas-club.jpg?w=900&h=-1&s=1",
        rutaImg2: "https://content.r9cdn.net/rimg/himg/7a/2c/4e/arbisoftimages-630864-villas-56-image.jpg?width=660&height=400&xhint=844&yhint=540&crop=true&outputtype=webp",
        start: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    },
};

/* FUNCIONES QUE SACA EL VALOR DE LOS CAMPOS */
var TipoHabitacion = () => document.getElementById("tipoHabitacion").value;
var UsoSPA = () => document.getElementById("usoSPA").checked;
var TipoOcupacionHabitacion = () => document.getElementById("ocupaHabitacion").value;
var TotalNumNoches = () => document.getElementById("numNoches").value;
var TotalNochesParking = () => document.getElementById("diaParking").value;
var selectHotel = () => document.getElementById("tipoHotel").value;

/* FUNCIONES SACA EL VALOR DE LA TARIFA SEGUN TIPO HABITACIÓN */
var calculaTipoTarifaHabitacion = () => roomTypePrice[TipoHabitacion()];

/* FUNCIONES SACA EL VALOR DE LA TARIFA SI SE APLICA O NO EL SPA */
var calculaTarifaSPA = () => tarifaSPA = UsoSPA() === true ? precioSPA : 0;

/* FUNCION APLICA INCREMENTO O DECREMENTO SEGUN EL TIPO DE OCUPACION */
var calculaRoomOcupa = (tarifa) => {
    var descuento = tarifa * factorRoomOcupa;
    if (TipoOcupacionHabitacion() == "Individual"){
        tarifa = tarifa - descuento;
    } else if (TipoOcupacionHabitacion() == "Triple") {
        tarifa = tarifa + descuento;
    } else if (TipoOcupacionHabitacion() == "doble"){
        tarifa = tarifa;
    }
    return tarifa;
}

/* FUNCION QUE CALCULA EL RESULTADO Y LO IMPRIME O MUESTRA */
function calcularReserva(){
    var tarifaNocheyDia = calculaTipoTarifaHabitacion() + calculaTarifaSPA();
    tarifaNocheyDia = calculaRoomOcupa(tarifaNocheyDia);
    var tarifaTotalEstancia = tarifaNocheyDia * TotalNumNoches();
    var tarifaDiasParking = parkingFee * TotalNochesParking();
    var precioTotalEstancia = tarifaTotalEstancia + tarifaDiasParking;
    var reservaName = hotel[selectHotel()].name;
    var activaSPA = UsoSPA() === true ? "Si":"No"; 
    document.getElementById("reserva-name").innerHTML = "Hotel: " + reservaName + " " + hotel[selectHotel()].start;
    document.getElementById("reserva-tipoHabitacion").innerHTML = "Habitacion: " + TipoHabitacion() + " / " + TipoOcupacionHabitacion();
    document.getElementById("reserva-spa").innerHTML = "Spa: " + activaSPA;
    document.getElementById("reserva-noches").innerHTML = "Noches estancia: " + TotalNumNoches();
    document.getElementById("reserva-parking").innerHTML = "Noches parking: " + TotalNochesParking();
    document.getElementById("reserva-precio").innerHTML = "Total Estancia: " + precioTotalEstancia + simbolMoney;
    document.getElementById("habitacion-imagen").src = hotel[selectHotel()].rutaImg2;
    document.getElementById("hotel-reserva").style.display = "block";
}

/* FUNCION QUE MUESTRA EL HOTEL ELEGIDO */
function muestraHotel (){
    var nameHotel = selectHotel();
    document.getElementById("hotel-name").innerHTML = "Hotel " + hotel[nameHotel].name;
    document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel[nameHotel].location;
    document.getElementById("hotel-description").innerHTML = hotel[nameHotel].description;
    document.getElementById("hotel-telephone").innerHTML = hotel[nameHotel].telephone;
    document.getElementById("hotel-imagen").src = hotel[nameHotel].rutaImg;
    document.getElementById("start").innerHTML = hotel[nameHotel].start;
};

/* MOSTRAMOS AL INICIO UN HOTEL POR DEFECTO */
muestraHotel();

/* LLAMADA EVENTO DE BOTON CALCULAR RESERVA */
document.getElementById("button-calcular").addEventListener("click", calcularReserva);

/* LLAMADA EVENTO CAMPO SELEC PARA CAMBIAR EL HOTEL A RESERVAR */
document.getElementById("tipoHotel").addEventListener("change", muestraHotel);

