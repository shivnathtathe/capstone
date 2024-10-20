import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacualtyComponent } from './facualty.component';

describe('FacualtyComponent', () => {
  let component: FacualtyComponent;
  let fixture: ComponentFixture<FacualtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacualtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacualtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
