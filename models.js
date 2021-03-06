class Restaurant
{
    constructor({name, image ='http://image.url'})
    {
        if(!name) throw new Error('Restuarant must have a name')
        this.name = name
        this.image =image
        this.menus = []
    }

    addMenu(menu)
    {
      this.menus.push(menu)
    }
}

class Menu{
    constructor({title})
    {
        if(!title) throw new Error('Menu must have a title')
        this.title = title
        this.items =[]

    }

    addItem(item)
    {
      this.items.push(item)
    }
}

class Item{
    constructor({name, price})
    {
        if((!name && !price) || !name || !price) throw new Error('Restuarant must have a name and price')
        this.name = name
        this.price = price
    }
}




module.exports = {
    Restaurant,
    Menu,
    Item
}