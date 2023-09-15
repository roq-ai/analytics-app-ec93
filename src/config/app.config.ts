interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner'],
  tenantName: 'Business',
  applicationName: 'Analytics app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage login credentials',
    'View and analyze business performance data',
    'Manage user access to the application',
    'Edit business data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/42d682f5-1862-4430-a2ba-6bc9bed1955d',
};
