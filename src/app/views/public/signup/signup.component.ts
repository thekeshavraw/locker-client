import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { CustomFormValidator } from '../../shared/helpers/custom-form-validators';
import { FormModel } from '../../../shared/models/form-model';
import { BroadcastService } from '../../../shared/services/broadcast.service';
import { ApiService } from '../../../shared/services/api.service';


@Component({
     selector: 'app-signup',
     templateUrl: './signup.component.html',
     styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

     public signupForm: FormGroup;
     public ferror: any;
     public vmessage: any;
     public customFormValidator: CustomFormValidator;
     public formModel: FormModel;


     constructor(
          private _storageService: StorageService,
          private _broadcastService: BroadcastService,
          private _router: Router,
          private _apiService: ApiService
     ) {
          this.customFormValidator = new CustomFormValidator();
          this.formModel = new FormModel();
     }

     ngOnInit(): void {
          this.createSignupForm();
     }

     public createSignupForm() {
          this.signupForm = new FormGroup({
               email: new FormControl('', [Validators.required, Validators.email]),
               firstname: new FormControl('', [Validators.required, this.noSpaceAllowed]),
               lastname: new FormControl('', [Validators.required, this.noSpaceAllowed]),
               phone: new FormControl('', Validators.required),
               password: new FormControl('', [Validators.required, Validators.minLength(6)])
          });
          this.loadFormProperty('signup');
     }


     public signup() {
          if (this.signupForm.valid) {
               let user = this.signupForm.value;
               // console.log(user);
               let payload = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    avatar: '',
                    source: 'manual',
               }
               this._apiService.sinup(payload).subscribe({
                    next: (res) => {
                         // console.log(res);
                         if (res.status) {
                              this._storageService.setUserInfo(payload);
                              this._broadcastService.triggerLoggedInUserEvent('USRLOGGEDIN');
                              this._router.navigate(['']);
                         }
                    },
                    error: (error) => {
                         this.signupForm.get('email').setErrors({ emailExits: true });
                         this.customFormValidator.displayAllFormErrors(this.signupForm, this.ferror, this.vmessage);

                    }
               });
               console.log(this._apiService.sinup(payload).subscribe);
          } else {
               this.ferror = this.customFormValidator.displayAllFormErrors(this.signupForm, this.ferror, this.vmessage);
          }
     }

     public loadFormProperty(form) {
          this.ferror = this.formModel.formErrors[form];
          this.vmessage = this.formModel.validationMessage[form];
     }
     public noSpaceAllowed(control: FormControl) {
          if (control.value != null && control.value.indexOf(' ') != -1) {
               return { noSpaceAllowed: true }
          }
          return null;
     }
}
