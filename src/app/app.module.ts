import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './modules/app/app.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { CourseCardsComponent } from './modules/course-cards/course-cards.component';
import { SideMenuComponent } from './modules/categories-menu/categories-menu.component';
import { CoursesCategoryComponent } from './modules/course-category/course-category.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { MaterialModule } from './material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductsBySubComponent } from './modules/productsBySub/productsBySub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ProductsBySubComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
