import { Injectable } from '@angular/core';

import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable()
export class MqttClientService {


  constructor(private _mqttService: MqttService) {
    
  }

  topic(topic: string): Observable<IMqttMessage> {
    let topicName = `${topic}`;     
    return this._mqttService.observe(topicName);
  }


  
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.publish(topic,message);
  }


  
}
