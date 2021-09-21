import { Component, OnInit }                  from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  formHasBeenSubmitted = false;

  valueToBeUpdated = '';

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm.valueChanges.subscribe((data) => {
      console.log(data);
    });

  }

  onSubmit() {
    console.log(this.profileForm);
    this.formHasBeenSubmitted = true;
  }

  updateLastName(value: string) {
    const field = this.profileForm.get('lastName');
    field?.setValue(value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
