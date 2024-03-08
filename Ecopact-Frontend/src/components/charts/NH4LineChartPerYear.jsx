import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {UserData} from '../../test'
import { useState } from "react";

const NH4LineChartPerYear = () => {
     const calculateAvg=(userData)=>{
      let array=[];
      let subarray=[]; 
      for(let i=1;i<=12;i++){
        subarray=userData.filter((data)=> new Date(data.Date).getMonth()+1===i && new Date(data.Date).getFullYear()===2024 )
        array.push(subarray);
      }
      let moyArr=[];
      for(let i=0;i<array.length;i++){
        let moy=0;
        for(let j=0;j<array[i].length;j++){
          moy=moy+array[i][j].NH4
        }
        moyArr.push(moy/array[i].length);
      }
      return moyArr
     }
     const colorArray = [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)',
      'rgb(255, 0, 0)',
      'rgb(0, 255, 0)',
      'rgb(0, 0, 255)',
      'rgb(255, 255, 0)',
      'rgb(255, 0, 255)',
      'rgb(0, 255, 255)'
    ];
     
      
      const [userData, setUserData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "NH4 Average Rates",
            data:calculateAvg(UserData),
            backgroundColor:colorArray,
            
          },
        ],
      });
      
      const options={
        plugins: {
          title: {
            display: true,
            text: "NH4 Average Rates in 2024"
          },
          legend: {
            display:false
          }
        }
      }
      return (
        <div className="h-[300px] flex justify-center items-center">
           <Bar data={userData} options={options} />
        </div>
      )
}

export default NH4LineChartPerYear
