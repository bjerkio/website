import { TestBed, inject } from '@angular/core/testing';
import { ContentMarcetingService } from './content-marketing.service';


describe('ContentMarcetingService ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentMarcetingService]
    });
  });

  it('should be created', inject([ContentMarcetingService], (service: ContentMarcetingService) => {
    expect(service).toBeTruthy();
  }));
});
