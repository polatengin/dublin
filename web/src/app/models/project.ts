export class Project{
    
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
    
}