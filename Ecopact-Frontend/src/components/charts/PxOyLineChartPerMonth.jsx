import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {UserData} from '../../test'
import { useState } from "react";


const PxOyLineChartPerMonth = () => {
    const [userData, setUserData] = useState({
        labels: UserData.filter((data) => new Date(data.Date).getMonth()===0).map((data) => data.Date),
        datasets: [
          {
            label: "PxOy Rates",
            data: UserData.filter((data) => new Date(data.Date).getMonth()===0).map((data) => data.PxOy),
            
          },
        ],
      });
    return (
        <div className="h-[300px] flex justify-center items-center">
           <Line data={userData} />
        </div>
      )
  
}

export default PxOyLineChartPerMonth
