import imgQueso from '../assets/img/queso-chillan.jpg'
import imgMiel from '../assets/img/miel-chillan.jpg'
import imgTejidos from '../assets/img/tejido-chillan.jpg'
import imgMermelada from '../assets/img/mermeladas.jpg' 

export const productos = [
  {
    id: 1,
    nombre: 'Queso Chanco de San Carlos',
    precio: 4500,
    categoria: 'Lácteos',
    imagen: imgQueso,
    descripcion: 'Queso artesanal de vaca, maduración media, tradicional de Ñuble.'
  },
  {
    id: 2,
    nombre: 'Miel de Quillón',
    precio: 3500,
    categoria: 'Miel',
    imagen: imgMiel,
    descripcion: 'Miel multifloral de productores locales, sin aditivos.'
  },
  {
    id: 3,
    nombre: 'Poncho tejido de Coihueco',
    precio: 22000,
    categoria: 'Textil',
    imagen: imgTejidos,
    descripcion: 'Poncho de lana natural, tejido a telar por artesanas de la zona.'
  },
  // 2. Agregar el nuevo producto
  {
    id: 4,
    nombre: 'Mermelada de Rosa Mosqueta',
    precio: 3000,
    categoria: 'Conservas', // Nueva categoría
    imagen: imgMermelada,
    descripcion: 'Mermelada artesanal recolectada en la precordillera de Pinto.'
  }
]