import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {UserData} from '../../test'
import { useState } from "react";

const NH4LineChartPerMonth = () => {
  const [userData, setUserData] = useState({
    labels: UserData.filter((data) => new Date(data.Date).getMonth()===0).map((data) => data.Date),
    datasets: [
      {
        label: "NH4 Rates",
        data: UserData.filter((data) => new Date(data.Date).getMonth()===0).map((data) => data.NH4),
        borderColor: 'rgb(75, 192, 192)',
        
      },
    ],
  });
  return (
    <div className="h-[300px] flex justify-center items-center">
       <Line data={userData} />
    </div>
  )
}

export default NH4LineChartPerMonth
