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
    console.log(formCadastro.form.value);

    this.httpClient.post(environment.apiUrl + "/funcionarios", formCadastro.form.value)
      .subscribe(
        (data:any[]) => {
          this.mensagens_sucesso = data;
          formCadastro.form.reset();
        },
        (e) => {
          console.log(e);
        }
      );
  }

}
