export class Employee{
    
    private _Id : number;
    public get Id() : number {
        return this._Id;
    }
    public set Id(v : number) {
        this._Id = v;
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    private _Age : number;
    public get Age() : number {
        return this._Age;
    }
    public set Age(v : number) {
        this._Age = v;
    }
    
    private _ProjectId : number;
    public get ProjectId() : number {
        return this._ProjectId;
    }
    public set ProjectId(v : number) {
        this._ProjectId = v;
    }
    
    
    private _Salary : number;
    public get Salary() : number {
        return this._Salary;
    }
    public set Salary(v : number) {
        this._Salary = v;
    }
    
    
}