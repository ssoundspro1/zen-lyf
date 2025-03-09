export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  height?: number; // in cm
  weight?: number; // in kg
  medicalConditions?: string[];
  medications?: Medication[];
  emergencyContacts?: EmergencyContact[];
  wearableConnections?: WearableConnection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  reminderEnabled: boolean;
  reminderTimes?: string[]; // Format: "HH:MM"
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phoneNumber: string;
  isNotified: boolean;
}

export interface WearableConnection {
  type: 'apple_health' | 'fitbit' | 'google_fit';
  connected: boolean;
  lastSynced?: Date;
  permissions: string[];
} 