import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from './note'
import "rxjs";

@Injectable()
export class NotesService {

  private _notes=[];

  constructor(private _http: Http) {
    this.fetchNotes();
  }

  fetchNotes(){
  // OPTION 2 - USING A CALLBACK
  this._http.get('/notes').subscribe(data => {
    console.log("inside subscribe call back");

    var api_notes=data.json()['notes'];
    for(var i=0; i<api_notes.length; i++){
      var created_at_string = api_notes[i].created_at;

      // *note there is also a json string format that you would have to parse in order to get the date format into what we have received from the api JSON.parse(created_at_json_string);
      // console.log(created_at_string)
      var created_at = new Date(created_at_string);
      //returns date format Fri Aug 11 2017 14:55:06 GMT-0700 (PDT)
      // console.log(created_at);
      var api_note = new Note(api_notes[i].content, created_at);
      this._notes.push(api_note);
      }
    })
  }

  notes(){
    return this.notes;
  }


  // createNote(note){
  //
  //   return this._http.post('/notes', note).subscribe(
  //     (response) => {
  //       this._notes.push(note);
  //       console.log("hello");
  //       console.log(response);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }




}
