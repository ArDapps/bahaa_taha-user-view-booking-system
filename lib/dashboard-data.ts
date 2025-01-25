// User Profile Information
export const userProfile = {
  fullName: 'Dr. Sarah Chen',
  role: 'Senior Blockchain Consultant',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  email: 'sarah.chen@blockconsult.com',
  phone: '+1 (415) 555-0123',
  location: 'San Francisco, CA',
  department: 'Consulting',
  timezone: 'America/Los_Angeles',
  joinDate: '2022-06-15',
  expertise: ['Smart Contracts', 'DeFi', 'Security Audits'],
};

// Navigation Menu Structure
export const navigationMenu = [
  {
    label: 'Overview',
    icon: 'LayoutDashboard',
    href: '/dashboard',
    permission: 'basic',
  },
  {
    label: 'Calendar',
    icon: 'Calendar',
    href: '/dashboard/calendar',
    permission: 'basic',
    badge: '3', // Number of upcoming events
  },
  {
    label: 'Clients',
    icon: 'Users',
    href: '/dashboard/clients',
    permission: 'consultant',
    submenu: [
      { label: 'Active Clients', href: '/dashboard/clients/active' },
      { label: 'Prospects', href: '/dashboard/clients/prospects' },
      { label: 'Archive', href: '/dashboard/clients/archive' },
    ],
  },
  {
    label: 'Projects',
    icon: 'FileText',
    href: '/dashboard/projects',
    permission: 'consultant',
    submenu: [
      { label: 'Active Projects', href: '/dashboard/projects/active' },
      { label: 'Completed', href: '/dashboard/projects/completed' },
      { label: 'Templates', href: '/dashboard/projects/templates' },
    ],
  },
  {
    label: 'Analytics',
    icon: 'BarChart3',
    href: '/dashboard/analytics',
    permission: 'manager',
  },
  {
    label: 'Messages',
    icon: 'MessageSquare',
    href: '/dashboard/messages',
    permission: 'basic',
    badge: '5', // Unread messages
  },
  {
    label: 'Notifications',
    icon: 'Bell',
    href: '/dashboard/notifications',
    permission: 'basic',
    badge: '2', // Unread notifications
  },
  {
    label: 'Billing',
    icon: 'Wallet',
    href: '/dashboard/billing',
    permission: 'manager',
  },
  {
    label: 'Settings',
    icon: 'Settings',
    href: '/dashboard/settings',
    permission: 'basic',
  },
];

// Key Performance Indicators
export const kpiMetrics = [
  {
    label: 'Active Projects',
    value: 12,
    change: +15.8,
    timeframe: 'vs last month',
    trend: 'up',
    icon: 'FileText',
  },
  {
    label: 'Client Satisfaction',
    value: 98.2,
    unit: '%',
    change: +2.4,
    timeframe: 'vs last quarter',
    trend: 'up',
    icon: 'ThumbsUp',
  },
  {
    label: 'Billable Hours',
    value: 156,
    change: -4.3,
    timeframe: 'vs last month',
    trend: 'down',
    icon: 'Clock',
  },
  {
    label: 'Revenue',
    value: 48750,
    unit: 'USD',
    change: +12.5,
    timeframe: 'vs last month',
    trend: 'up',
    icon: 'DollarSign',
  },
  {
    label: 'New Clients',
    value: 8,
    change: +33.3,
    timeframe: 'vs last month',
    trend: 'up',
    icon: 'UserPlus',
  },
];

// Recent Activity Feed
export const recentActivity = [
  {
    id: 1,
    type: 'project_milestone',
    title: 'DeFi Protocol Audit Completed',
    description: 'Final security audit report submitted for review',
    timestamp: '2024-03-22T14:30:00Z',
    user: 'Sarah Chen',
    project: 'TechFi Protocol',
    status: 'completed',
  },
  {
    id: 2,
    type: 'client_meeting',
    title: 'Smart Contract Review Session',
    description: 'Technical consultation with Crypto Secure Ltd',
    timestamp: '2024-03-22T13:15:00Z',
    user: 'Sarah Chen',
    client: 'Crypto Secure Ltd',
    status: 'completed',
  },
  {
    id: 3,
    type: 'contract_deployment',
    title: 'NFT Marketplace Contracts Deployed',
    description: 'Successfully deployed to Ethereum mainnet',
    timestamp: '2024-03-22T11:45:00Z',
    user: 'Michael Rodriguez',
    project: 'ArtBlock NFT',
    status: 'success',
  },
  {
    id: 4,
    type: 'security_alert',
    title: 'Vulnerability Assessment Started',
    description: 'Initiating security review for DeFi protocol',
    timestamp: '2024-03-22T10:30:00Z',
    user: 'David Park',
    project: 'DeFi Yield Protocol',
    status: 'in_progress',
  },
  {
    id: 5,
    type: 'document_update',
    title: 'Technical Documentation Updated',
    description: 'Added new section on gas optimization',
    timestamp: '2024-03-22T09:15:00Z',
    user: 'Sarah Chen',
    project: 'Gas Optimization Guide',
    status: 'completed',
  },
  {
    id: 6,
    type: 'client_onboarding',
    title: 'New Client Onboarding',
    description: 'Started onboarding process for BlockTech Solutions',
    timestamp: '2024-03-22T08:45:00Z',
    user: 'Michael Rodriguez',
    client: 'BlockTech Solutions',
    status: 'in_progress',
  },
  {
    id: 7,
    type: 'project_start',
    title: 'Token Development Project Initiated',
    description: 'Kickoff meeting completed, requirements documented',
    timestamp: '2024-03-21T16:30:00Z',
    user: 'David Park',
    project: 'MetaToken Development',
    status: 'started',
  },
  {
    id: 8,
    type: 'audit_finding',
    title: 'Critical Vulnerability Identified',
    description: 'Found and patched reentrancy vulnerability',
    timestamp: '2024-03-21T15:20:00Z',
    user: 'Sarah Chen',
    project: 'DeFi Lending Protocol',
    status: 'resolved',
  },
  {
    id: 9,
    type: 'team_meeting',
    title: 'Weekly Team Sync',
    description: 'Discussed project status and resource allocation',
    timestamp: '2024-03-21T14:00:00Z',
    user: 'Sarah Chen',
    status: 'completed',
  },
  {
    id: 10,
    type: 'contract_update',
    title: 'Smart Contract Optimization',
    description: 'Reduced gas costs by 25% through optimization',
    timestamp: '2024-03-21T11:30:00Z',
    user: 'Michael Rodriguez',
    project: 'Gas Efficient DEX',
    status: 'completed',
  },
];

// System Status Indicators
export const systemStatus = {
  overall: {
    status: 'operational',
    uptime: 99.99,
    lastIncident: '2024-02-15T08:30:00Z',
  },
  services: [
    {
      name: 'Smart Contract Deployment',
      status: 'operational',
      responseTime: 245, // ms
      uptime: 99.95,
    },
    {
      name: 'Security Monitoring',
      status: 'operational',
      responseTime: 180, // ms
      uptime: 100,
    },
    {
      name: 'Analytics Platform',
      status: 'degraded',
      responseTime: 850, // ms
      uptime: 98.5,
    },
    {
      name: 'Client Portal',
      status: 'operational',
      responseTime: 320, // ms
      uptime: 99.98,
    },
  ],
  resources: {
    cpu: 42, // percentage
    memory: 68, // percentage
    storage: 75, // percentage
    network: 35, // percentage
  },
  alerts: [
    {
      level: 'warning',
      message: 'Analytics platform experiencing higher latency',
      timestamp: '2024-03-22T14:15:00Z',
    },
    {
      level: 'info',
      message: 'Scheduled maintenance in 48 hours',
      timestamp: '2024-03-22T12:00:00Z',
    },
  ],
};