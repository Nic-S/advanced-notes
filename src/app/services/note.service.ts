import { Injectable } from '@angular/core';
import {fromObjectToNote} from "../model/note";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) { }

  getOthersNotes = () => this.httpClient.get<object[]>('assets/mock/othersNoteData.json')
  .pipe(
    map(notes => notes.map(fromObjectToNote).sort((a, b) => {
    // the ISO8601 string representation can be sorted like any other string;
    return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    })
    )
  )
}

