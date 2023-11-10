import { ErrorHandler, Injectable } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.log('An error occurred:', error);
  }
}
