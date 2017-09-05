import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';


export const routes: Routes = [
    { path: 'about' , component: AboutComponent},
    {path: 'news', component: NewsComponent}
];
