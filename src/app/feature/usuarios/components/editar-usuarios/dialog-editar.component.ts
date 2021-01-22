import { Component, Inject, Optional, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReqResService } from '../../../../shared/servicios/req-res.service';

export interface UsersData {
  name: string;
  id: number;
    
}


@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
})
export class DialogEditarComponent implements OnInit{
  editForm: FormGroup;
  alertSuccess= false;

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  
  localData:any;

  constructor(
    public dialogRef: MatDialogRef<DialogEditarComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    private formBuilder: FormBuilder,
    private reqResService: ReqResService
    ) {
    console.log(data);
    this.localData = {...data};
    
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      email: [ [Validators.required, Validators.pattern(this.emailRegx)]],
      first_name: [ Validators.required],
      last_name: [ Validators.required]

    });
  }

  submit() {
    if (!this.editForm.valid) {
      return;
    }
    this.reqResService.editUser(this.editForm.value,this.localData.id)
    .subscribe( resp => {
      console.log(resp);
      this.alertSuccess = true; 
    });
    
  }

  closeDialog(){
    this.alertSuccess = false; 
    this.dialogRef.close({event:'Cancel'});
  }

}