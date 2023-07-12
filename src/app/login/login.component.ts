import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  router!: Router;


  async onSubmit() {
    console.log("Username:", this.username);
    console.log("Password", this.password);

    const response: any = fetch("");
    if (response) {
      // TODO handle successful login
      this.router.navigate(["/main"]);
    } else {
        alert('Invalid credentials');
    }
  }
}
