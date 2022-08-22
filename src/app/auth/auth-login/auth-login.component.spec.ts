import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLoginComponent } from './auth-login.component';
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ModalController} from '@ionic/angular';

describe('AuthLoginPage', () => {
  let component: AuthLoginComponent;
  let fixture: ComponentFixture<AuthLoginComponent>;
  let modalSpy;
  let modalCtrlSpy;
  beforeEach(waitForAsync(() => {
    modalSpy = jasmine.createSpyObj('Modal', ['present']);
    modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function () {
      return modalSpy;
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ AuthLoginComponent ],
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
    fixture = TestBed.createComponent(AuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // console.log(component)
    expect(component).toBeTruthy();
  });
});
