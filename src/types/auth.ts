export interface User {
  id: string
  email: string
  name?: string
  isPremium: boolean
  isPremiumDrop?: boolean
  premiumTierDrop?: string
  twoFactorEnabled?: boolean
  isNullDropTeam?: boolean
  nullDropTeamRole?: string
  customApiKeyLimit?: number
  customDomain?: string
  customDomainVerified?: boolean
  polarCustomerId?: string
  polarSubscriptionId?: string
  polarSubscriptionStatus?: string
  accessFilesPreview?: boolean
  accessFilesDownload?: boolean
}