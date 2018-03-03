import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardV1Component} from './content/custom-pages/dashboard-v1/dashboard-v1.component';
import {AdminComponent} from './core/admin/admin.component';
import {ButtonsComponent} from './content/components/buttons/buttons.component';
import {CardsComponent} from './content/components/cards/cards.component';
import {DialogsComponent} from './content/components/dialogs/dialogs.component';
import {GridListComponent} from './content/components/grid-list/grid-list.component';
import {ListsComponent} from './content/components/lists/lists.component';
import {MenuComponent} from './content/components/menu/menu.component';
import {SliderComponent} from './content/components/slider/slider.component';
import {SnackBarComponent} from './content/components/snack-bar/snack-bar.component';
import {TooltipComponent} from './content/components/tooltip/tooltip.component';
import {FormElementsComponent} from './content/forms/form-elements/form-elements.component';
import {FormWizardComponent} from './content/forms/form-wizard/form-wizard.component';
import {IconsComponent} from './content/icons/icons.component';
import {Level5Component} from './content/levels/level5/level5.component';
import {GoogleMapsComponent} from './content/maps/google-maps/google-maps.component';
import {SimpleTableComponent} from './content/tables/simple-table/simple-table.component';
import {FixedHeaderTableComponent} from './content/tables/fixed-header-table/fixed-header-table.component';
import {LoginComponent} from './content/custom-pages/login/login.component';
import {RegisterComponent} from './content/custom-pages/register/register.component';
import {ForgotPasswordComponent} from './content/custom-pages/forgot-password/forgot-password.component';
import {EditorComponent} from './content/editor/editor.component';
import {DashboardComponent} from './content/dashboard/dashboard.component';
import {DragAndDropComponent} from './content/drag-and-drop/drag-and-drop.component';
import {InboxComponent} from './content/apps/inbox/inbox.component';
import {CalendarComponent} from './content/apps/calendar/calendar.component';
import {ChatComponent} from './content/apps/chat/chat.component';
import {AutocompleteComponent} from './content/components/autocomplete/autocomplete.component';
import {LocalesComponent} from './content/locales/locales.component'


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'locales',
        component: LocalesComponent,
        pathMatch: 'full'
      },


      {
        path: 'apps/inbox',
        component: InboxComponent
      },
      {
        path: 'apps/calendar',
        component: CalendarComponent
      },
      {
        path: 'apps/chat',
        component: ChatComponent
      },
      {
        path: 'dashboard-v1',
        component: DashboardV1Component,
      },
      {
        path: 'components/autocomplete',
        component: AutocompleteComponent
      },
      {
        path: 'components/buttons',
        component: ButtonsComponent
      },
      {
        path: 'components/cards',
        component: CardsComponent
      },
      {
        path: 'components/dialogs',
        component: DialogsComponent
      },
      {
        path: 'components/grid-list',
        component: GridListComponent
      },
      {
        path: 'components/lists',
        component: ListsComponent
      },
      {
        path: 'components/menu',
        component: MenuComponent
      },
      {
        path: 'components/slider',
        component: SliderComponent
      },
      {
        path: 'components/snack-bar',
        component: SnackBarComponent
      },
      {
        path: 'components/tooltips',
        component: TooltipComponent
      },
      {
        path: 'forms/form-elements',
        component: FormElementsComponent
      },
      {
        path: 'forms/form-wizard',
        component: FormWizardComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'level1/level2/level3/level4/level5',
        component: Level5Component
      },
      {
        path: 'maps/google-maps',
        component: GoogleMapsComponent
      },
      {
        path: 'tables/simple-table',
        component: SimpleTableComponent
      },
      {
        path: 'tables/fixed-header-table',
        component: FixedHeaderTableComponent
      },
      {
        path: 'drag-and-drop',
        component: DragAndDropComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
