import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarFornecedoresComponent } from './pages/listar/listar-fornecedores.component';
import { CadastrarFornecedorComponent } from './pages/cadastrar/cadastrar-fornecedor.component';
import { VisualizarFornecedorComponent } from './pages/visualizar/visualizar-fornecedor.component';
import { AlterarFornecedorComponent } from './pages/alterar/alterar-fornecedor.component';
import { ExcluirFornecedorComponent } from './pages/excluir/excluir-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarFornecedoresComponent,
    CadastrarFornecedorComponent,
    VisualizarFornecedorComponent,
    AlterarFornecedorComponent,
    ExcluirFornecedorComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoTemplatesModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
