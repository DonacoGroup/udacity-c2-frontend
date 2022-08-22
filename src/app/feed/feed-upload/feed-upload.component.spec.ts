import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedUploadComponent } from './feed-upload.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ModalController} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';

describe('FeedUploadPage', () => {
  let component: FeedUploadComponent;
  let fixture: ComponentFixture<FeedUploadComponent>;
  let modalSpy;
  let modalCtrlSpy;
  beforeEach(waitForAsync(() => {
    modalSpy = jasmine.createSpyObj('Modal', ['present']);
    modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function () {
      return modalSpy;
    });
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      declarations: [ FeedUploadComponent ],
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
    fixture = TestBed.createComponent(FeedUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
