import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage),
    children: [
      {
        path: 'landing',
        loadComponent: () => import('./landing/landing.page').then(m => m.LandingPage)
      },
      {
        path: 'categories',
        loadComponent: () => import('./notifications/notifications.page').then(m => m.NotificationsPage)
      },
      {
        path: 'notifications',
        loadComponent: () => import('./categories/categories.page').then(m => m.CategoriesPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./account/account.page').then(m => m.AccountPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart.page').then(m => m.CartPage)
      },
    ]
  }
];
