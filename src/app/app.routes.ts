import { Routes, Route } from '@angular/router';
import { IniciaSesionComponent} from '../app/components/inicia-sesion/inicia-sesion.component';
import { ResComponent} from '../app/components/res/res.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ListoComponent } from './components/listo/listo.component';
import { AuthGuard } from './guards/auth.guard';
import { SubirPubliComponent } from './components/subir-publi/subir-publi.component';
import { SubirPubliHomeComponent } from './components/subir-publi-home/subir-publi-home.component';
import { PublicidadCComponent } from './components/publicidad-c/publicidad-c.component';
import { SubirPublicasionCategoriaComponent } from './components/subir-publicasion-categoria/subir-publicasion-categoria.component';
import { EditarPubliHomeComponent } from './components/editar-publi-home/editar-publi-home.component'
import { EditarPubliCComponent } from './components/editar-publi-c/editar-publi-c.component'

export const ROUTES: Routes = [
  { path: 'IniciaSesion', component: IniciaSesionComponent},
  { path: 'RestableserPass', component: ResComponent},
  { path: 'Publicidad', component: PublicidadComponent,canActivate: [ AuthGuard ]},
  { path: 'Listo', component: ListoComponent},
  { path: 'Subir', component: SubirPubliComponent,canActivate: [ AuthGuard ]},
  { path: 'Publicidad/SubirHome', component: SubirPubliHomeComponent,canActivate: [ AuthGuard ]},
  { path: 'PublicidadC',  component: PublicidadCComponent,canActivate: [ AuthGuard ]},
  { path: 'Publicidad/SubirCategoria',  component: SubirPublicasionCategoriaComponent,canActivate: [ AuthGuard ]},
  { path: 'Publicidad/EditarHome',  component: EditarPubliHomeComponent,canActivate: [ AuthGuard ]},
  { path: 'Publicidad/EditarC',  component: EditarPubliCComponent,canActivate: [ AuthGuard ]},
  { path: '', component: IniciaSesionComponent}


]
