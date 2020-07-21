class Customer {

    constructor(private _firstName: string,
                private _lastName: string){
    }

    //Getter/Setter
    /*public getFirstName(): string {
        return this.firstName;
    }
    public setFirstName(theFirst: string): void {
        this.firstName = theFirst;
    }*/

    //Acessor - Get/Set

    get firstName(): string{
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName = value;
    }
    get lastName(): string{
        return this._lastName;
    }
    set lastName(value: string){
        this._lastName = value;
    }
} 

let myCustomer = new Customer("Júlia", "Botelho");

myCustomer.firstName = "Júlia";
myCustomer.lastName = "Botelho";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

/*Setter
myCustomer.setFirstName("Ale");*/

/*Getter
console.log(myCustomer.getFirstName());*/

/*console.log(myCustomer.firstName);
console.log(myCustomer.lastName);*/
