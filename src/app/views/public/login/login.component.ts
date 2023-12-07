import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../../shared/services/storage.service';
import { CustomFormValidator } from '../../shared/helpers/custom-form-validators';
import { FormModel } from '../../../shared/models/form-model';
import { BroadcastService } from '../../../shared/services/broadcast.service';
import { ApiService } from '../../../shared/services/api.service';
// import { StorageService } from '../shared/services/storage.service';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
     public loginForm: FormGroup;
     public ferror: any;
     public vmessage: any;
     public customFormVaidator: CustomFormValidator;
     public formModel: FormModel;




     constructor(
          private _router: Router,
          private _storageService: StorageService,
          private _broadcastService: BroadcastService,
          private _apiService: ApiService
     ) {
          this.customFormVaidator = new CustomFormValidator();
          this.formModel = new FormModel();
     }
     ngOnInit(): void {
          this.createLoginForm();
     }
     public createLoginForm() {
          this.loginForm = new FormGroup({
               email: new FormControl('', [Validators.required, Validators.email]),
               password: new FormControl('', [Validators.required, Validators.minLength(6)])

          });

          this.loadFormProperty('login');
     }

     public loginUser() {
          if (this.loginForm.valid) {
               let formData = this.loginForm.value;
               let _tempData = {
                    email: formData.email,
                    password: formData.password,
                    source: 'manual'
               }
               this._apiService.login(_tempData).subscribe({
                    next: (res) => {
                         console.log(res);
                         if (res.status) {
                              this._storageService.setUserInfo(_tempData);
                              this._broadcastService.triggerLoggedInUserEvent('USRLOGGEDIN');
                              this._router.navigate(['dashboard']);
                         }
                    },
                    error: (error) => {
                         this.ferror = this.customFormVaidator.displayAllFormErrors(this.loginForm, this.ferror, this.vmessage);
                    }
               });
          } else {
               this.ferror = this.customFormVaidator.displayAllFormErrors(this.loginForm, this.ferror, this.vmessage);
          }
     }

     public loadFormProperty(form) {
          this.ferror = this.formModel.formErrors[form];
          this.vmessage = this.formModel.validationMessage[form];
     }
}
