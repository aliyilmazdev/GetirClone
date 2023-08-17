export type BasketItemType = {
  fiyat: number;
  fiyatIndirimli: number;
  id: string;
  image: string;
  images: string[];
  miktar: string;
  name: string;
  quantity: number;
};

export interface basketStateType {
  basketItems: BasketItemType[];
  totalBasket: number;
}
