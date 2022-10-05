export interface Plant {
    id: number;
    type: string;
    description: string;
    age: number;
    ownedSince: number;
    size: number;
    imageUrl: string;
    lastTimeWateredPlant: Date;
    plantCode: string;
}