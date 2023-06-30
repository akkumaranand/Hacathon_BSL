
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import classes from './graph.module.css';

// const data = [
//   {
//     name: 'AAT KING',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'SHIV SHAKTI',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'SRS TRAVEL',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'VRL TRAVELS',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'ASHOK LEYLAND',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'AAT KINGS',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Anand kings',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const getIntroOfPage = (label) => {
//   if (label === 'AAT KING') {
//     return "AC bus with capacity 90";
//   }
//   if (label === 'Page B') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Page C') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Page D') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'Page E') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

// const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`${label} : ${payload[0].value}`}</p>
//           <p className="intro">{getIntroOfPage(label)}</p>
//           {/* <p className="desc">Anything you want can be displayed here.</p> */}
//         </div>
//       );
//     }
  
//     return null;
//   };

// const Barchat = () => {
//     // static demoUrl = 'https://codesandbox.io/s/tooltip-with-customized-content-lyxvs';

    
//       return (
//         <ResponsiveContainer className={classes.wrapper} width="100%" height="100%">
//           <BarChart 
//           className={classes.wrapper}
//             style={{ fontFamily: 'sans-serif' }}
//             width={650}
//              height={650}
//               data={data}
//                 margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
//           >
//             <CartesianGrid className={classes.wrapper} strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip content={<CustomTooltip />} />
//             <Legend />
//             <Bar dataKey="pv" barSize={20} fill="#12B7B6" />
//           </BarChart>
//         </ResponsiveContainer>
//       );
     
// }


// export default Barchat



import React from 'react'

export default function Barchat() {
  return (
    <div>
      Barchat
    </div>
  )
}
