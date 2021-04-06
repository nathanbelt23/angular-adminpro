import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from  '@angular/common/http';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioService } from './services/usuario.service';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    PagesModule,
    SharedModule,
    AuthModule,
    HttpClientModule

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
