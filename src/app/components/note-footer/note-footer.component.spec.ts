import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFooterComponent } from './note-footer.component';

describe('NewNoteBoxComponent', () => {
  let component: NoteFooterComponent;
  let fixture: ComponentFixture<NoteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
