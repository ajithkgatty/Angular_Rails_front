import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './/app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposals/proposal-list.component';
import { ProposalNewComponent } from './proposals/proposal-new.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
