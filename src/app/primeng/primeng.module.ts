import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SelectButtonModule,
    FieldsetModule,
    CheckboxModule,
    DropdownModule,
  ],
})
export class PrimengModule {}
