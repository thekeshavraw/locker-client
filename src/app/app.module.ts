import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './shared/services/storage.service';
import { BroadcastService } from './shared/services/broadcast.service';
import { AboutComponent } from './views/public/about/about.component';
import { ContactComponent } from './views/shared/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ContactComponent

	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		StorageService,
		BroadcastService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
