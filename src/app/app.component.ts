import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _userService: UserServiceService) {}

  title = 'angularApp';

  showService() {
    this.title = 'new App';
  }
}
