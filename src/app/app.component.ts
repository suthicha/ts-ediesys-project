import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';


  showmenu(){
 
    let body = document.getElementsByTagName('body')[0]

    if (body.classList.contains('hide-sidedrawer'))
    {
      body.classList.remove("hide-sidedrawer");
    }else{
      body.classList.add("hide-sidedrawer");      
    }
    
  }

  showSubmenu(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var ul = target.nextElementSibling;

    if (ul.style.display == 'block')
    {
      ul.style.display = 'none';
    }else
    {
      ul.style.display = 'block';
    }
    
  }

}
