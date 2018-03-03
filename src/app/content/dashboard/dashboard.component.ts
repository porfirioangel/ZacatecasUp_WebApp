import {Component, OnInit, AfterViewInit} from '@angular/core';
import {
  lineChartInterpolatedDemoDataGenerator, discreteBarDemoDataGenerator,
  lineChartDemoDataGenerator, serverLoadDemoData, recentSalesDemoDataGenerator, pieChartDemoData, trafficSourcesDemoData
} from "../data/widgetDemoData.data";
import {fadeInAnimation} from "../../route.animation";

@Component({
  selector: 'ms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  discreteBarDemoData;
  lineChartDemoData;
  lineChartInterpolatedDemoData;
  serverLoadDemoData;
  pieChartDemoData;
  recentSalesProductsDemoData;
  recentSalesDemoData;
  trafficSourcesDemoData;

  constructor() {
  }

  ngOnInit() {

    this.discreteBarDemoData = discreteBarDemoDataGenerator();
    this.lineChartDemoData = lineChartDemoDataGenerator();
    this.lineChartInterpolatedDemoData = lineChartInterpolatedDemoDataGenerator();

    this.serverLoadDemoData = serverLoadDemoData;

    this.pieChartDemoData = pieChartDemoData;

    this.recentSalesDemoData = recentSalesDemoDataGenerator();
    this.recentSalesProductsDemoData = [
      {
        image: 'assets/img/avatars/1.png',
        itemName: 'El Gastón',
        value: 39.54,
      },
      {
        image: 'assets/img/avatars/2.png',
        itemName: 'El Santiago',
        value: 699,
      },
      {
        image: 'assets/img/avatars/3.png',
        itemName: 'La Bestia',
        value: 3113.12,
      },
      {
        image: 'assets/img/avatars/4.png',
        itemName: 'La Chulada',
        value: 87.58,
      }
    ];

    this.trafficSourcesDemoData = trafficSourcesDemoData;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

}
