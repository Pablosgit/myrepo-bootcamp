console.log("%cEJERCICIO ADICIONAL:","color:green");


const reservas3 = [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
      pax: 2,
      noches: 1
    }
  ];



class bookingBreakfast {

    constructor() {
        this._booking = [];
        this._subtotal = 0;
        this._total = 0;
        this.discount = 15;
        this.pricebreakfast = 15;
        this.priceRoomStandar = 100;
        this.priceRoomSuit = 150;
    }

    getPriceRoom = typeRoom => typeRoom === "standard" ? this.priceRoomStandar : this.priceRoomSuit ;

    getPricePax = typePax => typePax >= 2 ? (typePax-1) * 40 : 0 ;

    getPriceBreakfast = (typeBreakfast, typePax) => typeBreakfast ? this.pricebreakfast * typePax : 0 ;

    calcSubtotalBooking(){
        this._subtotal = this._booking
        .reduce( (acumulador, {tipoHabitacion, desayuno ,pax, noches}) => 
            acumulador  + (this.getPriceRoom(tipoHabitacion) + this.getPricePax(pax)  + this.getPriceBreakfast(desayuno, pax)) * noches
        ,0);
    }

    calcTotalBooking(){
        this._total = this._booking
        .reduce( (acumulador, {tipoHabitacion, desayuno ,pax, noches}) => 
            acumulador  + ( (this.getPriceRoom(tipoHabitacion) + this.getPricePax(pax) + this.getPriceBreakfast(desayuno, pax)) * noches ) * 1.21 
        ,0);
    }

    calcDiscount = (price) => price - (price * (this.discount/100));

    get subtotalRoom(){
        return this._subtotal;
    }

    get totalRoom(){
        return this._total;
    }

    set bookingRoom(reservas3){
        this._booking = reservas3;
        this.calcSubtotalBooking();
        this.calcTotalBooking();
    }

}


class tarifaTourOperador extends bookingBreakfast {

    calcSubtotalBooking(){
        this._subtotal = this._booking
        .reduce( (acumulador, {desayuno, pax, noches}) => 
            acumulador  + this.calcDiscount( (this.priceRoomStandar + this.getPricePax(pax) + this.getPriceBreakfast(desayuno, pax)) * noches )
        ,0);
    }

    calcTotalBooking(){
        this._total = this._booking
        .reduce( (acumulador, {desayuno, pax, noches}) => 
            acumulador  + this.calcDiscount( (this.priceRoomStandar + this.getPricePax(pax) + this.getPriceBreakfast(desayuno, pax)) * noches ) * 1.21 
        ,0);
    } 

}

console.log("%cCliente Particular:","color:green");
const priceParticular = new bookingBreakfast();
priceParticular.bookingRoom = reservas3;
console.log("Subtotal:",priceParticular.subtotalRoom, symbolMoney + " + IVA.");
console.log("Total:",priceParticular.totalRoom, symbolMoney + " IVA Incl.");


console.log("%cCliente Tour Operador:","color:green");
const priceTouroperador = new tarifaTourOperador();
priceTouroperador.bookingRoom = reservas3;
console.log("Subtotal:",priceTouroperador.subtotalRoom, symbolMoney + " + IVA. (-15%)");
console.log("Total:",priceTouroperador.totalRoom, symbolMoney + " IVA Incl.");