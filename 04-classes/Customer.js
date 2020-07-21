var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        //Getter/Setter
        /*public getFirstName(): string {
            return this.firstName;
        }
        public setFirstName(theFirst: string): void {
            this.firstName = theFirst;
        }*/
        //Acessor - Get/Set
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Júlia", "Botelho");
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
