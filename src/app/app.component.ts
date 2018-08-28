import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';
import {InputMaskModule} from 'primeng/inputmask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  display = false;
  title = 'app';
  contatos: Array<any>;
  formulario: FormGroup;

  constructor(private service: AppService,
  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });
  }

showDialog() {
    this.display = true;
}
cancelDialog() {
  this.display = false;
}
}
