import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxBComponent } from './ax-b.component';

describe('AxBComponent', () => {
  let component: AxBComponent;
  let fixture: ComponentFixture<AxBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
