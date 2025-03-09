import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaLungs, 
  FaThermometerHalf, 
  FaTint, 
  FaWalking, 
  FaBed, 
  FaCloudRain,
  FaLightbulb,
  FaExclamationTriangle,
  FaInfoCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaCalendarAlt,
  FaApple,
  FaRegChartBar,
  FaRunning,
  FaSun,
  FaMoon,
  FaLeaf,
  FaSmog
} from 'react-icons/fa';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #050728 0%, #0a0f3d 100%);
  color: white;
  padding: 2rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderTitle = styled.div``;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  
  span {
    background: linear-gradient(90deg, #a18cd1, #fbc2eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.2);
  color: rgb(16, 185, 129);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
  
  svg {
    margin-right: 0.5rem;
  }
`;

const PatientInfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PatientPhoto = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4f46e5;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PatientInfo = styled.div`
  flex: 1;
`;

const PatientName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PatientDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PatientDetail = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
`;

const AlertBadge = styled.div`
  display: flex;
  align-items: center;
  background: rgba(239, 68, 68, 0.2);
  color: rgb(239, 68, 68);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
  
  svg {
    margin-right: 0.25rem;
  }
`;

const NormalBadge = styled.div`
  display: flex;
  align-items: center;
  background: rgba(16, 185, 129, 0.2);
  color: rgb(16, 185, 129);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
  
  svg {
    margin-right: 0.25rem;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MetricTitle = styled.h3`
  font-size: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const MetricValue = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  
  span {
    font-size: 1.25rem;
    margin-left: 0.5rem;
    opacity: 0.7;
  }
`;

const MetricChart = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: auto;
`;

const MetricBar = styled(motion.div)`
  background: linear-gradient(to top, var(--primary), var(--secondary));
  border-radius: 0.25rem;
  width: 100%;
`;

const DeviceStatusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DeviceStatusCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
`;

const DeviceStatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DeviceStatusTitle = styled.h3`
  font-size: 1.25rem;
`;

const DeviceStatusBadge = styled.div<{ status: 'connected' | 'disconnected' }>`
  background: ${props => props.status === 'connected' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
  color: ${props => props.status === 'connected' ? 'rgb(16, 185, 129)' : 'rgb(239, 68, 68)'};
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const DeviceList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DeviceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DeviceIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    color: white;
  }
`;

const DeviceName = styled.div`
  flex: 1;
`;

const DeviceStatus = styled.div<{ status: 'connected' | 'disconnected' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.status === 'connected' ? 'rgb(16, 185, 129)' : 'rgb(239, 68, 68)'};
  box-shadow: 0 0 10px ${props => props.status === 'connected' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)'};
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const ActionButton = styled(motion.button)<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  ${props => props.primary ? `
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    color: white;
    border: none;
  ` : `
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
  `}
  
  svg {
    margin-right: 0.5rem;
  }
`;

// Modal for detailed view
const DetailModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #192048 0%, #2d325a 100%);
  border-radius: 1.5rem;
  max-width: 90%;
  width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const DetailedChart = styled.div`
  height: 250px;
  margin: 2rem 0;
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

const DetailedTimeRange = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const TimeRangeButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'rgba(161, 140, 209, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'rgba(161, 140, 209, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#a18cd1' : 'rgba(255, 255, 255, 0.7)'};
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(161, 140, 209, 0.1);
  }
`;

const DetailStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

// Watch data integration
const WatchSection = styled(motion.div)`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const WatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const WatchTitle = styled.h2`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #a18cd1;
  }
`;

const WatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const WatchMetric = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const WatchMetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const WatchMetricTitle = styled.h3`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #a18cd1;
  }
`;

const WatchMetricDevice = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    margin-right: 0.25rem;
  }
`;

const WatchMetricValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 0.5rem 0;
  
  span {
    font-size: 1rem;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const WatchMetricChart = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40px;
  gap: 2px;
  margin-top: auto;
`;

const WatchMetricBar = styled(motion.div)`
  flex: 1;
  background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-radius: 2px 2px 0 0;
  min-height: 4px;
`;

// Function to generate random data within a range
const generateRandomData = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Main component
const WearableDemo: React.FC = () => {
  const controls = useAnimation();
  
  // State for vital signs
  const [heartRate, setHeartRate] = useState(75);
  const [bloodOxygen, setBloodOxygen] = useState(98);
  const [temperature, setTemperature] = useState(36.8);
  const [respirationRate, setRespirationRate] = useState(16);
  const [steps, setSteps] = useState(4213);
  const [bloodPressure, setBloodPressure] = useState({ systolic: 120, diastolic: 80 });
  const [bloodSugar, setBloodSugar] = useState(96);
  
  // State for environmental factors
  const [humidity, setHumidity] = useState(42);
  const [roomTemp, setRoomTemp] = useState(22.4);
  const [airQuality, setAirQuality] = useState(95);
  const [particulateMatter, setParticulateMatter] = useState(18);
  
  // Apple Watch specific metrics
  const [caloriesBurned, setCaloriesBurned] = useState(347);
  const [standHours, setStandHours] = useState(7);
  const [sleepQuality, setSleepQuality] = useState(85);
  const [sleepDuration, setSleepDuration] = useState(7.2);
  const [heartRateVariability, setHeartRateVariability] = useState(42);
  const [stressLevel, setStressLevel] = useState(28);
  
  // History data
  const [heartRateHistory, setHeartRateHistory] = useState([72, 74, 73, 75, 77, 76, 75]);
  const [bloodOxygenHistory, setBloodOxygenHistory] = useState([97, 98, 98, 97, 98, 99, 98]);
  const [tempHistory, setTempHistory] = useState([36.7, 36.8, 36.8, 36.9, 36.8, 36.7, 36.8]);
  const [respirationHistory, setRespirationHistory] = useState([16, 15, 17, 16, 15, 16, 16]);
  const [humidityHistory, setHumidityHistory] = useState([40, 41, 42, 43, 42, 42, 42]);
  const [roomTempHistory, setRoomTempHistory] = useState([22.2, 22.3, 22.5, 22.4, 22.3, 22.4, 22.4]);
  const [airQualityHistory, setAirQualityHistory] = useState([93, 94, 95, 96, 95, 95, 95]);
  const [caloriesHistory, setCaloriesHistory] = useState([320, 330, 345, 350, 340, 335, 347]);
  const [hrvHistory, setHrvHistory] = useState([40, 41, 43, 44, 42, 41, 42]);
  const [stressHistory, setStressHistory] = useState([30, 32, 29, 27, 28, 30, 28]);
  const [bloodSugarHistory, setBloodSugarHistory] = useState([94, 95, 97, 96, 95, 94, 96]);
  const [particulateMatterHistory, setParticulateMatterHistory] = useState([20, 19, 18, 17, 19, 20, 18]);
  
  // Detailed view modal state
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<{
    title: string;
    value: number | string;
    unit: string;
    icon: React.ComponentType;
    history: number[];
    min?: number;
    max?: number;
    avg?: number;
  } | null>(null);
  
  // Time range for detailed view
  const [selectedTimeRange, setSelectedTimeRange] = useState('day');
  
  // Patient data
  const patient = {
    name: "Sarah Johnson",
    age: 42,
    patientId: "P-38291",
    dob: "05/12/1981",
    phone: "(555) 123-4567",
    email: "sarah.j@example.com",
    condition: "Post-Cardiac Surgery",
    doctor: "Dr. Michael Chen",
    hospitalId: "Memorial General Hospital"
  };
  
  // Device status
  const wearables = [
    { name: "Apple Watch Series 9", icon: FaApple, status: 'connected' as const },
    { name: "ZEN-LYF HeartMonitor", icon: FaHeartbeat, status: 'connected' as const },
    { name: "ZEN-LYF Pulse Oximeter", icon: FaTint, status: 'connected' as const },
    { name: "ZEN-LYF Activity Tracker", icon: FaWalking, status: 'connected' as const },
    { name: "ZEN-LYF Sleep Monitor", icon: FaBed, status: 'connected' as const }
  ];
  
  const homeDevices = [
    { name: "Smart Thermometer", icon: FaThermometerHalf, status: 'connected' as const },
    { name: "Humidity Sensor", icon: FaCloudRain, status: 'connected' as const },
    { name: "Air Quality Monitor", icon: FaLungs, status: 'connected' as const },
    { name: "Smart Lighting", icon: FaLightbulb, status: 'connected' as const }
  ];
  
  // Animation for scroll-triggered elements
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });
  }, [controls]);
  
  // Update data at regular intervals to simulate real-time monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Update heart rate with slight variations
      const newHeartRate = generateRandomData(heartRate - 2, heartRate + 2);
      setHeartRate(newHeartRate);
      setHeartRateHistory(prev => [...prev.slice(1), newHeartRate]);
      
      // Update blood oxygen with slight variations
      const newBloodOxygen = generateRandomData(bloodOxygen - 1, bloodOxygen + 1);
      setBloodOxygen(Math.min(newBloodOxygen, 100)); // Max 100%
      setBloodOxygenHistory(prev => [...prev.slice(1), newBloodOxygen]);
      
      // Update body temperature with slight variations
      const newTemp = Math.round((temperature + (Math.random() * 0.2 - 0.1)) * 10) / 10;
      setTemperature(newTemp);
      setTempHistory(prev => [...prev.slice(1), newTemp]);
      
      // Update respiration rate with slight variations
      const newRespRate = generateRandomData(respirationRate - 1, respirationRate + 1);
      setRespirationRate(newRespRate);
      setRespirationHistory(prev => [...prev.slice(1), newRespRate]);
      
      // Update steps
      const newSteps = steps + generateRandomData(10, 25);
      setSteps(newSteps);
      
      // Update blood pressure with slight variations
      const newSystolic = generateRandomData(bloodPressure.systolic - 2, bloodPressure.systolic + 2);
      const newDiastolic = generateRandomData(bloodPressure.diastolic - 2, bloodPressure.diastolic + 2);
      setBloodPressure({ systolic: newSystolic, diastolic: newDiastolic });
      
      // Update environmental factors
      const newHumidity = generateRandomData(humidity - 1, humidity + 1);
      setHumidity(newHumidity);
      setHumidityHistory(prev => [...prev.slice(1), newHumidity]);
      
      const newRoomTemp = Math.round((roomTemp + (Math.random() * 0.2 - 0.1)) * 10) / 10;
      setRoomTemp(newRoomTemp);
      setRoomTempHistory(prev => [...prev.slice(1), newRoomTemp]);
      
      const newAirQuality = generateRandomData(airQuality - 1, airQuality + 1);
      setAirQuality(newAirQuality);
      setAirQualityHistory(prev => [...prev.slice(1), newAirQuality]);
      
      // Apple Watch metrics
      const newCalories = caloriesBurned + generateRandomData(1, 5);
      setCaloriesBurned(newCalories);
      setCaloriesHistory(prev => [...prev.slice(1), newCalories]);
      
      if (Math.random() > 0.8) { // Occasionally update stand hours
        setStandHours(prev => Math.min(prev + 1, 12));
      }
      
      const newHRV = generateRandomData(heartRateVariability - 2, heartRateVariability + 2);
      setHeartRateVariability(newHRV);
      setHrvHistory(prev => [...prev.slice(1), newHRV]);
      
      const newStress = generateRandomData(stressLevel - 2, stressLevel + 2);
      setStressLevel(newStress);
      setStressHistory(prev => [...prev.slice(1), newStress]);
      
      // Update blood sugar with slight variations
      const newBloodSugar = generateRandomData(bloodSugar - 2, bloodSugar + 2);
      setBloodSugar(newBloodSugar);
      setBloodSugarHistory(prev => [...prev.slice(1), newBloodSugar]);
      
      // Update particulate matter with slight variations
      const newPM = generateRandomData(particulateMatter - 2, particulateMatter + 2);
      setParticulateMatter(newPM);
      setParticulateMatterHistory(prev => [...prev.slice(1), newPM]);
      
      // Update sleep duration and quality occasionally
      if (Math.random() > 0.9) {
        setSleepDuration(prev => {
          const newValue = Math.round((prev + (Math.random() * 0.2 - 0.1)) * 10) / 10;
          return Math.max(6, Math.min(9, newValue));
        });
        
        setSleepQuality(prev => {
          const newValue = generateRandomData(prev - 2, prev + 2);
          return Math.max(70, Math.min(100, newValue));
        });
      }
      
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, [
    heartRate, bloodOxygen, temperature, respirationRate, steps, bloodPressure, humidity, 
    roomTemp, airQuality, caloriesBurned, standHours, heartRateVariability, stressLevel,
    bloodSugar, particulateMatter, sleepQuality, sleepDuration
  ]);
  
  // Function to handle opening the detailed view modal
  const openDetailModal = (metric: {
    title: string;
    value: number | string;
    unit: string;
    icon: React.ComponentType;
    history: number[];
    min?: number;
    max?: number;
    avg?: number;
  }) => {
    setSelectedMetric(metric);
    setShowDetailModal(true);
  };
  
  // Function to close the modal
  const closeDetailModal = () => {
    setShowDetailModal(false);
  };
  
  // Render the component
  return (
    <PageContainer>
      <PageHeader>
        <HeaderTitle>
          <PageTitle>
            <span>Wearable Health</span> Monitoring
          </PageTitle>
          <PageSubtitle>
            Real-time patient monitoring with smart devices and wearables
          </PageSubtitle>
        </HeaderTitle>
        
        <StatusBadge>
          <FaHeartbeat /> Live Monitoring Active
        </StatusBadge>
      </PageHeader>
      
      {/* Patient Info Card */}
      <PatientInfoCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PatientPhoto>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Patient" />
        </PatientPhoto>
        
        <PatientInfo>
          <PatientName>{patient.name}</PatientName>
          <PatientDetails>
            <PatientDetail>
              <FaIdCard />
              <div>Patient ID: {patient.patientId}</div>
            </PatientDetail>
            <PatientDetail>
              <FaCalendarAlt />
              <div>DOB: {patient.dob} (Age: {patient.age})</div>
            </PatientDetail>
            <PatientDetail>
              <FaPhone />
              <div>Phone: {patient.phone}</div>
            </PatientDetail>
            <PatientDetail>
              <FaEnvelope />
              <div>Email: {patient.email}</div>
            </PatientDetail>
            <PatientDetail>
              <FaUser />
              <div>Doctor: {patient.doctor}</div>
              <NormalBadge>
                <FaInfoCircle /> Scheduled Check-up: Tomorrow, 10:00 AM
              </NormalBadge>
            </PatientDetail>
            <PatientDetail>
              <FaInfoCircle />
              <div>Condition: {patient.condition}</div>
              <AlertBadge>
                <FaExclamationTriangle /> Requires Monitoring
              </AlertBadge>
            </PatientDetail>
          </PatientDetails>
        </PatientInfo>
      </PatientInfoCard>
      
      {/* Apple Watch Integration Section */}
      <WatchSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <WatchHeader>
          <WatchTitle>
            <FaApple /> Apple Watch Integration
          </WatchTitle>
          <StatusBadge>
            <FaInfoCircle /> Last Synced: Just now
          </StatusBadge>
        </WatchHeader>
        
        <WatchGrid>
          {/* Heart Rate from Apple Watch */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Heart Rate",
              value: heartRate,
              unit: "BPM",
              icon: FaHeartbeat,
              history: heartRateHistory,
              min: Math.min(...heartRateHistory),
              max: Math.max(...heartRateHistory),
              avg: Math.round(heartRateHistory.reduce((a, b) => a + b, 0) / heartRateHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaHeartbeat /> Heart Rate
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {heartRate} <span>BPM</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {heartRateHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ height: `${(value / 180) * 100}%` }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Calories */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Active Calories",
              value: caloriesBurned,
              unit: "kcal",
              icon: FaRunning,
              history: caloriesHistory,
              min: Math.min(...caloriesHistory),
              max: Math.max(...caloriesHistory),
              avg: Math.round(caloriesHistory.reduce((a, b) => a + b, 0) / caloriesHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaRunning /> Active Calories
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {caloriesBurned} <span>kcal</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {caloriesHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ height: `${(value / 500) * 100}%` }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Stand Hours */}
          <WatchMetric whileHover={{ scale: 1.02 }}>
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaRegChartBar /> Stand Hours
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {standHours}/12 <span>hours</span>
            </WatchMetricValue>
            
            <div style={{ 
              height: '40px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-end', 
              marginTop: 'auto' 
            }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: '8%',
                    height: `${i < standHours ? 100 : 10}%`,
                    backgroundColor: i < standHours ? '#a18cd1' : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px 2px 0 0'
                  }}
                  initial={{ height: '10%' }}
                  animate={{ height: `${i < standHours ? 100 : 10}%` }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </WatchMetric>
          
          {/* Heart Rate Variability */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Heart Rate Variability",
              value: heartRateVariability,
              unit: "ms",
              icon: FaHeartbeat,
              history: hrvHistory,
              min: Math.min(...hrvHistory),
              max: Math.max(...hrvHistory),
              avg: Math.round(hrvHistory.reduce((a, b) => a + b, 0) / hrvHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaHeartbeat /> HRV
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {heartRateVariability} <span>ms</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {hrvHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ height: `${(value / 70) * 100}%` }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Sleep Data */}
          <WatchMetric whileHover={{ scale: 1.02 }}>
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaBed /> Sleep
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {sleepDuration} <span>hours</span>
            </WatchMetricValue>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '0.5rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaMoon style={{ marginRight: '0.25rem', color: '#a18cd1' }} /> Deep: 2.3h
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaBed style={{ marginRight: '0.25rem', color: '#fbc2eb' }} /> REM: 1.9h
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaSun style={{ marginRight: '0.25rem', color: '#f6d365' }} /> Light: 3.0h
              </div>
            </div>
            
            <div style={{ 
              height: '20px', 
              display: 'flex', 
              marginTop: '0.5rem',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '35%', background: '#a18cd1' }} />
              <div style={{ width: '30%', background: '#fbc2eb' }} />
              <div style={{ width: '35%', background: '#f6d365' }} />
            </div>
          </WatchMetric>
          
          {/* Stress Level */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Stress Level",
              value: stressLevel,
              unit: "%",
              icon: FaExclamationTriangle,
              history: stressHistory,
              min: Math.min(...stressHistory),
              max: Math.max(...stressHistory),
              avg: Math.round(stressHistory.reduce((a, b) => a + b, 0) / stressHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaExclamationTriangle /> Stress Level
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {stressLevel} <span>%</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {stressHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${(value / 100) * 100}%`,
                    background: `linear-gradient(to top, 
                      rgba(${Math.min(255, value * 5)}, ${Math.max(0, 255 - value * 5)}, 100, 0.8), 
                      rgba(${Math.min(255, value * 5)}, ${Math.max(0, 255 - value * 5)}, 100, 0.4))`
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Blood Sugar */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Blood Glucose",
              value: bloodSugar,
              unit: "mg/dL",
              icon: FaTint,
              history: bloodSugarHistory,
              min: Math.min(...bloodSugarHistory),
              max: Math.max(...bloodSugarHistory),
              avg: Math.round(bloodSugarHistory.reduce((a, b) => a + b, 0) / bloodSugarHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaTint /> Blood Glucose
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Continuous Monitor
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {bloodSugar} <span>mg/dL</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {bloodSugarHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${(value / 200) * 100}%`,
                    background: value < 70 || value > 140 ? 
                      'linear-gradient(to top, #ff6b6b 0%, #ff8e8e 100%)' : 
                      'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Blood Oxygen */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Blood Oxygen",
              value: bloodOxygen,
              unit: "%",
              icon: FaLungs,
              history: bloodOxygenHistory,
              min: Math.min(...bloodOxygenHistory),
              max: Math.max(...bloodOxygenHistory),
              avg: Math.round(bloodOxygenHistory.reduce((a, b) => a + b, 0) / bloodOxygenHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaLungs /> Blood Oxygen
              </WatchMetricTitle>
              <WatchMetricDevice>
                <FaApple /> Apple Watch
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {bloodOxygen} <span>%</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {bloodOxygenHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${((value - 90) / 10) * 100}%`,
                    background: value < 95 ? 
                      'linear-gradient(to top, #ff6b6b 0%, #ff8e8e 100%)' : 
                      'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
        </WatchGrid>
      </WatchSection>
      
      {/* Vital Signs Dashboard */}
      <DashboardGrid>
        {/* Heart Rate */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaHeartbeat /> Heart Rate
            </MetricTitle>
            {heartRate > 85 ? (
              <AlertBadge>
                <FaExclamationTriangle /> Elevated
              </AlertBadge>
            ) : (
              <NormalBadge>
                <FaInfoCircle /> Normal
              </NormalBadge>
            )}
          </MetricHeader>
          
          <MetricValue
            key={heartRate}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {heartRate} <span>BPM</span>
          </MetricValue>
          
          <MetricChart>
            {heartRateHistory.map((value, index) => (
              <MetricBar
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${(value / 180) * 100}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: `${(value / 180) * 100}%` }}
              />
            ))}
          </MetricChart>
        </MetricCard>
        
        {/* Blood Oxygen */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaTint /> Blood Oxygen
            </MetricTitle>
            {bloodOxygen < 95 ? (
              <AlertBadge>
                <FaExclamationTriangle /> Low
              </AlertBadge>
            ) : (
              <NormalBadge>
                <FaInfoCircle /> Normal
              </NormalBadge>
            )}
          </MetricHeader>
          
          <MetricValue
            key={bloodOxygen}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {bloodOxygen} <span>%</span>
          </MetricValue>
          
          <MetricChart>
            {bloodOxygenHistory.map((value, index) => (
              <MetricBar
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: `${value}%` }}
              />
            ))}
          </MetricChart>
        </MetricCard>
        
        {/* Body Temperature */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaThermometerHalf /> Body Temperature
            </MetricTitle>
            {temperature > 37.5 ? (
              <AlertBadge>
                <FaExclamationTriangle /> Elevated
              </AlertBadge>
            ) : (
              <NormalBadge>
                <FaInfoCircle /> Normal
              </NormalBadge>
            )}
          </MetricHeader>
          
          <MetricValue
            key={temperature}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {temperature} <span>°C</span>
          </MetricValue>
          
          <MetricChart>
            {tempHistory.map((value, index) => (
              <MetricBar
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${((value - 35) / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: `${((value - 35) / 3) * 100}%` }}
              />
            ))}
          </MetricChart>
        </MetricCard>
        
        {/* Respiration Rate */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaLungs /> Respiration Rate
            </MetricTitle>
            {respirationRate > 20 ? (
              <AlertBadge>
                <FaExclamationTriangle /> Elevated
              </AlertBadge>
            ) : (
              <NormalBadge>
                <FaInfoCircle /> Normal
              </NormalBadge>
            )}
          </MetricHeader>
          
          <MetricValue
            key={respirationRate}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {respirationRate} <span>breaths/min</span>
          </MetricValue>
          
          <MetricChart>
            {respirationHistory.map((value, index) => (
              <MetricBar
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${(value / 30) * 100}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: `${(value / 30) * 100}%` }}
              />
            ))}
          </MetricChart>
        </MetricCard>
        
        {/* Steps Count */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaWalking /> Steps
            </MetricTitle>
            <NormalBadge>
              <FaInfoCircle /> Normal
            </NormalBadge>
          </MetricHeader>
          
          <MetricValue
            key={steps}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {steps.toLocaleString()} <span>steps</span>
          </MetricValue>
          
          <div style={{ marginTop: 'auto', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Daily Goal: 8,000 steps ({Math.round((steps / 8000) * 100)}% complete)
          </div>
        </MetricCard>
        
        {/* Blood Pressure */}
        <MetricCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MetricHeader>
            <MetricTitle>
              <FaTint /> Blood Pressure
            </MetricTitle>
            {bloodPressure.systolic > 130 ? (
              <AlertBadge>
                <FaExclamationTriangle /> Elevated
              </AlertBadge>
            ) : (
              <NormalBadge>
                <FaInfoCircle /> Normal
              </NormalBadge>
            )}
          </MetricHeader>
          
          <MetricValue
            key={`${bloodPressure.systolic}-${bloodPressure.diastolic}`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {bloodPressure.systolic}/{bloodPressure.diastolic} <span>mmHg</span>
          </MetricValue>
          
          <div style={{ marginTop: 'auto', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Last Reading: {new Date().toLocaleTimeString()}
          </div>
        </MetricCard>
      </DashboardGrid>
      
      {/* Smart Home Environment Section */}
      <WatchSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginTop: '2rem' }}
      >
        <WatchHeader>
          <WatchTitle>
            <FaLeaf /> Smart Home Environment
          </WatchTitle>
          <StatusBadge>
            <FaInfoCircle /> Last Updated: Just now
          </StatusBadge>
        </WatchHeader>
        
        <WatchGrid>
          {/* Humidity */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Humidity",
              value: humidity,
              unit: "%",
              icon: FaCloudRain,
              history: humidityHistory,
              min: Math.min(...humidityHistory),
              max: Math.max(...humidityHistory),
              avg: Math.round(humidityHistory.reduce((a, b) => a + b, 0) / humidityHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaCloudRain /> Humidity
              </WatchMetricTitle>
              <WatchMetricDevice>
                ZEN-LYF Home
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {humidity} <span>%</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {humidityHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${value}%`,
                    background: (value < 30 || value > 60) ? 
                      'linear-gradient(to top, #ffce95 0%, #ffe9c5 100%)' : 
                      'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Room Temperature */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Room Temperature",
              value: roomTemp,
              unit: "°C",
              icon: FaThermometerHalf,
              history: roomTempHistory,
              min: Math.min(...roomTempHistory),
              max: Math.max(...roomTempHistory),
              avg: Math.round(roomTempHistory.reduce((a, b) => a + b, 0) * 10 / roomTempHistory.length) / 10
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaThermometerHalf /> Room Temperature
              </WatchMetricTitle>
              <WatchMetricDevice>
                ZEN-LYF Home
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {roomTemp} <span>°C</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {roomTempHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${(value / 30) * 100}%`,
                    background: (value < 18 || value > 25) ? 
                      'linear-gradient(to top, #ffce95 0%, #ffe9c5 100%)' : 
                      'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Air Quality */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Air Quality",
              value: airQuality,
              unit: "AQI",
              icon: FaLeaf,
              history: airQualityHistory,
              min: Math.min(...airQualityHistory),
              max: Math.max(...airQualityHistory),
              avg: Math.round(airQualityHistory.reduce((a, b) => a + b, 0) / airQualityHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaLeaf /> Air Quality
              </WatchMetricTitle>
              <WatchMetricDevice>
                ZEN-LYF Home
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {airQuality} <span>AQI</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {airQualityHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${value}%`,
                    background: value < 80 ? 
                      'linear-gradient(to top, #ffce95 0%, #ffe9c5 100%)' : 
                      'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
          
          {/* Particulate Matter */}
          <WatchMetric 
            whileHover={{ scale: 1.02 }}
            onClick={() => openDetailModal({
              title: "Particulate Matter (PM2.5)",
              value: particulateMatter,
              unit: "μg/m³",
              icon: FaSmog,
              history: particulateMatterHistory,
              min: Math.min(...particulateMatterHistory),
              max: Math.max(...particulateMatterHistory),
              avg: Math.round(particulateMatterHistory.reduce((a, b) => a + b, 0) / particulateMatterHistory.length)
            })}
          >
            <WatchMetricHeader>
              <WatchMetricTitle>
                <FaSmog /> Particulate Matter
              </WatchMetricTitle>
              <WatchMetricDevice>
                ZEN-LYF Home
              </WatchMetricDevice>
            </WatchMetricHeader>
            
            <WatchMetricValue>
              {particulateMatter} <span>μg/m³</span>
            </WatchMetricValue>
            
            <WatchMetricChart>
              {particulateMatterHistory.map((value, index) => (
                <WatchMetricBar
                  key={index}
                  style={{ 
                    height: `${(value / 50) * 100}%`,
                    background: value > 25 ? 
                      'linear-gradient(to top, #ff6b6b 0%, #ff8e8e 100%)' : 
                      'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)'
                  }}
                />
              ))}
            </WatchMetricChart>
          </WatchMetric>
        </WatchGrid>
      </WatchSection>
      
      {/* Detailed View Modal */}
      <AnimatePresence>
        {showDetailModal && selectedMetric && (
          <DetailModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetailModal}
          >
            <ModalContent
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>
                  {React.createElement(selectedMetric.icon)} {selectedMetric.title} History
                </ModalTitle>
                <CloseButton onClick={closeDetailModal}>×</CloseButton>
              </ModalHeader>
              
              <DetailedTimeRange>
                <TimeRangeButton 
                  active={selectedTimeRange === 'day'} 
                  onClick={() => setSelectedTimeRange('day')}
                >
                  Day
                </TimeRangeButton>
                <TimeRangeButton 
                  active={selectedTimeRange === 'week'} 
                  onClick={() => setSelectedTimeRange('week')}
                >
                  Week
                </TimeRangeButton>
                <TimeRangeButton 
                  active={selectedTimeRange === 'month'} 
                  onClick={() => setSelectedTimeRange('month')}
                >
                  Month
                </TimeRangeButton>
              </DetailedTimeRange>
              
              <DetailedChart>
                {selectedMetric.history.map((value, index) => (
                  <motion.div
                    key={index}
                    style={{
                      flex: 1,
                      background: `linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)`,
                      borderRadius: '4px 4px 0 0',
                      height: `${(value / (selectedMetric.max || 100)) * 80}%`,
                      minHeight: '4px',
                      margin: '0 2px'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / (selectedMetric.max || 100)) * 80}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  />
                ))}
              </DetailedChart>
              
              <DetailStats>
                <StatItem>
                  <StatLabel>Current</StatLabel>
                  <StatValue>{selectedMetric.value} {selectedMetric.unit}</StatValue>
                </StatItem>
                {selectedMetric.min !== undefined && (
                  <StatItem>
                    <StatLabel>Minimum</StatLabel>
                    <StatValue>{selectedMetric.min} {selectedMetric.unit}</StatValue>
                  </StatItem>
                )}
                {selectedMetric.max !== undefined && (
                  <StatItem>
                    <StatLabel>Maximum</StatLabel>
                    <StatValue>{selectedMetric.max} {selectedMetric.unit}</StatValue>
                  </StatItem>
                )}
                {selectedMetric.avg !== undefined && (
                  <StatItem>
                    <StatLabel>Average</StatLabel>
                    <StatValue>{selectedMetric.avg} {selectedMetric.unit}</StatValue>
                  </StatItem>
                )}
              </DetailStats>
            </ModalContent>
          </DetailModal>
        )}
      </AnimatePresence>
      
      {/* Device Status */}
      <DeviceStatusGrid>
        {/* Wearable Devices */}
        <DeviceStatusCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <DeviceStatusHeader>
            <DeviceStatusTitle>Wearable Devices</DeviceStatusTitle>
            <DeviceStatusBadge status="connected">All Connected</DeviceStatusBadge>
          </DeviceStatusHeader>
          
          <DeviceList>
            {wearables.map((device, index) => (
              <DeviceItem key={index}>
                <DeviceIcon>
                  <device.icon size={20} />
                </DeviceIcon>
                <DeviceName>{device.name}</DeviceName>
                <DeviceStatus status={device.status} />
              </DeviceItem>
            ))}
          </DeviceList>
        </DeviceStatusCard>
        
        {/* Smart Home Devices */}
        <DeviceStatusCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DeviceStatusHeader>
            <DeviceStatusTitle>Smart Home Devices</DeviceStatusTitle>
            <DeviceStatusBadge status="connected">All Connected</DeviceStatusBadge>
          </DeviceStatusHeader>
          
          <DeviceList>
            {homeDevices.map((device, index) => (
              <DeviceItem key={index}>
                <DeviceIcon>
                  <device.icon size={20} />
                </DeviceIcon>
                <DeviceName>{device.name}</DeviceName>
                <DeviceStatus status={device.status} />
              </DeviceItem>
            ))}
          </DeviceList>
        </DeviceStatusCard>
      </DeviceStatusGrid>
      
      {/* Action Buttons */}
      <ActionButtonsContainer>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope /> Contact Doctor
        </ActionButton>
        
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInfoCircle /> View Medical History
        </ActionButton>
        
        <ActionButton
          primary
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUser /> Patient Dashboard
        </ActionButton>
      </ActionButtonsContainer>
    </PageContainer>
  );
};

export default WearableDemo; 