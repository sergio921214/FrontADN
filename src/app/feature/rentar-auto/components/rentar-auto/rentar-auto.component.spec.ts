import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentarAutoComponent } from './rentar-auto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RentarAutoComponent', () => {
  let component: RentarAutoComponent;
  let fixture: ComponentFixture<RentarAutoComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentarAutoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  it('debe cambiar url a crear rentar-auto',()=>{
  //   (<HTMLButtonElement>document.getElementById('id_boton_rentar')).click();
  //   console.log(location.path());
  //   expect(location.path()).toBe('rentar-auto/crear');
  // });
});
