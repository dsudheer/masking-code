import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator, Form } from '@angular/forms';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent implements OnInit {
  displayData: any;
  testForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.patternData();
  }
 /* initializing reactive form */
  private patternData() {
    this.testForm = this.fb.group({
      atm: ["",],
      mobile: [""],
      pancard: [""],
      date: [""],
      dob: [""],
      decNo: [""]
    })
  }
  /* capturing submit event click */
  public onSubmit(value:any) {
    if (this.testForm.valid) {
        console.log(value);
      this.displayData = value;
    }
  };
}
