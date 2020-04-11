import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./paginas/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./paginas/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./paginas/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./paginas/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./paginas/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./paginas/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./paginas/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./paginas/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./paginas/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./paginas/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progressbar',
    loadChildren: () => import('./paginas/progressbar/progressbar.module').then( m => m.ProgressbarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./paginas/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./paginas/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./paginas/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./paginas/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
