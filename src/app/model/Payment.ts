export class Payment {

    //transcationId: number;
    itemName: string;
    cardNumber: string;
    quantity: number;
    itemPrice: number;
    totalAmount: number;
    //transactionTime: Date;

    constructor() { 
        //this.transcationId = 0;
        this.itemName = "";
        this.cardNumber = "";
        this.quantity = 0;
        this.itemPrice = 0.0;
        this.totalAmount = 0.0;
        //this.transactionTime = new Date();
     }
}