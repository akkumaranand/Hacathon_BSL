import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Labels from './Labels';
import './Graph.css'

Chart.register(ArcElement);

// we want to customize this chart
// const data = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };

const config = {
    data: {
        datasets: [{
            //   label: 'My First Dataset',
            data: [100,78,50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(55, 05, 86)',
                
            ],
            // css bhi daal sakte hai 
            hoverOffset: 9 ,
            borderRadius:13,
            spacing: 10
        }]
    },
    options: {
        // bahut accha property hai 
        // by cutout by can change the radius of circle 
        cutout: 50
    }
}




const Graph1 = () => {
    return (
        <div >
            <div className='grauyephk'>
                <div className='chatiooi'>
                    {/* Chart */}
                    {/* Instead of chart I am using chart js library to add chart in my project */}
                    <Doughnut  {...config} > </Doughnut>
                    <h3 className=' centeriiii  mb-4 font-bold title'>Total
                    <span className='block text-3xl text-emerald-400'>${91460}</span>
                    </h3>
                </div>

            </div>

        </div>
    )
}

export default Graph1