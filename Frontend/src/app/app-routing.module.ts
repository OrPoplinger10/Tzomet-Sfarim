import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ListComponent } from './components/data-area/list/list.component';
import { InsertComponent } from './components/data-area/insert/insert.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { BooksComponent } from './components/data-area/books/books.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "books", component: BooksComponent },
    { path: "search", component: ListComponent },
    { path: "insert", component: InsertComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
