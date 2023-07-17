import { EventEmitter, Component, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  
	active: string = "login";
  login: string = "";
  password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	
  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"login": this.login, "password": this.password});
  }

  

}
