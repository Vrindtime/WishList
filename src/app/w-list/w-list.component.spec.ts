import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WListComponent } from './w-list.component';

describe('WListComponent', () => {
  let component: WListComponent;
  let fixture: ComponentFixture<WListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WListComponent]
    });
    fixture = TestBed.createComponent(WListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
