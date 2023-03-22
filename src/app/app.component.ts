import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  form = {
    fname : '',
    lname : '',
    pan : '',
    mobile : '',
    email : '',
    age : ''
  }
  integerRegex = /^\d+$/
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  registerFn(){
    console.log(this.form)
  }
}
