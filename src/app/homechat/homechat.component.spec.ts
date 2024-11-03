import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechatComponent } from './homechat.component';

describe('HomechatComponent', () => {
  let component: HomechatComponent;
  let fixture: ComponentFixture<HomechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomechatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
