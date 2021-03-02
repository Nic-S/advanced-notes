import { Injectable } from '@angular/core';
import { fromObjectToNote, fromOutNoteToNote, Note } from '../model/note';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {}

  getOthersNotes = () =>
    this.httpClient.get<object[]>('assets/mock/othersNoteData.json').pipe(map(notes => notes.map(fromObjectToNote)));

  getUserNotes = () => this.localStorageService.getUserNotes().pipe(map(notes => notes.map(fromOutNoteToNote)));

  // take latest emit from both observable and return a sorted merged array
  getNotes = () =>
    combineLatest([this.getOthersNotes(), this.getUserNotes()]).pipe(
      map(([otherNotes, userNotes]) => [...otherNotes, ...userNotes].sort(this.sortNote))
    );

  setUserNote = (note: Pick<Note, 'message' | 'date'>) => this.localStorageService.setUserNote(note);

  // inverted order for avoid programmatically set overflow bar at end, overflow bar at end with css
  private sortNote = (a: Note, b: Note) => {
    // the ISO8601 string representation can be sorted like any other string;
    return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
  };
}
