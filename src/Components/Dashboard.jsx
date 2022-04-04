import React, { useEffect, useState } from "react";
import {
  UserIcon,
  DeviceMobileIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Dashboard = () => {
  const [charData, setChartData] = useState([]);
  const getChartData = async () => {
    const respnose = await fetch("chartData.json");
    setChartData(await respnose.json());
  };
  useEffect(() => {
    getChartData();
  }, []);
  console.log(charData);
  return (
    <>
      {/* dashboard top or header content */}
      <div className=" px-[5%] md:px-[10%] lg:px-[15%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 mt-10 items-center text-white">
        <div className="bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center">
          <div className="info">
            <h1 className="text-xl font-bold">1 Billion +</h1>
            <h1 className="text-xl font-bold">Users</h1>
          </div>
          <UserIcon className="w-10" />
        </div>
        <div className="bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center">
          <div className="info">
            <h1 className="text-xl font-bold">High-quality</h1>
            <h1 className="text-xl font-bold">materials</h1>
          </div>
          <DeviceMobileIcon className="w-10" />
        </div>
        <div className="bg-blue-700 border-0 rounded-lg p-5 flex justify-between items-center">
          <div className="info">
            <h1 className="text-xl font-bold">1231 milion +</h1>
            <h1 className="text-xl font-bold">Active Teleivision</h1>
          </div>
          <CheckCircleIcon className="w-10" />
        </div>
      </div>
      {/* dashboard main content  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 my-10 px-5 md:px-[5%] lg:px-[10%]">
        <div>
          <h1 className="text-center text-blue-600 mb-2 text-xl font-bold ">
            Investment
          </h1>

          <div className="bg-blue-600 hover:bg-cyan-300 border-0 rounded-lg p-10 transition-all delay-75 ease-in-out">
            <div className="bg-white p-5 border-0 rounded-lg">
              <ResponsiveContainer width="100%" aspect={3}>
                <BarChart width={500} height={300} data={charData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* revenue container  */}
        <div>
          <h1 className="text-center text-blue-600 mb-2 text-xl font-bold">
            Reveneue
          </h1>

          <div className="bg-blue-600 hover:bg-cyan-300 border-0 rounded-lg p-10 transition-all delay-75 ease-in-out">
            <div className="bg-white p-5 border-0 rounded-lg">
              <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart width={500} height={300} data={charData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* chart second container  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 my-10 px-5 md:px-[5%] lg:px-[10%]">
        <div>
          <h1 className="text-center text-blue-600 mb-2 text-xl font-bold ">
            Investment and Reveneue
          </h1>

          <div className="bg-blue-600 hover:bg-cyan-300 border-0 rounded-lg p-10 transition-all delay-75 ease-in-out">
            <div className="bg-white p-5 border-0 rounded-lg">
              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                  width={500}
                  height={300}
                  data={charData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* revenue container  */}
        <div>
          <h1 className="text-center text-blue-600 mb-2 text-xl font-bold">
            Avarage Sells
          </h1>

          <div className="bg-blue-600 hover:bg-cyan-300 border-0 rounded-lg p-10 transition-all delay-75 ease-in-out">
            <div className="bg-white p-5 border-0 rounded-lg">
              <ResponsiveContainer width="100%" aspect={3}>
                <PieChart width={500} height={300}>
                  <Tooltip />
                  <Pie
                    data={charData}
                    dataKey="id"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                  />
                  <Pie
                    data={charData}
                    dataKey="sell"
                    nameKey="month"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
