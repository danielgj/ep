import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundLayoutComponent } from './layouts/not-found-layout.component';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ],
    },
    { path: '**', component: NotFoundLayoutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
