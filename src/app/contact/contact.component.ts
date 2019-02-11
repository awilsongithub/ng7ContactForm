import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  /**
   * form group created with .group
   * formBuilder is of type FormBuilder (type = shape)
   * : is for type, = is for default value assignment
   */
  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;
    if(this.messageForm.invalid){
      return;
    } else {
      // this is where you would submit request
      this.success = true;
    }
  }

  // lifecycle hook
  ngOnInit() {
  }

}
