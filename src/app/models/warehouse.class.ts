export class Warehouse{
    id: number;
    name: string;
    byUser: string;
    address: string;
    discription: string;
    status: boolean;

    constructor(name:string, byUser:string,address:string,discription:string,status:boolean){
            this.name=name;
            this.byUser=byUser;
            this.address=address;
            this.discription=discription;
            this.status=true;
    }
}