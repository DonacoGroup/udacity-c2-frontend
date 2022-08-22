import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedUploadButtonComponent } from './feed-upload-button.component';
import {ModalController} from '@ionic/angular';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FeedUploadButtonPage', () => {
  let component: FeedUploadButtonComponent;
  let fixture: ComponentFixture<FeedUploadButtonComponent>;
  let modalSpy;
  let modalCtrlSpy;
  beforeEach(waitForAsync(() => {
    modalSpy = jasmine.createSpyObj('Modal', ['present']);
    modalCtrlSpy = jasmine.createSpyObj('ModalController', ['create']);
    modalCtrlSpy.create.and.callFake(function () {
      return modalSpy;
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FeedUploadButtonComponent ],
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
    fixture = TestBed.createComponent(FeedUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
