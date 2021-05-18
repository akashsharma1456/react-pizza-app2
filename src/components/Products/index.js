import { observer } from 'mobx-react';
import React from 'react';
import { products_data } from './data';

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductQuantity
} from './ProductsElements';

const ProductsMain = observer(({ heading }) => {
  
  return (
    
    <div>
      {console.log("Products is working")}
      {products_data.productData.map((val, i) => {
        return (
          <ProductsContainer>
            <ProductsHeading>{val.heading}</ProductsHeading>
            <ProductWrapper>
              {products_data.productData[i].details.map((product, index) => {
                return (
                  <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductDesc>{product.desc}</ProductDesc>
                      <ProductPrice>${product.price}</ProductPrice>
                      <ProductButton>{product.button}</ProductButton>
                      <ProductQuantity>
                        <button
                          disabled={product.quantity === 0}
                          onClick={() =>
                            (product.quantity = product.quantity - 1)
                          }
                        >
                          -
                        </button>
                        {product.quantity}
                        <button
                          onClick={() =>
                            (product.quantity = product.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </ProductQuantity>
                    </ProductInfo>
                  </ProductCard>
                );
              })}
            </ProductWrapper>
          </ProductsContainer>
        );})}
    </div>
  );
});

export default ProductsMain;
