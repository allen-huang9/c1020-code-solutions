/* exported orderHistory */

var item = {
  name: 'JavaScript for Impatient Programmer',
  price: 31.55,
  seller: ''
};
var cart = [item];
var order1 = {
  itemList: [],
  dateOrderPlaced: 'August 4 2020',
  tax: 2.45,
  totalPrice: 34,
  orderDelivered: true,
  dateDelivered: 'August 8 2020',
  lastDayToReturn: 'September 7 2020',
  shipTo: 'JS Masher'
};
order1.itemList = cart;

var item2 = {
  name: 'The Timeless Way of Building',
  price: 41.33,
  seller: ''
};
var order2 = {
  itemList: [],
  dateOrderPlaced: 'July 19 2020',
  tax: 2.2,
  totalPrice: 44.53,
  orderDelivered: true,
  dateDelivered: 'July 20 2020',
  lastDayToReturn: 'August 19 2020',
  shipTo: 'JS Masher'
};
cart = [item2];
order2.itemList = cart;

var item3 = {
  name: 'Gamecube controller adapter',
  price: 15.98,
  seller: ''
};
var order3 = {
  itemList: [],
  dateOrderPlaced: 'July 4 2020',
  tax: 1.24,
  totalPrice: 17.22,
  orderDelivered: true,
  dateDelivered: 'July 7 2020',
  lastDayToReturn: 'August 5 2020',
  shipTo: 'JS Masher'
};
cart = [item3];
order3.itemList = cart;

var item4 = {
  name: 'GameCube Controller',
  price: 94.95,
  seller: ''
};
var item5 = {
  name: 'The Art of Sql',
  price: 33.99,
  seller: ''
};
var order4 = {
  itemList: [],
  dateOrderPlaced: 'July 3 2020',
  tax: 9.99,
  totalPrice: 138.93,
  orderDelivered: true,
  dateDelivered: 'July 5 2020',
  shipTo: 'JS Masher'
};
cart = [item4, item5];
order4.itemList = cart;

var orderHistory = [
  order1, order2, order3, order4
];
