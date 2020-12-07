import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(t => t.TodosModule)
  },
  {
    path: '**',
    redirectTo: 'todos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
