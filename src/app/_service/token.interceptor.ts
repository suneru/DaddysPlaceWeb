import { HttpRequest,HttpHandler,HttpResponse,HttpEvent,HttpInterceptorFn,HttpHandlerFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlVzZXIiLCJzdWIiOiJVc2VyIiwianRpIjoiZTc2ODM2YTgiLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDoxOTQzMCIsImh0dHBzOi8vbG9jYWxob3N0OjQ0MzY5IiwiaHR0cDovL2xvY2FsaG9zdDo1MDYyIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4OSJdLCJuYmYiOjE3MjI1NDEzMTEsImV4cCI6MTczMDQ5MDExMSwiaWF0IjoxNzIyNTQxMzEyLCJpc3MiOiJkb3RuZXQtdXNlci1qd3RzIn0.oJUni_Vvmh7cQM6J-dSZ3nlgPU11yzmZhcImMRzqqFs';
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
