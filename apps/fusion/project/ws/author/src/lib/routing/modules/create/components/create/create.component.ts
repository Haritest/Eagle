import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { NOTIFICATION_TIME } from '@ws/author/src/lib/constants/constant'
import { Notify } from '@ws/author/src/lib/constants/notificationMessage'
import { ICreateEntity } from '@ws/author/src/lib/interface/create-entity'
import { ErrorParserComponent } from '@ws/author/src/lib/modules/shared/components/error-parser/error-parser.component'
import { NotificationComponent } from '@ws/author/src/lib/modules/shared/components/notification/notification.component'
import { AccessControlService } from '@ws/author/src/lib/modules/shared/services/access-control.service'
import { AuthInitService } from '@ws/author/src/lib/services/init.service'
import { LoaderService } from '@ws/author/src/lib/services/loader.service'
import { Subscription } from 'rxjs'
import { CreateService } from './create.service'

@Component({
  selector: 'ws-auth-generic',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  entity: ICreateEntity[] = []
  resourceEntity!: ICreateEntity
  routerSubscription = <Subscription>{}
  allLanguages: any
  language = ''
  error = false

  constructor(
    private snackBar: MatSnackBar,
    private svc: CreateService,
    private router: Router,
    private loaderService: LoaderService,
    private accessControlSvc: AccessControlService,
    private authInitService: AuthInitService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.authInitService.creationEntity.forEach(v => {
      if (!v.parent && v.available) {
        if (v.id === 'resource') {
          this.resourceEntity = v
        } else {
          this.entity.push(v)
        }
      }
    })
    this.loaderService.changeLoadState(false)
    this.allLanguages = this.authInitService.ordinals.subTitles || []
    this.language = this.accessControlSvc.locale
  }

  ngOnDestroy() {
    this.loaderService.changeLoad.next(false)
  }

  contentClicked(content: ICreateEntity) {
    this.loaderService.changeLoad.next(true)
    this.svc
      .create({
        contentType: content.contentType,
        mimeType: content.mimeType,
        locale: this.language,
        ...(content.additionalMeta || {}),
      })
      .subscribe(
        (id: string) => {
          this.loaderService.changeLoad.next(false)
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.CONTENT_CREATE_SUCCESS,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
          this.router.navigateByUrl(`/author/editor/${id}`)
        },
        error => {
          if (error.status === 409) {
            this.dialog.open(ErrorParserComponent, {
              width: '80vw',
              height: '90vh',
              data: {
                errorFromBackendData: error.error,
              },
            })
          }
          this.loaderService.changeLoad.next(false)
          this.snackBar.openFromComponent(NotificationComponent, {
            data: {
              type: Notify.CONTENT_FAIL,
            },
            duration: NOTIFICATION_TIME * 1000,
          })
        },
      )
  }

  setCurrentLanguage(lang: string) {
    this.language = lang
  }
}
