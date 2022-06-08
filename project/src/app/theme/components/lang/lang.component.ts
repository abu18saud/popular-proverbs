import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit { 
  public langName = '';
  public settings: Settings
  constructor(public appSettings:AppSettings ,public translateService: TranslateService,
    ) { 
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {  
   this.langName = this.getLangName(this.translateService.getDefaultLang());  
  } 

  public changeLang(lang:string){ 
    this.translateService.use(lang); 
    this.langName = this.getLangName(lang);
    if(lang.trim() == "en"){
      this.settings.rtl = false;
    }else{
      this.settings.rtl = true;      
    }
  } 

  public getLangName(lang:string){
    if(lang == 'en'){
      return 'English';
    }
    else if(lang == 'de'){
      return 'German';
    }
    else if(lang == 'fr'){
      return 'French';
    }
    else if(lang == 'ru'){
      return 'Russian';
    }
    else if(lang == 'tr'){
      return 'Turkish';
    }
    else if(lang == 'ar'){
      return 'العربية';
    }    
    else{
      return 'English';
    } 
  }

}
