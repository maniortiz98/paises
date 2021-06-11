import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorReginComponent } from './pages/por-regin/por-regin.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './componens/pais-tabla/pais-tabla.component';
import { PaiaInputComponent } from './componens/paia-input/paia-input.component';




@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorReginComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaiaInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorReginComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
