import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'froala-jest';
  public initControls: any;
  public froalaOptions: Object = {
    toolbarInline: true,
    charCounterCount: false,
    toolbarButtons: [
      'fontFamily',
      'fontSize',
      'paragraphFormat',
      'bold',
      'italic',
      'underline',
      'insertLink',
      'color',
      'align',
    ],
  };
  public html = 'initialized...';

  ngAfterViewInit() {
    this.initControls.initialize();
  }

  initializeFroala(initControls: any) {
    this.initControls = initControls;
  }
}
