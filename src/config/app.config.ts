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
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read appointment information',
    'Read insurance provider information',
    'Read medical record information',
  ],
  ownerAbilities: ['Manage user', 'Manage invoice', 'Manage clinic', 'Manage appointment'],
  getQuoteUrl: 'https://app.roq.ai/proposal/47da26ca-d60d-42bb-bfe7-027678cc1c9f',
};
