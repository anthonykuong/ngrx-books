import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Credentials } from '@example-app/auth/models';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'bc-login-form',
  template: `
    
    
    <mat-card>
      <mat-card-title>
        <img src ="https://raw.githubusercontent.com/anthonykuong/ngrx-books/master/projects/ngrx-books/src/assets/images/anthonykuong.JPG">
      </mat-card-title>

      <mat-card-subtitle>
        Anthony's Google Playground Book Search
      </mat-card-subtitle>
      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field>
              <mat-icon>account_circle</mat-icon>
              <input
                type="text"
                matInput
                value="ngrx"
                placeholder="Username"
                formControlName="username"
              >
            </mat-form-field>

          </p>

          <p>
            <mat-form-field>
              <mat-icon>directions_bike</mat-icon>
              <input
                type="password"
                matInput
                value="test"
                placeholder="Password"
                formControlName="password"
              />
            </mat-form-field>
          </p>

          <p *ngIf="errorMessage" class="loginError">
            {{ errorMessage }}
          </p>

          <p class="loginButtons">
            <button type="submit" mat-button mat-raised-button color="primary" >Login</button>
          </p>
        </form>
      </mat-card-content>

      <mat-card-actions>
        <p class="footerFont">
          Please use 'ngrx' as the Username, and  'test' for the password
        </p>
        </mat-card-actions>
      <mat-card-footer>
        <b>Anthony Ku Ong:</b>  <a href='www.anthonykuong.com'>www.anthonykuong.com</a>
        <br/>
        Description: My Personal webpage and Blog that showcases my Drawings and what I am currently doing.
        <br/>
        <br/>
        <b>COVID-19-Dashboard:</b>  <a href='https://anthonykuong.github.io/COVID-19-Dashboard/'>https://anthonykuong.github.io/COVID-19-Dashboard/</a>
        <br/>
        Description: This app shows COVID-19 world case numbers and metrics . It is implemented using Angular was generated with Ignite UI CLI version 5.0.1.
        <br/>
        <br/>
        <b>NGRX-Books:</b> <a href='https://anthonykuong.github.io/ngrx-books/#/login'>https://anthonykuong.github.io/ngrx-books/#/login</a>
        <br/>
        Description: This app is a book collection manager. The user can authenticate, use the Google Books API to search for books and add them to their collection. It is implemented using Angular and uses ngrx.

      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 72px 0;
      }
      
      .footerFont{
        font-size: 12px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-footer {
        margin: 125px 0;
      }
      
      mat-card-actions,
      mat-card-title,
      mat-card-subtitle,
      mat-card-content {
        display: flex;
        justify-content: center;
        color:darkblue;
      }

      .loginError {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }

      .loginButtons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    `,
  ],
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage!: string | null;

  @Output() submitted = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl('ngrx'),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
