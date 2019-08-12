import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
