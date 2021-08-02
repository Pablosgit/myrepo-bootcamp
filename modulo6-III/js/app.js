console.log("Módulo 6 - Algoritmos III - Laboratorio");

/* EJERCICIO AGENDA DE HORARIOS TRABAJO */

console.log("EJERCICIO AGENDA DE HORARIOS TRABAJO");

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

    
// Datos
var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
];

let sentenceFree = "Hueco encontrado en el horario de: " ;
const sentenceNotFree = "Lo siento. No hay hueco disponible en el equipo." ;

var getRandowHours = (a,b) => (Math.round(Math.random())? a : b );

var getYesNo = (paramAvailability) => paramAvailability ? "Si" : "No" ;

var printAgenda = (team, hours) => {
    for(i = 0; i < team.length; i++ ){
        let valHours;
        console.log("Disponibilidad de " + team[i].name);
        for (x = 0; x < team[i].availability.length; x++ ){
            team[i].availability[x] = getRandowHours(true,false);
            valHours = getYesNo(team[i].availability[x]);
            console.log(hours[x] + ": " + valHours);
        }
    }
}

var getHourFree = (valTeam, valhours) =>{
    let findHour = true;
    for(x = 0; x < valTeam.length; x++ ){
        findHour = findHour && valTeam[x].availability[valhours];
    };
    return findHour;
}

var freeHour = (newTeam, newHours) => {
    let find = false;
    for(i = 0; i < newHours.length; i++ ){
       if (getHourFree(newTeam, i)){
           sentenceFree += newHours[i] + " / ";
           find = true;
       };
    };
    return find ? sentenceFree : sentenceNotFree;
}

printAgenda(myTeam, WORK_HOURS);

console.log(freeHour(myTeam, WORK_HOURS));