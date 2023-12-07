export class FormModel {

     public formErrors: any = {
          'login': {
               'email': '',
               'password': '',

          },
          'signup': {
               'email': '',
               'firstname': '',
               'lastname': '',
               'phone': '',
               'password': '',
               'cpassword': ''
          }
     }

     public validationMessage: any = {
          'login': {
               'email': {
                    'required': 'Email is required.',
               },
               'password': {
                    'required': 'Password is required.',
               },

          },
          'signup': {
               'email': {
                    'required': 'Email is required.',
                    'email': 'Please enter valid email.',
                    'emailExits': 'Email already registered.'
               },
               'firstname': {
                    'required': 'First Name is required.',
                    'noSpaceAllowed': 'Space is not required',
               },
               'lastname': {
                    'required': 'Last Name is required.',
                    'noSpaceAllowed': 'Space is not required',
               },
               'phone': {
                    'required': 'Phone is required.',
               },
               'password': {
                    'required': 'Password is required.',
               },
               'cpassword': {
                    'required': 'Confirm Password is required.',
                    'mustMatch': 'Password and Confirm Password must be match.'
               }
          },
     };

}
