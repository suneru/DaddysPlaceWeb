import { Component ,OnInit} from '@angular/core';
import { ReportServiceService } from '../_service/api/report-service.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  ItemsArray: any[] = [];
 totalBill: number  = 0.00;

  ReportObj: any = {
    startDate:"",
    endDate:""}

  constructor(private http:HttpClient,private reportService: ReportServiceService)
  {
  }
  ngOnInit() {
   
   }

   funtiongetReportData()
    {
      this.reportService.getReportView(this.ReportObj.startDate, this.ReportObj.endDate).subscribe((res: any[]) => {
        this.ItemsArray = res;
        this.totalBill=this.ItemsArray[0].totalAmount;
      });
    }
   
}
