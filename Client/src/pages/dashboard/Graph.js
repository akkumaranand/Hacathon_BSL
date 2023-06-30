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
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                
            ],
            // css bhi daal sakte hai 
            hoverOffset: 4 ,
            borderRadius:30,
            spacing: 10
        }]
    },
    options: {
        // bahut accha property hai 
        // by cutout by can change the radius of circle 
        cutout: 80
    }
}




const Graph = () => {
    return (
        <div >
            <div className='graphkasotory'>
                <div className='chatii'>
                    {/* Chart */}
                    {/* Instead of chart I am using chart js library to add chart in my project */}
                    <Doughnut className='ciclehai' {...config} > </Doughnut>
                    <h3 className=' centerii mb-4 font-bold title'>Ak Travel                    <span className='block text-3xl text-emerald-400'>${1460}</span>
                    </h3>
                </div>
          
                <div className='  flex-col py-20 gap-4'>
                    <Labels></Labels>

                </div>

            </div>

        </div>
    )
}

export default Graph