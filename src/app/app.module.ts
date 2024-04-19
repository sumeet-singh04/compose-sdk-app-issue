import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SISENSE_CONTEXT_CONFIG_TOKEN, SdkUiModule, SisenseContextConfig } from '@sisense/sdk-ui-angular';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

export const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: '<instance url>', // replace with the URL of your Sisense instance
  token: '<api token>', // replace with the API token of your user account
};

@NgModule({
  imports: [
    BrowserModule,
    SdkUiModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ]),
  ],
  declarations: [AppComponent],
  providers: [
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
