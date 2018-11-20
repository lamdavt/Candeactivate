import {NgForm} from '@angular/forms';
import { ComponentCanDeactivate } from '../can-deactivate/component-can-deactivate';

export abstract class FormCanDeactivate extends ComponentCanDeactivate {

 abstract get form(): NgForm;
 canDeactivate(): boolean {
      return this.form.submitted || !this.form.dirty;
  }
}
