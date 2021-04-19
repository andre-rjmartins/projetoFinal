import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-consulta-empresas',
  templateUrl: './consulta-empresas.component.html',
  styleUrls: ['./consulta-empresas.component.css']
})
export class ConsultaEmpresasComponent implements OnInit {

  listaEmpresas = [];

  empresa = {
    idEmpresa : 0,
    nomeFantasia : "",
    razaoSocial : "",
    cnpj : ""
  };

  mensagens_erro = [];
  mensagens_sucesso = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.consultarEmpresas();
  }

  consultarEmpresas() : void {

    this.httpClient.get(environment.apiUrl + "/empresas")
      .subscribe(
        (data:any[]) => {
          this.listaEmpresas = data;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  obterEmpresa(idEmpresa) : void {

    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    this.httpClient.get(environment.apiUrl + "/empresas/" + idEmpresa)
      .subscribe(
        (data:any) => {
          this.empresa = data;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  atualizarEmpresa(formEdicao) : void {

    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    this.httpClient.put(environment.apiUrl + "/empresas", formEdicao.form.value)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
          this.consultarEmpresas();
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

  excluirEmpresa(idEmpresa) : void {

    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    this.httpClient.delete(environment.apiUrl + "/empresas/" + idEmpresa)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
          this.consultarEmpresas();
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

}
