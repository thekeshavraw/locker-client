import { FormGroup } from '@angular/forms';

export class CustomFormValidator {

     constructor() {

     }

     public logValidationError(group: FormGroup, formErrors: any, validationMessage: any) {
          Object.keys(group.controls).forEach((key: string) => {
               const abstractControl = group.get(key);
               if (abstractControl instanceof FormGroup) {
                    this.logValidationError(abstractControl, formErrors, validationMessage);
               } else {
                    formErrors[key] = '';
                    if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                         const messages = validationMessage[key];
                         for (const errorKey in abstractControl.errors) {
                              if (errorKey) {
                                   formErrors[key] += messages[errorKey] + ' ';
                              }
                         }
                    }
               }
          });
          return formErrors;
     }

     public displayAllFormErrors(group: FormGroup, formErrors: any, validationMessage: any) {
          Object.keys(group.controls).forEach((key: string) => {
               const abstractControl = group.get(key);
               if (abstractControl instanceof FormGroup) {
                    formErrors = this.logValidationError(abstractControl, formErrors, validationMessage);
               } else {
                    formErrors[key] = '';
                    if (abstractControl && !abstractControl.valid) {
                         const messages = validationMessage[key];
                         for (const errorKey in abstractControl.errors) {
                              if (errorKey) {
                                   formErrors[key] += messages[errorKey] + ' ';
                              }
                         }
                    }
               }
          });
          return formErrors;
     }
}
