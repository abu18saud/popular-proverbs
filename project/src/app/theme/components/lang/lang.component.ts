import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  public selectLanguage(event: any) {
    // TODO
    this.translateService.use(event.target.value);
  }


  ngOnInit(): void {
  }

}
