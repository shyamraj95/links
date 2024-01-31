

https://stackoverflow.com/questions/77483538/angular-17-http-client-injection

https://stackblitz.com/edit/angular-global-styles?file=src%2Fscss%2Fcomponents%2Fam-components%2F_am-tabs.scss&source=post_page-----e38dc8b84962--------------------------------

// Customizing density
https://m2.material.io/design/layout/applying-density.html#layout
https://stackoverflow.com/questions/54760371/how-to-change-height-in-mat-form-field/75194777#75194777

@mixin apply-all-components-density($density) {
  @include mat.core-density($density);
  @include mat.option-density($density);
  @include mat.optgroup-density($density);
  @include mat.autocomplete-density($density);
  @include mat.badge-density($density);
  @include mat.bottom-sheet-density($density);
  @include mat.button-density($density);
  @include mat.fab-density($density);
  @include mat.icon-button-density($density);
  @include mat.button-toggle-density($density);
  @include mat.card-density($density);
  @include mat.checkbox-density($density);
  @include mat.chips-density($density);
  @include mat.datepicker-density($density);
  @include mat.dialog-density($density);
  @include mat.divider-density($density);
  @include mat.expansion-density($density);
  @include mat.form-field-density($density);
  @include mat.grid-list-density($density);
  @include mat.icon-density($density);
  @include mat.input-density($density);
  @include mat.list-density($density);
  @include mat.menu-density($density);
  @include mat.paginator-density($density);
  @include mat.progress-bar-density($density);
  @include mat.progress-spinner-density($density);
  @include mat.radio-density($density);
  @include mat.select-density($density);
  @include mat.sidenav-density($density);
  @include mat.slide-toggle-density($density);
  @include mat.slider-density($density);
  @include mat.snack-bar-density($density);
  @include mat.sort-density($density);
  @include mat.stepper-density($density);
  @include mat.table-density($density);
  @include mat.tabs-density($density);
  @include mat.toolbar-density($density);
  @include mat.tooltip-density($density);
  @include mat.tree-density($density);
}





service worker
https://github.com/DMezhenskyi/angular-webworker-example

templet outlet
https://github.com/joshuamorony/ng-template-outlet-example

cdkstepper-component

https://medium.com/acute-angular/angular-how-to-build-a-custom-cdkstep-in-a-cdkstepper-component-8b67e9863838
https://stackoverflow.com/questions/53344873/angular-material-stepper-header-lines-styling

  providers: [
 {
 provide: STEPPER_GLOBAL_OPTIONS,
 useValue: {
  displayDefaultIndicatorType: false,
 },
 },
 ],







Mat-Table

https://benjamin-maisonneuve1.medium.com/smart-mat-table-part-3-inject-column-d7994c904383
https://stackblitz.com/edit/mat-table-with-injectable-column?file=src%2Fapp%2Fexample-component.html&source=post_page-----d7994c904383--------------------------------


https://decodedscript.com/angular-material-table-dynamic-columns-and-event/
https://github.com/decodedscript/angular-material-table-dynamic-columns
https://stackoverflow.com/questions/75212133/placing-several-common-columns-for-angular-table-in-an-ng-template
https://stackoverflow.com/questions/38311480/change-css-style-of-angular-material-data-table

https://medium.com/vendasta/wrapping-angular-material-table-styling-it-once-drag-drop-sorting-b1765c995b40
https://github.com/matteson/drag-drop-data-table


tr.mat-header-row {
    height: 35px;
}
tr.mat-row:nth-child(even) {
    background-color: $alternateColor;
}
