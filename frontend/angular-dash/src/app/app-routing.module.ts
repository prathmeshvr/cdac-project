import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

// path: 'lazy',
// // The following string syntax for loadChildren is deprecated
// loadChildren: './lazy/lazy.module#LazyModule'

// path: 'lazy',
// // The new import() syntax
// loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)

const appRoutes: Routes = [
    {
        path: 'auth',
        // loadChildren: './auth/auth.module#AuthModule'
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        // loadChildren: './dashboard/dashboard.module#DashboardModule',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'schedule',
        // loadChildren: './dashboard/dashboard.module#DashboardModule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'billing',
        // loadChildren: './dashboard/dashboard.module#DashboardModule',
        loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'assets',
        // loadChildren: './assets-home/assets.module#AssetsModule',
        loadChildren: () => import('./assets-home/assets.module').then(m => m.AssetsModule),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'groups',
    //     // loadChildren: './assets-home/assets.module#AssetsModule',
    //     loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule),
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'customers',
        // loadChildren: './customers/customers.module#CustomersModule',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        // loadChildren: './users/users.module#UsersModule',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        // loadChildren: './account/account.module#AccountModule',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'icons',
        // loadChildren: './icons/icons.module#IconsModule',
        loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'typography',
        // loadChildren: './typography/typography.module#TypographyModule',
        loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        // loadChildren: './about/about.module#AboutModule',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'helpdesk',
        // loadChildren: './about/about.module#AboutModule',
        loadChildren: () => import('./helpdesk/helpdesk.module').then(m => m.HelpdeskModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'analytics',
        // loadChildren: './about/about.module#AboutModule',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule),
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'mydevices',
    //     // loadChildren: './about/about.module#AboutModule',
    //     loadChildren: () => import('./mydevices/mydevices.module').then(m => m.MydevicesModule),
    //     canActivate: [AuthGuard]
    // },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

// const appRoutes: Routes = [
//     {
//         path: 'auth',
//         loadChildren: './auth/auth.module#AuthModule'
//     },
//     {
//         path: 'dashboard',
//         loadChildren: './dashboard/dashboard.module#DashboardModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'assets',
//         loadChildren: './assets-home/assets.module#AssetsModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'customers',
//         loadChildren: './customers/customers.module#CustomersModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'users',
//         loadChildren: './users/users.module#UsersModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'account',
//         loadChildren: './account/account.module#AccountModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'icons',
//         loadChildren: './icons/icons.module#IconsModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'typography',
//         loadChildren: './typography/typography.module#TypographyModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: 'about',
//         loadChildren: './about/about.module#AboutModule',
//         canActivate: [AuthGuard]
//     },
//     {
//         path: '**',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//     }
// ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
