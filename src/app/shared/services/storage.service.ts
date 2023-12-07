import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root'
})
export class StorageService {

     constructor(
     ) {

     }

     public setUserInfo(data: any) {
          data['isUserLoggedIn'] = 1;
          localStorage.setItem('user', JSON.stringify(data));
     }

     public isUserLoggedIn(): boolean {
          let user = localStorage.getItem('user');
          if (user) {
               user = JSON.parse(user);
               if (user['isUserLoggedIn'] && user['isUserLoggedIn'] == '1') {
                    return true;
               }
               return false;
          } else {
               return false;
          }
     }

     public updateUserInfo() {

     }


     public getUserInfo(): any {
          let user = localStorage.getItem('user');
          if (user) {
               return JSON.parse(user);
          } else {
               return null;
          }
     }

     // public validateAndInsertUser(user) {
     //      let users = localStorage.getItem('users');
     //      if (users) {
     //           let temp = JSON.parse(users);
     //           let found = false;
     //           for (let i = 0; i < temp.length; i++) {
     //                let userInfo = temp[i];
     //                // console.log(userInfo);
     //                if (userInfo.email == user.email) {
     //                     found = true;
     //                     // console.log(found);
     //                }
     //           }
     //           if (found) {
     //                return {
     //                     status: false,
     //                     message: 'User already exists.'
     //                };
     //           } else {
     //                temp.push(user);
     //                localStorage.setItem('users', JSON.stringify(temp));
     //                return {
     //                     status: true,
     //                     message: 'User registered sucessfully.'
     //                };
     //           }
     //           // the above code performs operations like it checks the duplicacy and throws error and also if no duplicacy founds it stores user info into localstorage.
     //      } else {
     //           let temp = [];
     //           temp.push(user);
     //           localStorage.setItem('users', JSON.stringify(temp));
     //           return {
     //                status: true,
     //                message: 'User registered sucessfully.'
     //           };
     //      }
     // }
     // public validateAndLoginUser(_tempData): any {
     //      const users = localStorage.getItem('users');
     //      if (users) {
     //           const userList = JSON.parse(users);
     //           let found = false;
     //           for (let index = 0; index < userList.length; index++) {
     //                const userInfo = userList[index];
     //                if (userInfo.email == _tempData.email && userInfo.password == _tempData.password) {
     //                     found = true;
     //                     break;
     //                }
     //           }
     //           if (found) {
     //                return {
     //                     status: true,
     //                     user: _tempData
     //                }
     //           }
     //           return {
     //                status: false,
     //                user: null
     //           }
     //      }
     //      return {
     //           status: false,
     //           user: null
     //      };
     // }

     public clearAll() {
          localStorage.clear();
     }

     public logout() {
          // localStorage.removeItem('user');
          localStorage.clear();
     }
}
