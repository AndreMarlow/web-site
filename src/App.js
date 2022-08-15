import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currnetItem: [],
      items: [
        {
          id: 1,
          title: 'Комплект Белла',
          img: 'nnb.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'sofa',
          price: '600'
        },
        {
          id: 2,
          title: 'Комплект Джиннифер',
          img: 'nnv.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '600'
        },
        {
          id: 3,
          title: 'Комплект bigAygo',
          img: 'nnd.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'table',
          price: '600'
        },
        {
          id: 4,
          title: 'Комплект Aygo',
          img: 'nnn.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'complect',
          price: '600'
        },
        {
          id: 5,
          title: 'Комплект Sonya',
          img: 'nnv.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'comods',
          price: '600'
        },
        {
          id: 6,
          title: 'Комплект Romantic',
          img: 'nnm.jpg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'shkaf',
          price: '600'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.currnetItem = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deletOrder = this.deletOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelet={this.deletOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currnetItem} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState ({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({
        currnetItem: this.state.items
      })
      return
    }

    this.setState({
      currnetItem: this.state.items.filter(el => el.category === category)
    })
  }

  deletOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(
      el => {
        if (el.id === item.id)
          isInArray = true
      })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App