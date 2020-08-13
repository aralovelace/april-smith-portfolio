import {Component, HostListener, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  contactForm: FormGroup;
  disabledSubmitButton = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }


  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormMessage: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
