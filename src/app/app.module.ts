import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './shared/components/child/child.component';
import { ProductsComponent } from './shared/components/child/products/products.component';
import { PostsComponent } from './shared/components/child/posts/posts.component';
import { UsersComponent } from './shared/components/child/users/users.component';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { StdForm1Component } from './shared/components/std-form1/std-form1.component';
import { StdTable1Component } from './shared/components/std-table1/std-table1.component';
import { StdForm2Component } from './shared/components/std-form2/std-form2.component';
import { StdTable2Component } from './shared/components/std-table2/std-table2.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductsComponent,
    PostsComponent,
    UsersComponent,
    StdFormComponent,
    StdTableComponent,
    StdForm1Component,
    StdTable1Component,
    StdForm2Component,
    StdTable2Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
