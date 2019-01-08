import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

declare const monaco: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("editor") editorContent: ElementRef;

  ngAfterViewInit() {
    const onGotAmdLoader = () => {
      // Load monaco
      (<any>window).require(["vs/editor/editor.main"], () => {
        this.initMonaco();
      });
    };

    // Load AMD loader if necessary
    if (!(<any>window).require) {
      const loaderScript = document.createElement("script");
      loaderScript.type = "text/javascript";
      loaderScript.src = "vs/loader.js";
      loaderScript.addEventListener("load", onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

    // Will be called once monaco library is available
    initMonaco() {
      const myDiv: HTMLDivElement = this.editorContent.nativeElement;
      const editor = monaco.editor.create(myDiv, {
        value: [
          "function x() {",
          "\tconsole.log('Hello world!');",
          "}"
        ].join("\n"),
        language: "javascript",
        theme: "vs-dark"
      });
    }
}
