import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card,Image } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductDetail() {

    let { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService
          .getByProductId(id)
          .then(result =>setProduct(result.data))
    }, [])

    return (
        <div>
             <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src=''
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.categoryName}</Card.Meta>
                        <Card.Description>
                            {product.quantityPerUnit}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='blue'>
                                Add to Basket
                            </Button>
                            <Button basic color='red'>
                                Add to Favorites
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>

        </div>
    )
}