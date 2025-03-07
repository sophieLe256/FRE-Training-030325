import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tab-group',
  standalone: false,
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent {
  activeTitle!: string;
  id!: string;
  private notifier = new Subject();

  @ContentChildren(TabComponent)
  private tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    for (const tab of this.tabs) {
      if (tab.title) {
        this.activeTitle = tab.title;
        this.id = tab.title.split(' ').pop() || '';
        tab.active = true;
        break;
      }
    } // if no title

    this.tabs.forEach((tab) => {
      tab.emitActiveTitle.pipe(takeUntil(this.notifier)).subscribe((e) => {
        this.setActiveTab(e);
      });
    });
  }
  ngAfterViewInit(): void {
    this.tabs.forEach((tab, i) => {
      if (tab.btnRef) {
        const className = tab.btnRef.nativeElement.className;
        console.log(i, className);
      }
    });
  }

  ngOnDestroy(): void {
    this.stopObs();
  }

  private stopObs() {
    this.notifier.next(null);
    this.notifier.complete();
  }

  private setActiveTab(title: string): void {
    this.activeTitle = title;
    this.id = this.activeTitle.split(' ').pop() || '';

    this.tabs.forEach((tab) => {
      tab.active = (tab.title === title) as boolean;
    });
  }
}
