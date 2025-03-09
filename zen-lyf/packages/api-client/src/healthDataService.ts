import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from './firebase';
import { HealthData } from '@zen-lyf/data-models';
import { collections } from '@zen-lyf/data-models';

export const getHealthData = async (userId: string, date: Date): Promise<HealthData | null> => {
  try {
    // Format date as YYYY-MM-DD for document ID
    const dateString = date.toISOString().split('T')[0];
    const healthDataDocRef = doc(db, collections.healthData, `${userId}_${dateString}`);
    const healthDataDoc = await getDoc(healthDataDocRef);
    
    if (healthDataDoc.exists()) {
      return healthDataDoc.data() as HealthData;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting health data:', error);
    throw error;
  }
};

export const saveHealthData = async (healthData: HealthData): Promise<void> => {
  try {
    // Format date as YYYY-MM-DD for document ID
    const dateString = healthData.date.toISOString().split('T')[0];
    const healthDataDocRef = doc(db, collections.healthData, `${healthData.userId}_${dateString}`);
    await setDoc(healthDataDocRef, healthData);
  } catch (error) {
    console.error('Error saving health data:', error);
    throw error;
  }
};

export const getHealthDataRange = async (userId: string, startDate: Date, endDate: Date): Promise<HealthData[]> => {
  try {
    const healthDataCollection = collection(db, collections.healthData);
    const healthDataQuery = query(
      healthDataCollection,
      where('userId', '==', userId),
      where('date', '>=', startDate),
      where('date', '<=', endDate)
    );
    
    const querySnapshot = await getDocs(healthDataQuery);
    const healthDataList: HealthData[] = [];
    
    querySnapshot.forEach((doc) => {
      healthDataList.push(doc.data() as HealthData);
    });
    
    return healthDataList;
  } catch (error) {
    console.error('Error getting health data range:', error);
    throw error;
  }
}; 