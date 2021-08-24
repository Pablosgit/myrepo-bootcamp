const reservas = [
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


console.log("%cCASO 1:","color:green");

const symbolMoney = "€";
const priceRoomStandar = 100;
const priceRoomSuit = 150;
const AddChargesPax = 40;
const ivaRoom = 1.21;
const discountOperador = 15;

class bookingHotel {

    constructor(){
        this._booking = [];
        this._subtotal = 0;
        this._total = 0;
        this.discount = 0;
    }

    getPriceRoom = typeRoom => typeRoom === "standard" ? priceRoomStandar : priceRoomSuit ;

    getPricePax = typePax => typePax >= 2 ? (typePax-1) * AddChargesPax : 0 ;

    calcSubtotalBooking(){
        this._subtotal = this._booking.reduce( (acumulador, {tipoHabitacion, pax, noches}) => acumulador  + (this.getPriceRoom(tipoHabitacion) + this.getPricePax(pax)) * noches, 0);
    }

    calcTotalBooking(){
        this._total = this._booking.reduce( (acumulador, {tipoHabitacion, pax, noches}) => acumulador  + ( (this.getPriceRoom(tipoHabitacion) + this.getPricePax(pax)) * noches) * ivaRoom, 0);
    }

    calcDiscount = (price) => price - (price * (this.discount/100));

    get subtotalRoom(){
        return this._subtotal;
    }

    get totalRoom(){
        return this._total;
    }

    set typeDiscount(discount){
        this.discount = discount;
    }

    set bookingRoom(reservas){
        this._booking = reservas;
        this.calcSubtotalBooking();
        this.calcTotalBooking();
    }

}

const bookingCase1 = new bookingHotel();
bookingCase1.bookingRoom = reservas;
console.log("Subtotal:",bookingCase1.subtotalRoom, symbolMoney + " + IVA.");
console.log("Total:",bookingCase1.totalRoom, symbolMoney + " IVA Incl.");



console.log("%cCASO 2:","color:green");


class tourOperador extends bookingHotel {

    calcSubtotalBooking(){
        this._subtotal = this._booking.reduce( (acumulador, {pax, noches}) => acumulador  + this.calcDiscount( (this.getPriceRoom("standard") + this.getPricePax(pax)) * noches ), 0);
    }

    calcTotalBooking(){
        this._total = this._booking.reduce( (acumulador, {pax, noches}) => acumulador  + this.calcDiscount( (this.getPriceRoom("standard") + this.getPricePax(pax)) * noches ) * ivaRoom, 0);
    } 

}

const bookingCase2 = new tourOperador();
bookingCase2.typeDiscount = discountOperador;
bookingCase2.bookingRoom = reservas;
console.log("Subtotal:",bookingCase2.subtotalRoom, symbolMoney + " + IVA. (-15%)");
console.log("Total:",bookingCase2.totalRoom, symbolMoney + " IVA Incl.");
