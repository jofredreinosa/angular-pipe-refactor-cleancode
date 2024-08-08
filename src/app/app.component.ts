import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positiveAmount = 1000000;
  negativeAmount = -15000;
  positiveMoneyAmount = 1000000;
  negativeMoneyAmount = -15000;
}
