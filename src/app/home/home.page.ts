import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton
} from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPopover,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonSegment,
    IonSegmentButton
  ],
})
export class HomePage {
  @ViewChild('popover') popover: any;
  appName = environment.appName;
  isOpen = false;
  selectedTab = 'tab1'
  constructor(private routes: Router) { }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  setSelectedSegment(event: any) {
    this.selectedTab = event.target.value;
  }

  onLogin() {
    this.routes.navigate(['./dashboard']);
  }

  onSignup() {
    this.routes.navigate(['./dashboard']);
  }
}
