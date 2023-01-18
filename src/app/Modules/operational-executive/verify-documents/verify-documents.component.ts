import { Component } from '@angular/core';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';


@Component({
  selector: 'app-verify-documents',
  templateUrl: './verify-documents.component.html',
  styleUrls: ['./verify-documents.component.scss']
})
export class VerifyDocumentsComponent {

  // ngAfterViewInit() {
  //   const viewer = new GcPdfViewer("#viewer", {
  //     workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
  //     restoreViewStateOnLoad: false
  //   });
  //   viewer.addDefaultPanels();
  // }

}
