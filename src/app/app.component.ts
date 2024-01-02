import { Component } from '@angular/core';
import { ApplicationConfigService } from './core/config/application-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(applicationConfigService: ApplicationConfigService){
    // applicationConfigService.setEndpointPrefix("http://localhost:8080/");
  }
}
