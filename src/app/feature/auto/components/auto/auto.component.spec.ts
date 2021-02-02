import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoComponent } from './auto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AutoComponent', () => {
  let component: AutoComponent;
  let fixture: ComponentFixture<AutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //  it('debe cambiar url a crear auto',()=>{
  //   (<HTMLButtonElement>document.getElementById('id_boton_crear')).click();
  //   console.log(location.path());
  //   expect(location.path()).toBe('auto/crear');
  // });
});
