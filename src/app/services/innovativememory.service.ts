import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, timeout, throwError, catchError} from "rxjs";
import {Config} from "../../configs/config";

@Injectable({
  providedIn: 'root'
})
export class InnovativememoryService {
  constructor(private http:HttpClient) { }

  upload(fileToImport:File):Observable<string>
  {
    const formData:FormData = new FormData();
    formData.append("files",fileToImport,fileToImport.name);
    const  headers:HttpHeaders = new HttpHeaders();
    headers.append("Accept","application/json");
    return this.http.post<string>(Config.apiUrl+"upload",formData,{headers,responseType:'text' as 'json'});
  }
  uploadAudio(audiofile:File) :Observable<any>{
    const formData:FormData = new FormData();
    formData.append("file",audiofile,audiofile.name);
    const  headers:HttpHeaders = new HttpHeaders();
    headers.append("Accept","application/json");
    return this.http.post<string>(Config.apiUrl+"transcribe",formData,{headers,responseType:'text' as 'json'});
  }

  chat(question:string):Observable<string>{
    return this.http.get<string>(Config.apiUrl+"chat?question="+question,
      { responseType: 'text' as 'json'})
      .pipe(timeout(10000),
    );
  }
}
