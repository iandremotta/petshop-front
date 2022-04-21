import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  constructor(private _router: Router, private fb: FormBuilder, private service: DataService, private toastr: ToastrService) {
    this.form = this.fb.group({
      document: ['', Validators.compose([
        Validators.required,
        CustomValidator.isCpf,
        Validators.minLength(14),
        Validators.maxLength(14)
      ])]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.busy = true,
      this.service.resetPassword(this.form.value).subscribe((data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Senha restaurada');
        this._router.navigate(['/login']);
      }, (err: any) => {
        console.log(err);
        this.busy = false;
      });
  }
}
