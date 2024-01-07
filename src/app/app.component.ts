import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  constructor(private platform: Platform) {

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      // processNextHandler(); 
      console.log('Handler was called!');
    });
  }
}
