import { Component, OnInit } from '@angular/core';
import { QueryService } from '@sisense/sdk-ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'compose-sdk-app';

  constructor(private queryService: QueryService) {
  }

  ngOnInit(): void {
    this.queryService.executeQueryByWidgetId({
      widgetOid: '',
      dashboardOid: '',
      filters:[]
    })
  }
}
