import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//pipe
import { FiltroCervejaPipe } from './pipes/filtro-cerveja.pipe';
import { PadraoBrasileiroMoedaPipe } from './pipes/padrao-brasileiro-moeda.pipe';
import { EspacoMoedaPipe } from './pipes/espaco-moeda.pipe';
import { UnidadeMedidaPipe } from './pipes/unidade-medida.pipe';
import { FormDebuggerComponent } from './components/form-debugger/form-debugger.component';
import { LoginComponent } from './components/login/login.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EspacoMoedaPipe,
    UnidadeMedidaPipe,
    PadraoBrasileiroMoedaPipe,
    FiltroCervejaPipe,
    NavbarComponent,
    FormDebuggerComponent,
    LoginComponent,
    ExtratoComponent,
    TransferenciaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, //Instancia a aplicação no navegador
    HttpClientModule, //Faz requests HTTP
    FormsModule, //Da suporte ao two way data biding
    RouterModule.forRoot([ //Suporte a rotas
      { path: 'login', component: LoginComponent },
      { path: 'extrato', component: ExtratoComponent },
      { path: 'transferencia', component: TransferenciaComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
