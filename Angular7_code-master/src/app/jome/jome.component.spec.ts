import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JomeComponent } from './jome.component';

describe('JomeComponent', () => {
  let component: JomeComponent;
  let fixture: ComponentFixture<JomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
