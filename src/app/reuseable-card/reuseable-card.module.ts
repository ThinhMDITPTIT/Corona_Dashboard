import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfomationCardComponent } from './infomation-card/infomation-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberWithCommaPipe } from 'src/pipes/number-with-comma.pipe';

@NgModule({
  declarations: [InfomationCardComponent, NumberWithCommaPipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [InfomationCardComponent],
})
export class ReuseableCardModule {}
