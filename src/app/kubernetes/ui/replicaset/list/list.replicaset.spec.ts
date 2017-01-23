/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ReplicaSetsListComponent} from "./list.replicaset";
import {IPaaSCommonModule} from "../../../../common/common.module";
import {RouterTestingModule} from "@angular/router/testing";
import {MomentModule} from "angular2-moment";
import {ReplicaSetDeleteDialog} from "../delete-dialog/delete-dialog.replicaset";
import {KuberentesStoreModule} from "../../../kubernetes.store.module";
import {ModalModule} from "ng2-modal";
import {ReplicaSetScaleDialog} from "../scale-dialog/scale-dialog.replicaset";
import {FormsModule} from "@angular/forms";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {MockBackend} from "@angular/http/testing";

describe('ReplicaSetsListComponent', () => {
  let component: ReplicaSetsListComponent;
  let fixture: ComponentFixture<ReplicaSetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        IPaaSCommonModule,
        FormsModule,
        MomentModule,
        ModalModule,
        RestangularModule.forRoot(),
        KuberentesStoreModule,
      ],
      declarations: [
        ReplicaSetsListComponent,
        ReplicaSetDeleteDialog,
        ReplicaSetScaleDialog,
      ],
      providers: [
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          }, deps: [MockBackend, RequestOptions],
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicaSetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
