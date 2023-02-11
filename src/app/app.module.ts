import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MycharacterComponent } from './mycharacter/mycharacter.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';

import {
  FaIconLibrary, FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { faHeart, faHeartBroken, faHeartCirclePlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CharacterComponent,
    MycharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSearch,
      faHeart,
      faHeartBroken,
      faHeartCirclePlus,
    );
  }
}
