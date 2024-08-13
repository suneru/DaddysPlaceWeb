import { HttpRequest,HttpHandler,HttpResponse,HttpEvent,HttpInterceptorFn,HttpHandlerFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzdiYjVhY2NlLWMyNjItNDMyNS1iODc4LTQ5NmRhMTBlZTZmNC8iLCJpYXQiOjE3MjM1MjE2NDMsIm5iZiI6MTcyMzUyMTY0MywiZXhwIjoxNzIzNTI1NTQzLCJhaW8iOiJFMmRnWUpEK2I2Zi84WFB6RVcxV050Y3MxK2JQQUE9PSIsImFwcGlkIjoiMTc4YmNjOGMtMjQ4Ni00MTk1LTgzMjktZDBiODc1ZThkYmFiIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JiNWFjY2UtYzI2Mi00MzI1LWI4NzgtNDk2ZGExMGVlNmY0LyIsImlkdHlwIjoiYXBwIiwib2lkIjoiODQ3MzRiYmUtNjU2My00Y2FmLTlmZmYtNWM1Yzc3ZWViN2E5IiwicmgiOiIwLkFjWUF6cXkxZTJMQ0pVTzRlRWx0b1E3bTlFWklmM2tBdXRkUHVrUGF3ZmoyTUJQR0FBQS4iLCJzdWIiOiI4NDczNGJiZS02NTYzLTRjYWYtOWZmZi01YzVjNzdlZWI3YTkiLCJ0aWQiOiI3YmI1YWNjZS1jMjYyLTQzMjUtYjg3OC00OTZkYTEwZWU2ZjQiLCJ1dGkiOiI4cG83Y0JmYnBrZXdZZHBwd0M4WEFRIiwidmVyIjoiMS4wIiwieG1zX2lkcmVsIjoiMjIgNyIsInhtc190Y2R0IjoxNzIzMTM0Mzc1fQ.EaXXVCR2yADGKm89t-yDAo0F20S9_ES9KXqSEunWtdaUV43JK_h6AyBO7ifmOaDQQD0ZG6rlRgNDUZs-_CO_yr99CoXP7cd8S1aWzxQ-BhHICSyf5jgvodO0vVF7xhxJDzi2JDTR0JVxV9np7V5zYnm_KYDK0T_sOjiK9BZwIJPhf2OSRuSWK97tV1SpoloFlszMaf2xhtfIUbUju2T0-dN-EyMnWLPoIN8hxXYnn-lpQVSm6IkVf2LREeZ-I0ysgaZIE90r8BTX0RuqkjBeWnps6Ra_96ZoZPI7CFw1qqzaYaY947_Y-hC35VqgdtQlBtkCzOdbZpxLtwE-f3Qwmw';
    const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });
  console.log("-- noopInterceptor --");
  let isSuccess = "";
  return next(modifiedReq).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          isSuccess = "success";
        }
      },
      error: () => isSuccess = "fail",
      finalize: () => console.log("Request ", isSuccess)
    })
  );
}
