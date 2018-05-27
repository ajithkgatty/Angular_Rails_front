import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DocumentsComponent } from './documents/documents.component'
import { ProposalListComponent } from './proposals/proposal-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],	
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
