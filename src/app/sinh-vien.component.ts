import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-sinh-vien',
    template: `
        <div class="Student">
            Name: {{fullName}},
            Age: {{age}},
        </div>
    `,
})

export class SinhVienComponent implements OnInit {
    @Input() fullName: string;
    @Input() age: number;
    constructor(){}

    // tslint:disable-next-line:typedef
    ngOnInit() {
    }
}
