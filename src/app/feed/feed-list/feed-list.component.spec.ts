import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedListComponent } from './feed-list.component';
import { FeedProviderService } from '../services/feed.provider.service';
import {FeedItem, feedItemMocks} from '../models/feed-item.model';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BehaviorSubject} from 'rxjs';

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;
  let feedProvider: FeedProviderService;
  const validFeedItemMocks$: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>([]);
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ FeedListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedListComponent);

    // SET UP SPIES AND MOCKS
    feedProvider = fixture.debugElement.injector.get(FeedProviderService);
    spyOn(feedProvider, 'getFeed').and.returnValue(Promise.resolve(new BehaviorSubject<FeedItem[]>(feedItemMocks)));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch on load', () => {
    expect(feedProvider.getFeed).toHaveBeenCalled();
  });

  it('should display all of the fetched items', () => {
    component.feedItems = feedItemMocks;
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const items = app.querySelectorAll('app-feed-item');
    expect(items.length).toEqual(feedItemMocks.length);
  });
});
