import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartnerInterFace } from '../interfaces/partner.interface';
import { PartnersService } from '../servicies/partners/partners.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-structure',
  templateUrl: './page-structure.component.html',
  styleUrls: ['./page-structure.component.scss']
})
export class PageStructureComponent implements OnInit, OnDestroy {
  partnersSubscription: Subscription;
  partnersList: PartnerInterFace[] = [];
  partnersListShort: PartnerInterFace[] = [];
  showingQuantity = 4; // how many partners show;
  paginationDotsQuantity: any[] = [];
  constructor(private partnersService: PartnersService) { }

  ngOnInit() {
    this.getPartners();
  }
  ngOnDestroy() {
    if (this.partnersSubscription) {
      this.partnersSubscription.unsubscribe();
    }
  }

  getPartners(): void {
    this.partnersSubscription = this.partnersService.getPartners().subscribe(partnersList => {
      this.partnersList = partnersList;
      this.sliceList(0);
      this.createPagination();

    });
  }
  createPagination(): void {
    this.paginationDotsQuantity = new Array(Math.ceil(this.partnersList.length / this.showingQuantity));
  }

  /* change displayd partners by pagination
    and create default partners list to display
  */
  sliceList(idx: number): void {
    const range = {
      start: idx ? idx * this.showingQuantity : idx,
      end: (idx ? idx * this.showingQuantity : idx) + this.showingQuantity
    };
    this.partnersListShort = this.partnersList.slice(range.start, range.end);
  }

}
