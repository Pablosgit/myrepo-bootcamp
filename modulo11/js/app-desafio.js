const reservas2 = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];


console.log("%cDESAFIO:","color:green");

const AddChargesPax2 = 40;
const ivaRoom2 = 1.21;


class bookingPadre {

    constructor(priceStandar, priceSuit){
        this._booking = [];
        this._subtotal = 0;
        this._total = 0;
        this.discount = 0;
        this.priceRoomStandar = priceStandar;
        this.priceRoomSuit = priceSuit;
    }

    getPriceRoom = typeRoom => typeRoom === "standard" ? this.priceRoomStandar : this.priceRoomSuit ;

    getPricePax = typePax => typePax >= 2 ? (typePax-1) * AddChargesPax2 : 0 ;

    calcSubtotalBooking(){
        this._subtotal = this._booking.reduce( (acumulador, {tipoHabitacion, pax, noches}) => acumulador  + (this.getPriceRoom(tipoHabitacion)+ this.getPricePax(pax)) * noches, 0);
    }

    calcTotalBooking(){
        this._total = this._booking.reduce( (acumulador, {tipoHabitacion, pax, noches}) => acumulador  + ( (this.getPriceRoom(tipoHabitacion)  + this.getPricePax(pax)) * noches ) * ivaRoom2 ,0);
    }

    calcDiscount = (price) => price - (price * (this.discount/100));

    get subtotalRoom(){
        return this._subtotal;
    }

    get totalRoom(){
        return this._total;
    }

    set bookingRoom(reservas2){
        this._booking = reservas2;
        this.calcSubtotalBooking();
        this.calcTotalBooking();
    }

}

class clienteParticular extends bookingPadre {

    constructor(priceStandar, priceSuit){
         super(priceStandar,priceSuit);
    } 

}

class tourOperador2 extends bookingPadre {

    constructor(priceStandar, priceSuit){
        super(priceStandar,priceSuit);
        this.discount = 15;
    }

    calcSubtotalBooking(){
        this._subtotal = this._booking.reduce( (acumulador, {pax, noches}) => acumulador  + this.calcDiscount( (this.priceRoomStandar + this.getPricePax(pax)) * noches ), 0);
    }

    calcTotalBooking(){
        this._total = this._booking.reduce( (acumulador, {pax, noches}) => acumulador  + this.calcDiscount( (this.priceRoomStandar  + this.getPricePax(pax)) * noches ) * ivaRoom2 ,0);
    } 

}


console.log("%cCliente Particular:","color:green");
const bookingHijo1 = new clienteParticular(100, 150);
bookingHijo1.bookingRoom = reservas2;
console.log("Subtotal:",bookingHijo1.subtotalRoom, symbolMoney + " + IVA.");
console.log("Total:",bookingHijo1.totalRoom, symbolMoney + " IVA Incl.");

console.log("%cTour operador:","color:green");
const bookingHijo2 = new tourOperador2(100, 150);
bookingHijo2.bookingRoom = reservas2;
console.log("Subtotal:",bookingHijo2.subtotalRoom, symbolMoney + " + IVA. (-15%)");
console.log("Total:",bookingHijo2.totalRoom, symbolMoney + " IVA Incl.");