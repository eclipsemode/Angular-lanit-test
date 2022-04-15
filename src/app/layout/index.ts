export * from './time/time.component';
export * from './clock/clock.component';
export * from './layout/layout.component';
export * from './header/header.component';
export * from './footer/footer.component';

import { ClockComponent } from './clock/clock.component';
import { TimeComponent } from './time/time.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const LAYOUTS = [
    ClockComponent,
    TimeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
];
