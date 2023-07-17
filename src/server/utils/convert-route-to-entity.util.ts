const mapping: Record<string, string> = {
  businesses: 'business',
  invitations: 'invitation',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
