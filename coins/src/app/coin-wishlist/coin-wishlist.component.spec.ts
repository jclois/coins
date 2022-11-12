import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinWishlistComponent } from './coin-wishlist.component';

describe('CoinWishlistComponent', () => {
  let component: CoinWishlistComponent;
  let fixture: ComponentFixture<CoinWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
