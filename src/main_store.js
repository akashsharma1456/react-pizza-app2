const {makeAutoObservable} = require("mobx");

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    cart = [
        {
            id :1,
            title: 'apple',
            price: 1.99,
            image_url: '',
            quantity: 1
        },
        {
            id :2,
            title: 'mango',
            price: 1.99,
            image_url: '',
            quantity: 1
        },
        {
            id :3,
            title: 'banana',
            price: 1.99,
            image_url: '',
            quantity: 1
        },
        {
            id :4,
            title: 'pear',
            price: 1.99,
            image_url: '',
            quantity: 1
        }
    ]
}
export const main_store = window.main_store = new MainStore()