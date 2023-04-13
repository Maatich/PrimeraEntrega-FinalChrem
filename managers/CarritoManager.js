import fs from 'fs';

const path = '../src/files/carrito.json';

export default class CarritoManager {

    getCarritos = async() =>{

        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const carritos = JSON.parse(data);
            return carritos;
        }else {
            return [];
        }
    }
    getCarrito = async(id) =>{
        const carritos = await this.getCarritos();
        
        const carrito = carritos.filter((carrito)=>{
            return carrito.id == id
        })

        return carrito

    }
    eliminarCarritos = async(id) =>{
        
        const carritos = await this.getCarritos();
        const carritoIndex = carritos.findIndex((carritos)=>{
            return carritos.id == id
        })
        carritos.splice(carritoIndex,1)

        try {
            await fs.promises.writeFile(path, JSON.stringify(carritos,null,'\t'))
            return 'Carrito eliminado'
        } catch (error) {
             return error   
        }

        
    }


}