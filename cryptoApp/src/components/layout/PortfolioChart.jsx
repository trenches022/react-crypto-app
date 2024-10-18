import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useCrypto } from '../../context/crypto-context';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PortfolioChart = () => {

  const { assets } = useCrypto();

  const data = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        label: '$',
        data: assets.map((a) => a.totalAmount),
        backgroundColor: [
          'rgba(90, 34, 139, 0.5)',
          'rgba(159, 90, 253, 0.5)',
          'rgba(3, 138, 255, 0.5)',
          'rgba(130, 94, 92, 0.5)',
          'rgba(90, 34, 139, 0.5)',
        ],      
      },
    ],
  };

  return (
    <div style={{ 

      display: 'flex', 
      marginBottom: '1rem', 
      justifyContent: 'center', 
      height: 400 }}>

      <Pie data={data} />
    </div>
  );
};