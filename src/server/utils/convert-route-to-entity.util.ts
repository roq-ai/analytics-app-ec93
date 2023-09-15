const mapping: Record<string, string> = {
  businesses: 'business',
  customers: 'customer',
  dashboards: 'dashboard',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
