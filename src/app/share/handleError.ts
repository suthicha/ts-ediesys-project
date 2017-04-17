import { Observable } from "rxjs/Observable";

export function handleError(error: any) {
      
      var applicationError = error.headers.get('Application-Error');
      var serverError = error.json();
      var modelStateErrors: string = '';

      if (!serverError.type) {
          console.log(serverError);
          for (var key in serverError) {
              if (serverError[key])
                  modelStateErrors += serverError[key] + '\n';
          }
      }

      modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

      return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }