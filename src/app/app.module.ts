import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './/app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService} from './documents/document.service'
import { ProposalListComponent } from './proposals/proposal-list.component';
import { ProposalNewComponent } from './proposals/proposal-new.component';
import { ProposalShowComponent } from './proposals/proposal-show.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
