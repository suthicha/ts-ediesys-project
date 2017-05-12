import { Component, OnInit, ViewChild} from '@angular/core';
import { flyInOut } from '../../router.animations';
import { Subject } from 'rxjs/Subject';
import { DocumentType } from '../../models';
import { AuthSession, IAuth } from '../../share';
import { UploadService } from '../../services';

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
  comment: string = "";
  errorTitle: string = "";

  documentSelected: string = '';
  errorText: string;
  subjectHandler = new Subject();
  documentType: Array<Object>;
  auth: IAuth;

  constructor(
    private _authSession: AuthSession,
    private _uploadService: UploadService) { 
      this.auth = <IAuth> this._authSession.getSession;
      this.fillDocumentType();
    }

  ngOnInit() {

    this.subjectHandler.subscribe((nextValue)=>{
      $('#loading').removeClass('spinning');
      this.form.nativeElement.reset();
    });

    $(":file").filestyle(); 
    $('.input-group').addClass('input-group-sm');

  }


  private fillDocumentType() {
      this.documentType = new Array<Object>();
      this.documentType.push({name: '', description: ''});

      if (this.auth.isExportInvoice){
          this.documentType.push({ name: 'EXP', description: 'Export Invoice'})}
      
      if (this.auth.isImportInvoice){
          this.documentType.push({ name: 'IMP', description: 'Import Invoice'})}
      
      if (this.auth.isBOI){
        this.documentType.push({ name: 'BOI', description: 'BOI'})}
      
      if (this.auth.isOther){
        this.documentType.push({ name: 'OTH', description: 'Other'})}

  }

  addFile(){
    let inputfiles = [
        this.inputFile1.nativeElement, 
        this.inputFile2.nativeElement, 
        this.inputFile3.nativeElement];

    let files = Array<any>();
    this.errorText = '';

    inputfiles.forEach(fi => {
      if (fi.files.length > 0)
      {
        files.push(fi.files[0]);
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
        this.errorTitle = "Warning...";
        $('#errorMessage').modal({
          keyboard: false,
          backdrop: 'static'
        });
      return;
    }

    $('#loading').addClass('spinning');
    setTimeout(()=>{
      this._uploadService.upload(files, this.auth.id, 
        this.auth.taxno, this.documentSelected, this.auth.secretkey, this.comment)
        .subscribe((res) => {
          this.form.nativeElement.reset();
          this.comment = "";
          $('#loading').removeClass('spinning');

          this.errorTitle = "You files upload successfuly, Thank you.";
          for(var i=0; i< res.length;i++){
            this.errorText += res[i] + "\t\n";
          }
          $('#errorMessage').modal({
            keyboard: false,
            backdrop: 'static'
          });

        },
        err => {
          console.log(err);
        })

    },2000);

  }

  cboChange(optValue){
     this.documentSelected = optValue;
    }

}
