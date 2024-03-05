import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfilesComponent } from './profiles/profiles.component';

export const routes: Routes = [
    {path:'user',component: UserComponent},
    {path:'profiles',component: ProfilesComponent}

];