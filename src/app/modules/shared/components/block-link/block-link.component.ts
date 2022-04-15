import { Component, Input } from '@angular/core';
import { BlockLinkModel } from '@shared/models';

@Component({
  selector: 'app-block-link',
  templateUrl: './block-link.component.html'
})
export class BlockLinkComponent {
    @Input() data: BlockLinkModel;
    @Input() cssClasses: string;
}
