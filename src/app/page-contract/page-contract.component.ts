import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-contract',
  templateUrl: './page-contract.component.html',
  styleUrls: ['./page-contract.component.scss']
})
export class PageContractComponent implements OnInit {
  contractForm: FormGroup;
  emailPattern = /^\w{1,}@\w{1,5}\.\w{1,3}/;
  constructor() { }

  ngOnInit() {
   this.contractForm =  new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
   });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.contractForm.value.email);
  }
}
