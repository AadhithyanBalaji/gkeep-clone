import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note: Note;
  hoverMode = false;
  constructor(public dialogRef: MatDialogRef<AddNoteComponent>) {
    this.note = new Note();
    this.note.title = '';
    this.note.pendingTasks = [''];
    this.note.completedTasks = [];
    this.note.lastEdited = new Date();
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onTaskFocus(index: number) {
    if (index === this.note.pendingTasks.length - 1)
      this.note.pendingTasks.push('');
  }

  removeTask(index: number) {
    if (this.note.pendingTasks.length > 1)
      this.note.pendingTasks.splice(index, 1);
    else
      this.note.pendingTasks[index] = '';
  }

  onMouseEnter() {
    this.hoverMode = false;
  }

  onMouseExit() {
    this.hoverMode = true;
  }
}
