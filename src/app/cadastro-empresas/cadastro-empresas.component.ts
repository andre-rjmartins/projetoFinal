import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-empresas',
  templateUrl: './cadastro-empresas.component.html',
  styleUrls: ['./cadastro-empresas.component.css']
})
export class CadastroEmpresasComponent implements OnInit {

  mensagens_erro = [];
  mensagens_sucesso = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarEmpresa(formCadastro) : void {

    this.httpClient.post(environment.apiUrl + "/empresas", formCadastro.form.value)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
          formCadastro.form.reset();
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

}
