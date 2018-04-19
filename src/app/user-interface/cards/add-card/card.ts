/*export class Card {
    constructor(
        public userId: number,
        public name: string,
        public number: number,
        public expiration: number,
        public verification: number,
        public balance?: number
    ){}
}*/
export class Card {
        id: number;
        name: string;
        number: number;
        limit: null;
        expiration: number;
        isBlocked: boolean;
        smsInform: boolean;
        status: boolean;
        //public verification: number,
        sum?: number
}
