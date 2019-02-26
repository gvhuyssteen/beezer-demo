import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetailPage } from './track-detail.page';

describe('TrackDetailPage', () => {
  let component: TrackDetailPage;
  let fixture: ComponentFixture<TrackDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
