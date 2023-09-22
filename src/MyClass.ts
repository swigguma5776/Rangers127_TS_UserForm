


export default class MyClass {

    constructor(private _user: string | undefined, private _age: string | undefined ){}

    public get age(): string | undefined{
        return this._age;
    }
    public set age(value: string) {
        this._age = value;
    }
    public get user(): string | undefined {
        return this._user;
    }
    public set user(value: string) {
        this._user = value;
    }
    
}