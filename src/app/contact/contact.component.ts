import {Component, HostListener, } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ContactService} from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title = 'Contact';
  contactForm: FormGroup;
  disabledSubmitButton = true;
  submitInfo = '';
  errorMsg= ''

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private contactService: ContactService ) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormMessage: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.contactService.submitMessage(this.contactForm.value)
      .subscribe(responseData => {
        this.submitInfo = 'Your message has been sent.';
      }, error => {
       this.errorMsg = error;
      });
    this.contactForm.reset();
    this.disabledSubmitButton = true;

  }



}
