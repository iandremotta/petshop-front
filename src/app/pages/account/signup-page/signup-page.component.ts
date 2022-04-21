import { CustomValidator } from './../../../validators/custom.validator';
import { DataService } from './../../../services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public form: FormGroup;
  public busy: boolean = false;
  constructor(private router: Router, private service: DataService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80)
      ])],
      document: ['', Validators.compose([
        Validators.required,
        CustomValidator.isCpf()
      ])],
      email: ['', Validators.compose([
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.busy = true;
    this.service.create(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Bem-vindo');
        this.router.navigate(['/login']);
      }, (err: any) => {
        console.log(err);
        this.busy = false;
      });
  }

}
