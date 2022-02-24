import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FriendsComponent } from "./components/friends/friends.component";
import { LibraryComponent } from "./components/library/library.component";
import { GamesComponent } from "./components/games/games.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { LoginComponent } from "./components/login/login.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { AuthGuard } from "./shared/services/auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
    { path: 'games', component: GamesComponent, outlet:"home" },
    { path: 'library', component: LibraryComponent, outlet:"home" },
    { path: 'friends', component: FriendsComponent, outlet:"home" },
    { path: 'profile', component: ProfileComponent, outlet:"home" },
    {path:'**', redirectTo: 'homepage'}
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
// canActivate: [AuthGuard]
export class AppRoutingModule{

}