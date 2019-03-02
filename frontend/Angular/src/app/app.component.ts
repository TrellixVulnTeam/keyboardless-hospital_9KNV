import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KHTest';
  
  private dynamodb;
  private docClient;
  // private params = {
  //   RequestItems: {
  //     TestForm: {
  //       Keys: ['Armando']
  //     }
  //   }
  // }
// private params = {
//   TestForm: 'Patients',
//   Key: {
//     Name: "Armando"
//   }
// };

// private readObs = Observable.create(observer => {
//    this.docClient.scan(this.params, (err, data) => {
//    if (err) {
//        observer.error(err);
//    } else{
//        observer.next(data.Items.map(item => {
//        item.release_date = new Date(item.release_date);
//        console.log(item);
//        return item;
//        }));
//    }
//    });
// });

constructor() {
   // provide your access key and secret access key as obtained in the previous step
   AWS.config.credentials = new AWS.Credentials('AKIAIHKKJVVWYHR36RXQ', 'MrSLDXDufp3b658mLa3UmsSmPkg9dCkIc/wb7bzB', null);
   AWS.config.update({
   region: 'us-east-1'
   });

   this.dynamodb = new AWS.DynamoDB();
   this.docClient = new AWS.DynamoDB.DocumentClient();

   let params = {
     TableName: 'TestForm',
     Key: {
       'Name': 'Armando',
// tslint:disable-next-line: max-line-length
       'UserId': 'amzn1.ask.account.AG2NSCTUCTYRXGXN2AOGSDM6MCFY337L7GP7DGGCKS53U46Q4Z43LZOACCQLJ3XXPB3DOVEPARIWQ3Z362KUP3DJMKEHX4HDCJQMTPA77XOG2I2RLXJZ5XLMDVMQL3XJUNMRBBOP3NIE54W2CON4EL6BLBYAJ5FFHKIYFQEI4PK7EFXRY3TDIRSJSZJ2A7HPZ2RUBXADWFFV56Y'
     }
   }

   this.docClient.get(params, function(err, data){
     if(err){
       console.log(err.stack);
     }
     else{
       console.log(data);
     }
   });

  //  this.dynamodb.batchGetItem(this.params, function(err, data){
  //    if(err) console.log(err.stack);
  //    else console.log(data);
  //  });
}

// public getItems(): Observable<any[]> {
//    return this.readObs;
// }

}
