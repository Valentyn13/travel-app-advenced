export interface IBooking {
    id: string;
    userId: string;
    tripId: string;
    guests: number;
    date: Date;
    trip: {
      title: string;
      duration: number;
      price: number;
    };
    totalPrice: number;
    createdAt: Date;
}