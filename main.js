class Bus {
  constructor(id, route, seats, reservedSeats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reservedSeats = reservedSeats;
  }

  getDetails() {
    return `Avtobus raqami ${this.id}, Yo'nalishi ${this.route}, 
    O'rindiqlar soni ${this.seats} ta, 
    Band qilinganlari ${this.reservedSeats} ta,`;
  }

  reserveSeat() {
    if (this.reservedSeats < this.seats) {
      this.reservedSeats++;
    }
  }

  cancelReservation() {
    if (this.reservedSeats > 0) {
      this.reservedSeats--;
    }
  }
}

let bus1 = new Bus(39, "Namangan–Toshkent", 30, 2);
let bus2 = new Bus(33, "Namangan–buhoro", 20, 4);
let bus3 = new Bus(32, "Namangan–magic", 20, 5);
let bus4 = new Bus(35, "Namangan–fargona", 20, 9);

class BusSystem {
  constructor(buses) {
    this.buses = buses;
  }

  addBus(bus) {
    this.buses.push(bus);
  }

  listBuses() {
    return this.buses;
  }
  searchByRoute(rout) {
    let result = this.buses.filter((value) => value.route.includes(rout));
    console.log(result);
  }
  reserveSeatById(busId) {
    let bus = this.buses.find((bus) => bus.id === busId);

    if (bus.reservedSeats < bus.seats) {
      bus.reservedSeats++;
    }
  }

  cancelSeatById(busId) {
    let bus = this.buses.find((bus) => bus.id === busId);
    if (bus.reservedSeats > 0) {
      bus.reservedSeats--;
    }
  }
}

let BusSystem1 = new BusSystem([]);

BusSystem1.addBus(bus1);
BusSystem1.addBus(bus4);
BusSystem1.addBus(bus3);
BusSystem1.addBus(bus2);

console.log(BusSystem1.listBuses());
