import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CollectionPageComponent,
  FindBookPageComponent,
  ViewBookPageComponent,
} from '@example-app/books/containers';
import { BookExistsGuard } from '@example-app/books/guards';

export const routes: Routes = [
  {
    path: 'collection',
    component: CollectionPageComponent,
    data: { title: 'Collection' },
  },
  {
    path: 'find',
    component: FindBookPageComponent,
    data: { title: 'Find book' },
  },
  {
    path: ':id',
    component: ViewBookPageComponent,
   // canActivate: [BookExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: '',
    component: FindBookPageComponent,
    data: { title: 'Find book' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
