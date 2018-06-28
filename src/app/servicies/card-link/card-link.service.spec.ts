import { TestBed, inject } from '@angular/core/testing';
import { CardLinkService } from './card-link.service';


describe('CardLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardLinkService]
    });
  });

  it('should be created', inject([CardLinkService], (service: CardLinkService) => {
    expect(service).toBeTruthy();
  }));
});
