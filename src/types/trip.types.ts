import { LevelType } from "./filter.types";

export interface ITrip {
    id: string,
    title: string,
    description: string,
    level: LevelType,
    duration: number,
    price: number,
    image: string,
    createdAt: string
}

export type ITripList = ITrip[]