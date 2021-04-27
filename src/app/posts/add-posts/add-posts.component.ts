import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  postForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup( {
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  onAddPush(): void {
    if (!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value);
  }

  showDescriptionErrors(): string {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return 'Description is Required';
      }
      if (descriptionForm.errors.minlength) {
        return 'Description should be minimum of 10 characters';
      }
    }
  }
}
