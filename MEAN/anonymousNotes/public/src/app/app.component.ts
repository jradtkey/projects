import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import {  Note } from './note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  notes;

  constructor(private service: NotesService){
    this.notes = service.notes();
  }

  onSubmit(){
    this.notes = formData.value.note;
    console.log(this.notes);
    // this.service.createNote(this.note.text);
  }



}
