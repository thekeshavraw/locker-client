export class ResponseModel {
     data?: any;
     message?: string;
     status: boolean;

     constructor(res: any) {
          console.log(res);
          this.data = typeof res.data != 'undefined' ? res.data : res;
          // console.log(this.data);  
          this.message = typeof res.message != 'undefined' ? res.message : res.Message;
          if (res.status == 'success') {
               this.status = true;
          } else {
               this.status = false;
          }
     }
}
