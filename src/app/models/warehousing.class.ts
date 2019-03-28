export class Warehousing{
    id: number;
    maphieunhap: string;
    time: Date;
    ncc: string;
    tientra: number;
    status: boolean;

    constructor(maphieunhap:string, time:Date,ncc:string,tientra:number,status:boolean){
            this.maphieunhap=maphieunhap;
            this.time=time;
            this.ncc=ncc;
            this.tientra=tientra;
            this.status=true;
    }
}