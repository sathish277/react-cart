import React from 'react';
import Cart from './componenets/Cart/Cart';
import Navbar from './componenets/Navbar/Navbar';

class App extends React.Component {
  constructor()
    {
      super();
      this.state ={
          products:[
              {
                  price:10000,
                  title : 'Mobile Phone',
                  qty : 1,
                  id:1,
                  img:'https://img6.gadgetsnow.com/gd/images/products/additional/large/G390786_View_1/mobiles/smartphones/apple-iphone-14-512-gb-blue-4-gb-ram-.jpg'
              },
              {
                  price:2000,
                  title : 'Watch',
                  qty : 2,
                  id:2,
                  img:'https://cdn1.smartprix.com/rx-iu91PaFCF-w1200-h1200/u91PaFCF.jpg'
              },
              {
                  price:300,
                  title : 'Wallet',
                  qty : 5,
                  id:3,
                  img:'https://m.media-amazon.com/images/I/819FadYQ6HL._SL1500_.jpg'
              }
          ],
          value:1
      }
        
    }

    handleIncreaseClickEvent = (product)=>{
        const {products} = this.state;
        const index=products.indexOf(product);
        if(index===-1)
        {
            return;
        }
        products[index].qty+=1;

        this.setState({
            products:products
        })
    }

    handledecreaseClickEvent=(product)=>
    {
        const {products} = this.state;
        const index=products.indexOf(product);
        
        if(index===-1 || products[index].qty===0)
        {
            return;
        }
        products[index].qty-=1;
        if(products[index].qty===0) //delete if quantity is zero
        {
            this.handleDeleteClickEvent(product);
        }
        this.setState({
            products:products
        })

    }
    handleDeleteClickEvent = (product)=>{
        const {products} = this.state;
        const index=products.indexOf(product);
        if(index===-1)
        {
            return;
        }
        products.splice(index,1);
        this.setState({
            products:products
        })
    }
  getCartCount=()=>
  {
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }
  getTotalPrice=()=>
  {
    const {products} = this.state;
    let price=0;
    products.forEach((product)=>{
      price+=(product.qty*product.price);
    });
    return price;
  }
  componentDidMount() {

    console.log("Mounted")

    this.setState({value:2},()=>{
         this.setState({value:3})
    })

}
  render(){
    console.log("Rendered");
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar 
          noOfProducts={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuanity={this.handleIncreaseClickEvent}
          onDecreaseQuantity ={this.handledecreaseClickEvent}
          onDeleteProduct = {this.handleDeleteClickEvent}
        />
        <div style={{textAlign:'center',fontWeight:700}}>Total price: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
