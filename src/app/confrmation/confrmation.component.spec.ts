import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrmationComponent } from './confrmation.component';

describe('ConfrmationComponent', () => {
  let component: ConfrmationComponent;
  let fixture: ComponentFixture<ConfrmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfrmationComponent]
    });
    fixture = TestBed.createComponent(ConfrmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
