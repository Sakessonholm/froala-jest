import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
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
