import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CargaImagenesService } from '../app/services/carga-imagenes.service'


import { AppComponent } from './app.component';
import { InicioImagenComponent } from './components/inicio-imagen/inicio-imagen.component';
import { InicioIzquierdaComponent } from './components/inicio-izquierda/inicio-izquierda.component';
import { Secion1Component } from './components/secion1/secion1.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciaSesionComponent } from './components/inicia-sesion/inicia-sesion.component';
import { ResComponent } from './components/res/res.component';
import { from } from 'rxjs';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ListoComponent } from './components/listo/listo.component';
import { NavComponent } from './components/nav/nav.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { SubirPubliComponent } from './components/subir-publi/subir-publi.component';
import { SubirPubliHomeComponent } from './components/subir-publi-home/subir-publi-home.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { DropFileDirective } from './directive/drop-file.directive';
import { PublicidadCComponent } from './components/publicidad-c/publicidad-c.component';
import { SubirPublicasionCategoriaComponent } from './components/subir-publicasion-categoria/subir-publicasion-categoria.component';
import { EditarPubliHomeComponent } from './components/editar-publi-home/editar-publi-home.component';
import { EditarPubliCComponent } from './components/editar-publi-c/editar-publi-c.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioImagenComponent,
    InicioIzquierdaComponent,
    Secion1Component,
    FooterComponent,
    IniciaSesionComponent,
    ResComponent,
    PublicidadComponent,
    ListoComponent,
    NavComponent,
    NavTopComponent,
    SubirPubliComponent,
    SubirPubliHomeComponent,
    DropFileDirective,
    PublicidadCComponent,
    SubirPublicasionCategoriaComponent,
    EditarPubliHomeComponent,
    EditarPubliCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES,{useHash: true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
