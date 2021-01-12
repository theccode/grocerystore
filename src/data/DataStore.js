import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const GroceryStoreDataStore = createStore(ShopReducer);