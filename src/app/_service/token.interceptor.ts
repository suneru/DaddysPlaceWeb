import { HttpRequest,HttpHandler,HttpResponse,HttpEvent,HttpInterceptorFn,HttpHandlerFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlVzZXIiLCJzdWIiOiJVc2VyIiwianRpIjoiZjkzNjMwZjYiLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDoxOTQzMCIsImh0dHBzOi8vbG9jYWxob3N0OjQ0MzY5IiwiaHR0cDovL2xvY2FsaG9zdDo1MDYyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4OSJdLCJuYmYiOjE3MjIxNjUzODcsImV4cCI6MTczMDExNDE4NywiaWF0IjoxNzIyMTY1MzkwLCJpc3MiOiJkb3RuZXQtdXNlci1qd3RzIn0.fmbifMLYMJX5lhbL4yS0cEdeuwZJfTbd4onfZw576nI';
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