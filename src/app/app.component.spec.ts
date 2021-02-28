import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NotesContainerComponent} from "./components/notes-container/notes-container.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent,
        NotesContainerComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'advanced-notes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('advanced-notes');
  });

  it('should render app-notes-container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content app-notes-container')).toBeDefined();
  });
});
