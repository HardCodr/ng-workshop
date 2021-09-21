import { Component, OnInit }       from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

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
  }

}
