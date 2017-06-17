import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { DonationComponent} from './donation/donation.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';

import { AboutComponent } from './about/about.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'donation', component: DonationComponent},
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path : 'about', component: AboutComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    DonationComponent,
    TypographyComponent,
    MapsComponent,

    AboutComponent
]
