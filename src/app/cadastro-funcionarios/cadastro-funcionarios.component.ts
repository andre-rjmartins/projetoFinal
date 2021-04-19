import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  mensagens_sucesso = [];
  mensagens_erro = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarFuncionario(formCadastro) : void {

    this.mensagens_sucesso = [];
    this.mensagens_erro = [];

    this.httpClient.post(environment.apiUrl + "/funcionarios", formCadastro.form.value)
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
