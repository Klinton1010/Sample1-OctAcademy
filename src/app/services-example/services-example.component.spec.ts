import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExampleComponent } from './services-example.component';

describe('ServicesExampleComponent', () => {
  let component: ServicesExampleComponent;
  let fixture: ComponentFixture<ServicesExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesExampleComponent]
    });
    fixture = TestBed.createComponent(ServicesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
