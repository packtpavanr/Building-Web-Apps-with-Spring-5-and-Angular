"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var auth_service_1 = require("./auth/auth.service");
var router_stubs_1 = require("./testing/router-stubs");
var router_1 = require("@angular/router");
var testing_2 = require("@angular/router/testing");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var authService;
    var authServiceStub;
    beforeEach(testing_1.async(function () {
        authServiceStub = {
            isLoggedIn: false,
            user: { name: 'Micky' }
        };
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{ provide: auth_service_1.AuthService, useValue: authServiceStub },
                { provide: router_1.Router, useClass: router_stubs_1.RouterStub },
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
            authService = fixture.debugElement.injector.get(auth_service_1.AuthService);
        });
    }));
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch('Welcome to ' + comp.appName);
    });
    it('should display a different app name', function () {
        comp.appName = 'Test HealthApp';
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch('Welcome to ' + comp.appName);
    });
});
//# sourceMappingURL=app.component.spec.js.map