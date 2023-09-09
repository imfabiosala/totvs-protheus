import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarFornecedoresComponent } from './pages/listar/listar-fornecedores.component';
import { CadastrarFornecedorComponent } from './pages/cadastrar/cadastrar-fornecedor.component';
import { VisualizarFornecedorComponent } from './pages/visualizar/visualizar-fornecedor.component';
import { AlterarFornecedorComponent } from './pages/alterar/alterar-fornecedor.component';
import { ExcluirFornecedorComponent } from './pages/excluir/excluir-fornecedor.component';

const routes: Routes = [
  {
    path: 'fornecedores',
    component: ListarFornecedoresComponent
  },
  {
    path: 'fornecedores/cadastrar',
    component: CadastrarFornecedorComponent
  },
  {
    path: 'fornecedores/visualizar/:codigo',
    component: VisualizarFornecedorComponent
  },
  {
    path: 'fornecedores/alterar/:codigo',
    component: AlterarFornecedorComponent
  },
  {
    path: 'fornecedores/excluir/:codigo',
    component: ExcluirFornecedorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fornecedores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
