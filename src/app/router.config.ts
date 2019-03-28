
import {Routes} from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { CourseCardsComponent } from './modules/course-cards/course-cards.component';
import { CoursesCategoryComponent } from './modules/course-category/course-category.component';
import { SideMenuComponent } from './modules/categories-menu/categories-menu.component';
import { ProductsBySubComponent } from './modules/productsBySub/productsBySub.component';

export const routerConfig: Routes = [ 
     {
        path: 'group/:id', 'component': ProductsBySubComponent
    },
    {
        path: 'entertainment',
        component: ProductsBySubComponent,      
        data : {group : {
                name:'Entretenimiento',
                id:7
            }}
    },
    {
        path: 'kids',
        component: ProductsBySubComponent,      
        data : {group : {
                name: 'Infantil',
                id:8
            }}
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '',
                component: CourseCardsComponent
            },
            {
              path: ':id',
              component: CoursesCategoryComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
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