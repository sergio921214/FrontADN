import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReqResService } from '../../../../shared/servicios/req-res.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  registerForm: FormGroup;
  alertSuccess = false;

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private formBuilder: FormBuilder,
    private reqResService: ReqResService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required],
    });
  }

  submit() {
    if (!this.registerForm.valid) {
      return;
    }
    this.reqResService.registerUser(this.registerForm.value)
      .subscribe(resp => {
        console.log(resp);
        this.alertSuccess = true;
      });

  }

  onNoClick(): void {
    this.alertSuccess = false;
    this.dialogRef.close();
  }
}
