import { getFirestore } from './firebase'
import {  firestore } from "firebase";

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
  console.log(snapshot)

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

  const data = {
    buyer: order.buyer,
    items: order.items,
    createdAD: firestore.Timestamp.fromDate(new Date()),
    total: order.total,
  }

  const document = await db.collection('orders').add(data)
  return document.id
}