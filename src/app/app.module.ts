import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { MDBBootstrapModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
