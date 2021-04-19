import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';

const routes : Routes = [
  { path : 'cadastro-empresas', component : CadastroEmpresasComponent },
  { path : 'consulta-empresas', component : ConsultaEmpresasComponent },
  { path : 'cadastro-funcionarios', component : CadastroFuncionariosComponent },
  { path : 'consulta-funcionarios', component : ConsultaFuncionariosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroEmpresasComponent,
    ConsultaEmpresasComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
