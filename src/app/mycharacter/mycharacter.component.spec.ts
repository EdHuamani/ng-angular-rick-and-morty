import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycharacterComponent } from './mycharacter.component';

describe('mycharacterComponent', () => {
  let component: MycharacterComponent;
  let fixture: ComponentFixture<MycharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycharacterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MycharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
