import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private _auth: AuthService,
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this._auth.readCookie("token");
    console.log(token);
    const newReq = req.clone({
      setHeaders: {
        "x-access-token": token
      }
    })
    return next.handle(newReq);
  }
}
