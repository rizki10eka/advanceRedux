import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:'p1', price:6, title: 'MyfirstBook', description: 'firstbook'
  },
  {
    id:'p2', price:2, title: 'mysecondbook', description: 'secondbook'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => 
          <ProductItem
            key= {product.id}
            id= {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
