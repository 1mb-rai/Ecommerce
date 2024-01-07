import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule,
    HttpClientModule,

  ]
})
export class DashboardPage implements OnInit {

  tabNames: any = {
    tab1: 'home-outline',
    tab2: 'grid-outline',
    tab3: 'notifications-outline',
    tab4: 'person-outline',
    tab5: 'cart-outline'
  };
  constructor(private api: DashboardService) { }

  ngOnInit() {
    this.api.getCategories().subscribe({
      next: (res) => {
        this.setTabName('tab1');
        console.log(res);
      }
    })
  }

  setTabName(activeTab: any) {
    this.tabNames[activeTab] = this.tabNames[activeTab].split('-outline')[0];
    Object.keys(this.tabNames).forEach(ele => {
      if(ele !== activeTab && !this.tabNames[ele].includes('outline')) {
        this.tabNames[ele] = `${this.tabNames[ele]}-outline`;
      }
    })
  }

}
