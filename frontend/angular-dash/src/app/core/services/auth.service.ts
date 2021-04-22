import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import 'rxjs/add/operator/delay';

import { environment } from '../../../environments/environment';
import { of, EMPTY } from 'rxjs';

import { assets } from 'src/app/shared/models/assets';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient,
        @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    login(email: string, password: string) {
        // return of(true).delay(1000)
        return this.http.post<any>(`${environment.apiUrl}/admin/login`, { email:email, password:password })
            .pipe(map((response) => {
                // set token property
                console.log(response)
                const decodedToken = jwt_decode(response['access_token']);

                // var user={}
                //     user["token"]=response.token
                //     user["isAdmin"]=false
                //     user["email"]=response.email
                //     user["id"]=response.userId
                //     user["alias"]="hola",
                //     user["assets"]=response.assets
                    
                //     user["expiration"]=moment().add(1, 'days').toDate(),
                //     user["fullName"]=response.name
                // {
                //     "_id": "604f8f48055c6c72462fde7f",
                //     "fullname": "Prathmesh Rahate",
                //     "email": "pvr231@gmail.com",
                //     "assets": [
                //         "604faa51d9cd50f02ed85894"
                //     ],
                //     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicHZyMjMxQGdtYWlsLmNvbSIsImV4cGlyZXMiOjE2MTYyMDIxOTYuMzUzNTg1fQ.QF4XeDxE6eRe1xF7CT_PeRn5CUmuuwIWFdfuNKFMnlg"
                // }

                // store email and jwt token in local storage to keep user logged in between page refreshes
                this.localStorage.setItem('currentUser', JSON.stringify({
                    token: response['access_token'],
                    isAdmin: true,
                    email: response['email'],
                    // assets: response['assets'], // i am not a
                    id: response['_id'],
                    alias: response['email'].split('@')[0],
                    expiration: moment().add(1, 'days').toDate(),
                    fullName: response['fullname'],
                    assets:response['assets']
                }));

                // this.localStorage.setItem('currentUser', JSON.stringify(user));

                return true;
            }));
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.localStorage.removeItem('currentUser');
    }

    getCurrentUser(): any {
        // TODO: Enable after implementation
        return JSON.parse(this.localStorage.getItem('currentUser'));
        // return {
        //     token: 'aisdnaksjdn,axmnczm',
        //     isAdmin: true,
        //     email: 'pvr231@gmail.com',
        //     id: '12312323232',
        //     alias: 'pvr231@gmail.com'.split('@')[0],
        //     expiration: moment().add(1, 'days').toDate(),
        //     fullName: 'Prathmesh Rahate'
        // };
    }
    getGroups(){
        var user = JSON.parse(this.localStorage.getItem('currentUser'));
        return user.assets
    }

    getAssets(){
        var user = JSON.parse(this.localStorage.getItem('currentUser'));
        return user.assets
    }

    setGroups(group){
        console.log("id=",group)
        this.localStorage.setItem('groups', JSON.stringify(group));
        return true;
    }

    getGroupsApi(){
        return this.http.get<any>(`${environment.apiUrl}/assets/getGroups`)
    }

    // getAnalytics(){
    //     return this.http.post<any>(`${environment.apiUrl}/assets/getChartsAngular`)
    // }

    getAnalytics(id) {
        return this.http.post<any>(`${environment.apiUrl}/asset/getAnalytics`,{"asset_id":id})
    }

    updateCharts(data) {
        return this.http.post<any>(`${environment.apiUrl}/assets/updateCharts`,{
            
                "reqSender":"mob/31311342", 
                "type":"analytics",
                "timestamp":160000,
                "filter":{
                    "type":data,
                    "chartType":"lineGraph/barGraph",
                    "year":2014,
                    "month":5
                }
            
        })
    }


    passwordResetRequest(email: string) {
        return of(true).delay(1000);
    }

    

    changePassword(email: string, currentPwd: string, newPwd: string) {
        return of(true).delay(1000);
    }

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).delay(1000);
    }

    // getUserSpecificAssets(dateTime: number,assetID:any) {
    //     return this.http.get(`${environment.apiUrl}/assets/getAssets`);
        
    // }

    getUserSpecificAssets(dateTime: number,assetID:any) {
        return this.http.post<any>(`${environment.apiUrl}/asset/getAssets`, { dateTime:dateTime, assets:assetID })
    }

    getSpecificAssetParameters(dateTime: number,id:any) {
        console.log("tola=",id);
        return this.http.post<any>(`${environment.apiUrl}/asset/getParameters`, { dateTime:dateTime, asset_id:id })
    }

    getAssetIdForParameter(){
        return JSON.parse(this.localStorage.getItem('_id'));
    }

    setAssetIdForParameter(_id){
        console.log("id=",_id)
        this.localStorage.setItem('_id', JSON.stringify(_id));
        // console.log("hola=",this.localStorage.getItem('_id'))
        // this.localStorage.setItem('currentUser', JSON.stringify(user));

        return true;
    }

    removeAssetIdForParameter(): void {
        // clear token remove user from local storage to log user out
        this.localStorage.removeItem('_id');
    }

    setParamValue(data:any) {
        return this.http.post<any>(`${environment.apiUrl}/assets/setParametersValue`, data)
    }



}
