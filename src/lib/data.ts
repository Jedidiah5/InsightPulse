import type { SalesTrendItem, UserGrowthItem, CategoryDistributionItem, UserDataItem } from '@/types';

export const mockSalesTrendData: SalesTrendItem[] = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

export const mockUserGrowthData: UserGrowthItem[] = [
  { month: 'Jan', users: 200 },
  { month: 'Feb', users: 240 },
  { month: 'Mar', users: 220 },
  { month: 'Apr', users: 280 },
  { month: 'May', users: 350 },
  { month: 'Jun', users: 400 },
];

// Updated data for pie chart with 3 categories and new colors
export const mockCategoryDistributionData: CategoryDistributionItem[] = [
  { name: 'Electronics', value: 400, fill: 'hsl(var(--pie-category-red))' },
  { name: 'Clothing', value: 300, fill: 'hsl(var(--pie-category-purple))' },
  { name: 'Groceries', value: 250, fill: 'hsl(var(--pie-category-black))' }, 
  // Removed 'Books' and adjusted 'Groceries' value for a 3-item example
];

export const mockUserData: UserDataItem[] = [
  { id: '1', fullName: 'Alice Wonderland', email: 'alice@example.com', registrationDate: '2023-01-15', status: 'Active' },
  { id: '2', fullName: 'Bob The Builder', email: 'bob@example.com', registrationDate: '2023-02-20', status: 'Active' },
  { id: '3', fullName: 'Charlie Chaplin', email: 'charlie@example.com', registrationDate: '2023-03-10', status: 'Inactive' },
  { id: '4', fullName: 'Diana Prince', email: 'diana@example.com', registrationDate: '2023-04-05', status: 'Pending' },
  { id: '5', fullName: 'Edward Scissorhands', email: 'edward@example.com', registrationDate: '2023-05-12', status: 'Active' },
  { id: '6', fullName: 'Fiona Gallagher', email: 'fiona@example.com', registrationDate: '2023-06-22', status: 'Active' },
  { id: '7', fullName: 'George Costanza', email: 'george@example.com', registrationDate: '2023-07-30', status: 'Inactive' },
];

export const mockMetrics = {
    totalUsers: mockUserData.length,
    activeSessions: Math.floor(Math.random() * 500) + 100, // Random active sessions
    salesRevenue: Math.floor(Math.random() * 50000) + 10000, // Random sales revenue
};
