import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddStudent } from './add-student/add-student';
import { ListStudent } from './student-list/student-list';
export const routes: Routes = [
     {path: '', redirectTo : "Home", pathMatch : 'full'},
    {path: 'Home', component : Home},
    {path : 'Add', component : AddStudent},
    {path: 'List', component : ListStudent}
];
