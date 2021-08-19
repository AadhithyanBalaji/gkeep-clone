import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note.model';

export class AddNoteData {
  isOpened: boolean;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('note') note: Note;

  @Output() onDelete: EventEmitter<Note> = new EventEmitter<Note>();

  hoverMode = true;
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteNote(note: Note) {
    this.onDelete.next(note);
  }

  onMouseEnter() {
    this.hoverMode = false;
  }

  onMouseExit() {
    this.hoverMode = true;
  }
}
