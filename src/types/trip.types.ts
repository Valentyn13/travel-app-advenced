export interface ITrip {
    id: string,
    title: string,
    description: string,
    level: 'easy'|'difficult' | 'moderate',
    duration: number,
    price: number,
    image: string,
    createdAt: Date
}