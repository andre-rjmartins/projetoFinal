import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consulta-funcionarios',
  templateUrl: './consulta-funcionarios.component.html',
  styleUrls: ['./consulta-funcionarios.component.css']
})
export class ConsultaFuncionariosComponent implements OnInit {

  listaFuncionarios = [];
  
  empresa = {
    idEmpresa : 0, 
    nomeFantasia : '', 
    razaoSocial : '', 
    cnpj : ''
  };

  funcionario = {
    idFuncionario : 0,
    nome : "",
    cpf : "",
    dataAdmissao : "",
    salario : "",
    empresa : this.empresa
    };

    mensagens_erro = [];
    mensagens_sucesso = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.consultarFuncionarios();
  }

  consultarFuncionarios() : void {

    this.httpClient.get(environment.apiUrl + "/funcionarios")
      .subscribe(
        (data:any[]) => {
          this.listaFuncionarios = data;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  obterFuncionario(idFuncionario) : void {

    this.mensagens_erro = [];
    this.mensagens_sucesso = [];

    this.httpClient.get(environment.apiUrl + "/funcionarios/" + idFuncionario)
      .subscribe(
        (data:any) => {
          this.funcionario = data;
        },
        (e) => {
          console.log(e);
        }
      );
  }

  atualizarFuncionario(formEdicao) : void {

    this.mensagens_erro = [];
    this.mensagens_sucesso = [];

    this.httpClient.put(environment.apiUrl + "/funcionarios", formEdicao.form.value)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

  excluirFuncionario(idFuncionario) : void {

    this.mensagens_erro = [];
    this.mensagens_sucesso = [];

    this.httpClient.delete(environment.apiUrl + "/funcionarios/" + idFuncionario)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
        },
        (e) => {
          this.mensagens_erro = e.error;
        }
      );
  }

}
