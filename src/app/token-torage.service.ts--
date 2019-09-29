import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorageService {

  storeToken(token: string) {
    localStorage.setItem('response-token', token);
  }

  getToken() {
    if( localStorage.getItem('response-token') ) {
      return localStorage.getItem('response-token');
    } 
      return null;
    
  }

  removeToken() {
    localStorage.removeItem('response-token');
  }
}