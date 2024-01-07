import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  IonSegmentButton,
  IonToast
} from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

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
    IonSegmentButton,
    ReactiveFormsModule,
    IonToast
  ],
})
export class HomePage {
  @ViewChild('popover') popover: any;
  appName = environment.appName;
  isOpen = false;
  selectedTab = 'tab1'

  loginForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  signupForm = new FormGroup({
    email: new FormControl<string>(''),
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    fullname: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    address: new FormGroup({
      city: new FormControl<string>(''),
      street: new FormControl<string>(''),
      number: new FormControl<number | null>(null),
      zipcode: new FormControl<number | null>(null),
    })
  });

  isToastOpen = false;
  errortext = '';
  constructor(private routes: Router, private auth: AuthService) { }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  setSelectedSegment(event: any) {
    this.selectedTab = event.target.value;
  }

  onLogin() {
    this.routes.navigate(['./dashboard']);
    // this.auth.userLogin(this.loginForm.value).subscribe({
    //   next: (success) => {
    //     console.log(success);
    //     this.routes.navigate(['./dashboard']);
    //   },
    //   error: (err: any) => {
    //     console.log(err.error)
    //     this.errortext = err.error;
    //     this.setOpen(true);
    //   }
    // })
  }

  onSignup() {
    this.auth.userSignup(this.signupForm.value).subscribe({
      next: (success) => {
        console.log(success);
        this.routes.navigate(['./dashboard']);
      },
      error: (error) => {
        this.errortext = error.error;
        this.setOpen(true);
        console.log(error);
      }
    })
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
