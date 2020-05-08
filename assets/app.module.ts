import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from '../../src/assets/app.module';
import { AppComponent } from '../../src/app/app.component';
import { SignUpComponent, ConfirmEqualValidatorDirective } from '../../src/app/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
