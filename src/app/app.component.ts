import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    gender: '',
    answer: '',
    secretQuestion: ''
  }

  suggestUserName() {

    const suggestedName = 'Superuser';

    /* Overwrite form values:
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: '',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'female'
    }); */

    /* Better way: just update some fields in the form: */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {

    this.submitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;
    this.user.answer = this.signupForm.value.answer;
    this.user.secretQuestion = this.signupForm.value.secret;

    this.signupForm.reset();

  }
}
