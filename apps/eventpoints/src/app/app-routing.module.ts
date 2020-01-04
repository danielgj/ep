import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundLayoutComponent } from './layouts/not-found-layout.component';
import { MainLayoutComponent } from './layouts/main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
    },
    { path: '**', component: NotFoundLayoutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
