import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRegisterComponent } from './auth-register.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ModalController} from '@ionic/angular';

describe('AuthRegisterPage', () => {
  let component: AuthRegisterComponent;
  let fixture: ComponentFixture<AuthRegisterComponent>;
  let modalSpy;
  let modalCtrlSpy;
  beforeEach(waitForAsync(() => {
    modalSpy = jasmine.createSpyObj('Modal', ['present']);
    modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function () {
      return modalSpy;
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ AuthRegisterComponent ],
      providers: [
        {
          provide: ModalController,
          useValue: modalCtrlSpy
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing form validity
  it('form should be invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
});
