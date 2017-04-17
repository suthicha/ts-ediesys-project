import { Component, OnInit, ViewChild,} from '@angular/core';
import { flyInOut } from '../../router.animations';
import { Subject } from 'rxjs/Subject';
import { AuthSession } from '../../share';

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  animations: [ flyInOut() ]
})
export class UploadComponent implements OnInit {

  @ViewChild("form") form;
  @ViewChild("inputFile1") inputFile1;
  @ViewChild("inputFile2") inputFile2;
  @ViewChild("inputFile3") inputFile3;

  documentType: Array<string>;
  documentSelected: string;
  errorText: string;
  subjectHandler = new Subject();

  constructor(
    private _authSession: AuthSession) { }

  ngOnInit() {

    this.subjectHandler.subscribe((nextValue)=>{
      $('#loading').removeClass('spinning');
    });

    $(":file").filestyle(); 
    $('.input-group').addClass('input-group-sm');

    this.documentSelected = '';
    this.documentType = [];

    let auth = this._authSession.getSession;

    
  }

  addFile(){

    let inputfiles = [this.inputFile1.nativeElement, this.inputFile2.nativeElement, this.inputFile3.nativeElement];
    let files = Array<any>();
    this.errorText = '';

    inputfiles.forEach(fi => {
      if (fi.files.length > 0)
      {
        files.push(fi);
      }
    })

    if (files.length == 0){ 
      this.errorText = '* Please choose file to upload.';
    }

    if (this.documentSelected == ''){
      if (this.errorText != '')
      {
        this.errorText += '\t\n';
      }
      this.errorText += '* Please select document tyle.';
    }
    
    if (this.errorText != '')
    {
        $('#errorMessage').modal({
          keyboard: false,
          backdrop: 'static'
        });
      return;
    }

    $('#loading').addClass('spinning');
    for(var i=0; i < files.length;i++){

      let fiToUpload = files[0];
      
    }

    setTimeout(()=>{
       $('#loading').removeClass('spinning');
      this.form.nativeElement.reset();
    }, 20000);
    


    // if (fi.files && fi.files[0]){
    //   let fileToUpload = fi.files[0];

    //   if (fileToUpload.size > 1024000){
    //     alert('Your file exceed 1 Mb.');
    //     return;
    //   }

    //   if (this.documentSelected == '')
    //   {
       
    //     return;
    //   }

    //   console.log(fileToUpload);
    //   this.form.nativeElement.reset();
    // }

  }

  cboChange(event){
      this.documentSelected = event.target.value;
    }

}
