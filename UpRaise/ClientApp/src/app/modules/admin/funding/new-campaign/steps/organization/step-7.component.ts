import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WizardEventTypes } from '../../new-campaign.types';

@Component({
    selector: 'org-step-7',
    templateUrl: './step-7.component.html',
})
export class Step7Component implements AfterViewInit {
    @Input() public stepData: FormGroup;
    @Output() WizardEvent = new EventEmitter<WizardEventTypes>();


    public ngAfterViewInit(): void {
    }


    public prev() {
        this.WizardEvent.emit(WizardEventTypes.Previous);
    }


    public next() {
        this.WizardEvent.emit(WizardEventTypes.Next);
    }

}
