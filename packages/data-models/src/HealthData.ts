export interface HealthData {
  userId: string;
  date: Date;
  metrics: {
    steps?: number;
    heartRate?: HeartRateData;
    sleep?: SleepData;
    bloodPressure?: BloodPressureData;
    bloodOxygen?: BloodOxygenData;
    weight?: WeightData;
    activity?: ActivityData[];
  };
  source: 'apple_health' | 'fitbit' | 'google_fit' | 'manual';
}

export interface HeartRateData {
  average: number;
  min: number;
  max: number;
  restingHeartRate?: number;
  readings?: {
    timestamp: Date;
    value: number;
  }[];
}

export interface SleepData {
  durationInMinutes: number;
  startTime: Date;
  endTime: Date;
  quality?: 'poor' | 'fair' | 'good' | 'excellent';
  stages?: {
    deep: number; // minutes
    light: number; // minutes
    rem: number; // minutes
    awake: number; // minutes
  };
}

export interface BloodPressureData {
  systolic: number;
  diastolic: number;
  timestamp: Date;
}

export interface BloodOxygenData {
  value: number; // percentage
  timestamp: Date;
}

export interface WeightData {
  value: number; // kg
  timestamp: Date;
}

export interface ActivityData {
  type: string;
  durationInMinutes: number;
  caloriesBurned?: number;
  distance?: number; // meters
  startTime: Date;
  endTime: Date;
} 