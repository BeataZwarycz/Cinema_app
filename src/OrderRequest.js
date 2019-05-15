class OrderPostRequest {
  constructor(movieId, date, time, seats, ticketType) {
    this.movieId = movieId;
    this.date = date;
    this.time = time;
    this.seats = seats;
    this.ticketType = ticketType;
  }
}

class OrderGetRequest {
  constructor(movieId, date, time) {
    this.movieId = movieId;
    this.date = date;
    this.time = time;
  }
}

export { OrderGetRequest, OrderPostRequest };
