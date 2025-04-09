import 'server-only';

import { asc, count, desc, eq } from 'drizzle-orm';

import { db } from '../..';
import { type Order, orders } from '../schema/orders';
import { door_configuration } from '../schema/orders';

export async function getAllOrders() {
  try {
    const orderResults = await db
      .select()
      .from(orders)
      .orderBy(asc(orders.createdAt));

    return orderResults;
  } catch (error) {
    console.error('Failed to get order by id from database');
    throw error;
  }
}

export async function getAllArchivedOrders() {
  try {
    const orderResults = await db
      .select()
      .from(orders)
      .where(eq(orders.archived, true))
      .orderBy(asc(orders.createdAt));

    return orderResults;
  } catch (error) {
    console.error('Failed to get archived orders from database');
    throw error;
  }
}

export async function getOrdersCount() {
  try {
    const ordersCount = await db.select({ count: count() }).from(orders);
    return ordersCount[0]?.count ?? 0;
  } catch (error) {
    console.error('Failed to get orders count from database');
    throw error;
  }
}

export async function getOrderById({ id }: { id: string }) {
  try {
    const [selectedOrder] = await db
      .select()
      .from(orders)
      .where(eq(orders.id, id))
      .orderBy(desc(orders.createdAt));

    return selectedOrder;
  } catch (error) {
    console.error('Failed to get order by id from database');
    throw error;
  }
}

export async function getAllDoorConfigurationsById({ id }: { id: string }) {
  try {
    const doorConfigurations = await db
      .select()
      .from(door_configuration)
      .where(eq(door_configuration.orderId, id))
      .orderBy(desc(door_configuration.createdAt));

    return doorConfigurations;
  } catch (error) {
    console.error('Failed to get door configurations by id from database');
    throw error;
  }
}

export async function deleteOrderById({ id }: { id: string }) {
  try {
    await db.delete(orders).where(eq(orders.id, id));
  } catch (error) {
    console.error('Failed to delete order by id from database');
    throw error;
  }
}

export async function createOrder(order: Order) {
  try {
    await db.insert(orders).values(order);
  } catch (error) {
    console.error('Failed to create order from database');
    throw error;
  }
}
