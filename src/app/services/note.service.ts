import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [];

  notes$: Observable<Note[]>;
  notesSubject = new Subject<Note[]>();

  constructor() {
    this.notes$ = this.notesSubject.asObservable();
    for (let index = 0; index < 55; index++) {
      let note = new Note();
      note.id = "asdfasdfasdfadsf";
      note.title = "Title";
      note.pendingTasks = ["alamdlsf;a9sd87a5sd5", "basdfasdfasdfa087d89as6f0as6df", "casdfasdfasdfdasfasdf"];
      note.completedTasks = ["1", "asdfasdfasdf0978adsf90asdf2", "3"];
      note.lastEdited = new Date();
      this.notes.push(note);
    }
    this.notesSubject.next(this.notes);
  }

  requestNotes() {
    this.notesSubject.next(this.notes);
  }

  addNote(note: Note) {
    var index = this.notes.findIndex(x => x.id === note?.id);
    if (index > 0) {
      this.notes[index] = note;
    }
    else {
      this.notes.push(note);
    }

    this.notesSubject.next(this.notes);
  }

  deleteNote(note: Note) {
    var index = this.notes.findIndex(x => x.id === note?.id);
    this.notes.splice(index ?? -1, 1);
  }
}
