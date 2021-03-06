import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { CovalentCodeEditorModule } from './platform/code-editor';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CovalentCodeEditorModule);
