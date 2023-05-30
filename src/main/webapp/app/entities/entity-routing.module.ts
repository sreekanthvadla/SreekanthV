import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'sreekanthvApp.region.home.title' },
        loadChildren: () => import('./region/region.module').then(m => m.RegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'sreekanthvApp.country.home.title' },
        loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'sreekanthvApp.location.home.title' },
        loadChildren: () => import('./location/location.module').then(m => m.LocationModule),
      },
      {
        path: 'department',
        data: { pageTitle: 'sreekanthvApp.department.home.title' },
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
      },
      {
        path: 'task',
        data: { pageTitle: 'sreekanthvApp.task.home.title' },
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'sreekanthvApp.employee.home.title' },
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'sreekanthvApp.job.home.title' },
        loadChildren: () => import('./job/job.module').then(m => m.JobModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'sreekanthvApp.jobHistory.home.title' },
        loadChildren: () => import('./job-history/job-history.module').then(m => m.JobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
