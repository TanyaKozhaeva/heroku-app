export class Card {
    constructor(
        //public userId: number,
        public name: string,
        public number: number,
        public expiration: number,
        public verification: number,
        public balance?: number
    ){}
}
