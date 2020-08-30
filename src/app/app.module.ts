import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppChildComponent } from './app-child/app-child.component';
import { AppChildOutNgzoneComponent } from './app-child-out-ngzone/app-child-out-ngzone.component';

@NgModule({
  declarations: [AppComponent, AppChildComponent, AppChildOutNgzoneComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
