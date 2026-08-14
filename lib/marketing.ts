export type ManagedClient = {
  id: string;
  number: string;
  name: string;
};

export const MANAGED_CLIENTS: ManagedClient[] = [
  { id: 'apex-motors', number: '01', name: 'Apex Motor Gallery' },
  { id: 'skyline-residences', number: '02', name: 'Skyline Real Estate & Residences' },
  { id: 'velocity-auto', number: '03', name: 'Velocity Auto Collection' },
  { id: 'haven-living', number: '04', name: 'Haven Luxury Living' },
  { id: 'monarch-showrooms', number: '05', name: 'Monarch Showrooms' },
  { id: 'sterling-realty', number: '06', name: 'Sterling Realty Group' },
  { id: 'prestige-vault', number: '07', name: 'Prestige Auto Vault' },
  { id: 'horizon-estates', number: '08', name: 'Horizon Estates' },
];
