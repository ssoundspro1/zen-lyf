// Export all models
export * from './User';
export * from './HealthData';
export * from './MedicalReport';

// Export database collection names
export const collections = {
  users: 'users', // User profiles
  healthData: 'healthData', // Daily health metrics
  medicalReports: 'medicalReports', // Uploaded medical documents
  medications: 'medications', // Medication tracking
  emergencyAlerts: 'emergencyAlerts', // Emergency notifications
  hospitals: 'hospitals', // Hospital profiles
  doctors: 'doctors', // Doctor profiles
}; 