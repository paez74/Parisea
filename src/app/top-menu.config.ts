import { Routes } from '@angular/router';
import { CoursesComponent } from './modules/courses/courses.component';
import { ProductsBySubComponent } from './modules/productsBySub/productsBySub.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: CoursesComponent
    },
    {
        path: 'about',
        component: CoursesComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'products',
        component: ProductsBySubComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];