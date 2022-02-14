import { getFirestore } from './firebase'
import {  firestore } from "firebase";
import Swal from 'sweetalert2';

function documentToProduct(document) {
  return {
    id: document.id,
    ...document.data(),
  }
}

export async function getAllProductos() {
  const db = getFirestore()

  const snapshot = await db.collection('productos').get()

  const productos = snapshot.docs.map(documentToProduct)

  return productos
}

export async function getProductById(productId) {
  const db = getFirestore()

  const doc = await db.collection('productos').doc(productId).get()

  if (!doc.exists) {
    return null
  }

  return documentToProduct(doc)
}

export async function getProductsByCategoryId(category) {
  const db = getFirestore()

  const snapshot = await db
    .collection('productos')
    .where('category', '==', category)
    .get()

  const productos = snapshot.docs.map(documentToProduct)

  return productos
}

export async function createOrder(order) {
  const db = getFirestore()

  const cartItemsIds = order.items.map((item) => item.id )

  const snapshot = await db
  .collection('productos')
  .where(firestore.FieldPath.documentId(), 'in', cartItemsIds)
  .get()

  const batch = db.batch()
  const outOfStock = []

  try  {

  snapshot.docs.forEach((document, index) => {
    
    const stock = document.data().stock
    const cantidad = order.items[index].cantidad

    if (stock >= cantidad) {
      batch.update(document.ref,{ stock: stock - cantidad})
    } else {
      const producto = documentToProduct(document)
      outOfStock.push(producto)
    }
    if (outOfStock.length !==0)
    console.log(outOfStock) 
  })

  } catch (error){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Producto sin stock',
      showConfirmButton: false,
      timer: 2000
    })
  }

    await batch.commit()

  const data = {
    buyer: order.buyer,
    items: order.items,
    createdAD: firestore.Timestamp.fromDate(new Date()),
    total: order.total,
  }

  const document = await db.collection('orders').add(data)
  return document.id
} 