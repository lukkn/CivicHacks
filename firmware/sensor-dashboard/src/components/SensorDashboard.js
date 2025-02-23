import React, { useEffect, useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

const SensorDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://localhost:2000/data")
                .then((res) => res.json())
                .then((newData) => {
                    setData((prevData) => [...prevData.slice(-49), { ...newData, time: new Date().toLocaleTimeString() }]);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Sensor Data Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">CO2 Levels (ppm)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value}`, "CO2 Levels (ppm)"]} />
                            <Legend formatter={(value) => ["CO2 Levels (ppm)"]} />
                            <Area type="monotone" dataKey="co2" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="p-4 border rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">Soil Moisture (%)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value}`, "Soil Moisture (%)"]} />
                            <Legend formatter={(value) => ["Soil Moisture (%)"]} />
                            <Area type="monotone" dataKey="moisturePercent" stroke="#ff7300" fill="#ff7300" isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="p-4 border rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">Total Volatile Organic Compounds (ppb)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value}`, "Total Volatile Organic Compounds (ppb)"]} />
                            <Legend formatter={(value) => ["Total Volatile Organic Compounds (ppb)"]} />
                            <Area type="monotone" dataKey="tvoc" stroke="#d88484" fill="#d88484" isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="p-4 border rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">Temperature (°C)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`${value}`, "Temperature (°C)"]} />
                            <Legend formatter={(value) => ["Temperature (°C)"]} />
                            <Area type="monotone" dataKey="temperatureC" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SensorDashboard;
