import { Injectable } from '@angular/core';
import {Note} from "../model/note";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private behaviorSubject = new BehaviorSubject<{message: string, date: string}[]>([]);
  constructor() { }

  setUserNote(userNote: {message: string, date: string}) {
    const newNotes = [...this.behaviorSubject.value, userNote]
    localStorage.setItem('notes', JSON.stringify(newNotes))
    this.behaviorSubject.next(newNotes)
  }

  getUserNotes() {
    const notes = localStorage.getItem('notes')
    this.behaviorSubject.next(notes != null ? JSON.parse(notes) as {message: string, date: string}[] : []);
    return this.behaviorSubject;
  }
}
