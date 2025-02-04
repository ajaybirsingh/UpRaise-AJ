import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ChangelogComponent } from 'app/modules/admin/help-center/changelog/changelog';
import { changelogRoutes } from 'app/modules/admin/help-center/changelog/changelog.routing';

@NgModule({
    declarations: [
        ChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(changelogRoutes),
        SharedModule
    ]
})
export class ChangelogModule
{
}
