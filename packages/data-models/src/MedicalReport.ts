export interface MedicalReport {
  id: string;
  userId: string;
  title: string;
  type: 'xray' | 'mri' | 'ct_scan' | 'lab_result' | 'prescription' | 'other';
  fileURL: string;
  thumbnailURL?: string;
  uploadDate: Date;
  reportDate?: Date;
  doctorName?: string;
  hospitalName?: string;
  aiAnalysis?: {
    summary: string;
    findings: string[];
    recommendations?: string[];
    processedAt: Date;
    confidence: number; // 0-1
  };
  sharedWith?: {
    doctorId?: string;
    hospitalId?: string;
    sharedAt: Date;
  }[];
  tags?: string[];
} 