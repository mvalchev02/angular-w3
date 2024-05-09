import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Note {
    id: number;
    title: string;
    content: string;
    isActive: boolean;
  }

@Component({
  selector: 'app-tefter-shan',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './tefter-shan.component.html',
  styleUrls: ['./tefter-shan.component.css'],
})
export class TefterShanComponent {
    title = 'Тефтер-шън';

  public notes: Note[] = [];
  public newTitle = '';
  public newContent = '';
  public editMode = false;
  private editedNoteId: number = 0;

  
  public addNote() {
    if (this.newTitle.trim() && this.newContent.trim()) {
      let newNoteId: number;
      if (this.notes.length > 0) {
        newNoteId = this.notes[this.notes.length - 1].id + 1;
      } else {
        newNoteId = 1;
      }  
      this.notes.push({
        id: newNoteId,
        title: this.newTitle,
        content: this.newContent,
        isActive: false
      });
      this.resetForm();
    }
  }
  
  private resetForm() {
    this.newTitle = '';
    this.newContent = '';
  }

  public activateNote(note: Note) {
    for (let i = 0; i < this.notes.length; i++) {
      this.notes[i].isActive = this.notes[i] === note ? true : false;
    }
  }
  
  public removeNote(note: Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
  }

  public editNote(note: Note) {
    this.editMode = true;
    this.newTitle = note.title;
    this.newContent = note.content;
    this.editedNoteId = note.id;
  }

}
