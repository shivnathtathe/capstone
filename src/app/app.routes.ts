import { Routes } from '@angular/router';
import { DepartmentsComponent } from './_comonents/departments/departments.component';
import { ComputerComponent } from './_comonents/computer/computer.component';
import { SemesterComponent } from './_comonents/semester/semester.component';
import { IndexComponent } from './_comonents/index/index.component';
import { FacualtyComponent } from './_comonents/facualty/facualty.component';
import { PdfComponent } from './_comonents/pdf/pdf.component';

export const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  { path: 'department', component: DepartmentsComponent },
  { path: 'department/computer', component: ComputerComponent },
  { path: 'department/computer/:id', component: SemesterComponent },
  { path: 'department/computer/:id/index', component: IndexComponent },
  {
    path: 'department/computer/:id/index/faculty',
    component: FacualtyComponent,
  },
  { path: 'department/computer/:id/index/pdf', component: PdfComponent },
];
