import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from '../models/note.model';
import { AddNoteComponent } from '../note/add-note/add-note.component';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private _noteService: NoteService,
    private _dialog: MatDialog) {
    this._noteService.notes$.subscribe((data) => {
      this.notes = data;
    });
    this._noteService.requestNotes();
  }

  ngOnInit(): void {
  }

  addNote() {
    this._dialog.open(AddNoteComponent, {
      width: '500px'
    });
  }

  noteDeleted(note: Note) {
    this._noteService.deleteNote(note);
  }
}
