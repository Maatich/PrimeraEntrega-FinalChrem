import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router()


const productManager = new ProductManager();

router.get('/', async (req,res)=>{
    const products = await productManager.getProducts();
    res.send(products)
})

router.get('/:id', async (req,res)=>{

    const categoria = req.query.categoria;
    if(!categoria || (categoria!=='M' && categoria!=='F')){
       return res.send({
            products
         })
    }
    let productsFilter = products.filter(prod => prod.categoria === categoria );
    res.send({
        products: productsFilter
    })


})

router.post('/', async (req,res)=>{

    const {tittle, description, prince, thumbnail, code, stock, category} = req.body

    if(!tittle || description, prince, thumbnail, code, stock, category){
        res.send('faltan datos')
        return
    }

    const producto = {
        tittle, description, prince, thumbnail, code, stock, status:true, category
    }

    const msg = await productManager.createProducto(producto);
    res.send(msg);

})

router.delete('/:id', async (req,res)=>{

    const id = req.params.id;

    const msg = await productManager.eliminarProducto(id);
    res.send(msg)
    
})

export default router