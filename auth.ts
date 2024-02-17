
// auth Service

  hasRole(allowedRoles): boolean {
   // this.jwtHelperService.decodeToken(sessionStorage.getItem('token'))             // @auth0/angular-jwt
    const data = [
        {"RoleId":1,"ModuleName":"Dashboard","ViewAccess":false,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
        {"RoleId":1,"ModuleName":"Opportunities","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
        {"RoleId":1,"ModuleName":"Manage Meetings","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true}
        ]
      // return data.filter(obj => obj.ModuleName === allowedRoles.ModuleName).some( obj => allowedRoles.accessType)
      const moduleRole= data.find(obj => obj.ModuleName === allowedRoles.ModuleName);
      if (moduleRole !==undefined) {
        if (moduleRole.ViewAccess) {
          return moduleRole[allowedRoles.accessType]
        } else {
          return false;
        }
      } else {
        console.log('somthing not right');
        return false;
      }
}

// directive
// html
 *appHasRole="role.dashboardAddAccess"
 // ts
  role= RoleConstants;

//stractural directive

@Directive({
    selector: '[appHasRole]'
})
export class HasRoleDirective{
    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private loginService: LoginService) {
    }
    @Input() set appHasRole(allowedRoles: RoleElements) {
    // if (this.loginService.isAuthenticated()) {
    if (this.loginService.hasRole(allowedRoles)) {
       this.viewContainer.createEmbeddedView(this.templateRef);      
    } else {
       this.viewContainer.clear();
    return;
    }  
   // }
    }
}


// RoleConstants file

enum AccessTypes {
  viewAccess="ViewAccess",
  addAccess="AddAccess",
  updateAccess="UpdateAccess",
  deleteAccess="DeleteAccess",
}
enum ModuleNames {
  Dashboard="Dashboard",
  Opportunities="Opportunities",
  ManageMeetings="Manage Meetings",
  inboxMyWork="Inbox / My Work",
  manageUsers="Manage Users",
  manageRoles="Manage Roles",
  boardReviewMeeting="Board Review Meeting",
  Lookup="Lookup",
  Roadmap="Roadmap"
}
export interface RoleElements {
  // RoleId?: number;
  ModuleName: ModuleNames;
  accessType: AccessTypes;
}
export class RoleConstants {
  static readonly dashboardAddAccess: RoleElements = {ModuleName: ModuleNames.Dashboard, accessType: AccessTypes.addAccess};
  static readonly dashboardViewAccess: RoleElements = {ModuleName: ModuleNames.Dashboard, accessType: AccessTypes.viewAccess};
}



//routes
  {path: 'forgot-password',component: ForgotPasswordComponent,canActivate: [CanActivateGuardService],data: {permittedRoles: RoleConstants.dashboardViewAccess,title: 'forgot-password'} },


// canActivate Gaurd
@Injectable({
  providedIn: 'root',
})
export class CanActivateGuardService implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private titleService: Title
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.titleService.setTitle(next.data['title']);
    // if (this.loginService.isAuthenticated()) {
      let roles:RoleElements = next.data['permittedRoles'];
      console.log(roles);
      console.log(typeof roles);
      
      if (roles && this.loginService.hasRole(roles)) {
        return true;
      } else {
        this.router.navigate(['/error/401']);
        return false;
      }
/*     } else {
      this.router.navigate(['login']);
      return false;
    } */
  }
}




const data = [
{"RoleId":1,"ModuleName":"Dashboard","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
{"RoleId":1,"ModuleName":"Opportunities","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
{"RoleId":1,"ModuleName":"Manage Meetings","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
{"RoleId":1,"ModuleName":"Inbox / My Work","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true},
{"RoleId":1,"ModuleName":"Manage Roles","ViewAccess":true,"AddAccess":true,"UpdateAccess":true,"DeleteAccess":true}]


 console.log(data.reduce((obj, item) => ((obj[[item.ModuleName]] = item), obj), {}))



 // console.log(data.reduce((obj, item) => ((obj[[item.ModuleName]] = item), obj), {}).Dashboard.UpdateAccess)
 

//var result = data.filter(obj => obj.ModuleName === "Dashboard").some( obj => obj.ViewAccess)





other

https://stackoverflow.com/questions/21987909/how-to-get-the-difference-between-two-arrays-of-objects-in-javascript



let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);


https://jasonwatmore.com/post/2020/05/22/angular-9-jwt-authentication-with-refresh-tokens
https://indepth.dev/reference/rxjs/operators/delay-when


private retryLogicSubject: Subject < any > ;
…
public getWithRetryLogic(url) {
    return this.http.get(url, this.options)
        .catch((err) => {
            if (error.status === 401) {
                return Observable.throw(error);
            }
            return Observable.of(error);
        })
        .retryWhen((error) => {
            this.retryLogicSubject = new Subject();
            this.startRefreshTokensProcess();
            return this.retryLogicSubject.asObservable()
        })
}
