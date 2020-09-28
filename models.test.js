const {Restaurant, Menu, Item} = require('./models')

describe('Restaurant', () =>
{
    test('has a name', () =>
    {
        const resturant1 = new Restaurant({name: 'Yori'})
        expect(resturant1.name).toBe('Yori')
    })

    test('must have a name', () =>
    {
        expect(() => {new Restaurant({})}).toThrow()
    })

    test('has menus', () =>
    {
        const restaurant2 = new Restaurant({name: 'Bayroot'})
        const menu3 = new Menu({title: 'Dessert Menu'})
        restaurant2.addMenu(menu3)
        expect(restaurant2.menus[0].title).toBe('Dessert Menu')
    })
    
})

describe('Menu', () =>
{
    test('has a title', () =>
    {
        const menu1 = new Menu({title: 'Drinks Menu'})
        expect(menu1.title).toBe('Drinks Menu')
        expect(Array.isArray(menu1.items)).toBeTruthy()
    })

    test('has items', () =>
    {
        const menu2 = new Menu({title: 'Main Menu'})
        const item1 = new Item({name: 'Gyoza', price: 2.55})
        menu2.addItem(item1)
        expect(menu2.items[0].name).toBe('Gyoza')
    })

    test('must have a title', () =>
    {
        expect(() => {new Menu({})}).toThrow()
    })

})

describe('Item', () =>
{
    test('has name', () =>
    {
        const item2 = new Item({name: 'Udon', price: 3.3})
        expect(item2.name).toBe('Udon')
    })

    test('must have a price', () =>
    {
        expect(() => {new Item({name:'chicken'})}).toThrow()
    })

})