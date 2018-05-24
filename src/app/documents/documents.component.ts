import { Component, OnInit } from '@angular/core';
import { Document } from './document'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documents: Document[] = [
	  {
	  	title: "sample title",
	  	description: "sample descriptions sample descriptions",
	  	file_url: "some-file.com",
	  	updated_at: "some time",
	  	image_url: "some_url.com"
	  },
	  {
	  	title: "sample title",
	  	description: "sample descriptions sample descriptions",
	  	file_url: "some-file.com",
	  	updated_at: "some time",
	  	image_url: "some_url.com"
	  },
	  {
	  	title: "sample title",
	  	description: "sample descriptions sample descriptions",
	  	file_url: "some-file.com",
	  	updated_at: "some time",
	  	image_url: "some_url.com"
	  }
  ]

}
