import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function DynamicDataViewer({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/dynamicdata/by_type/?type=${type}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [type]);

  if (type === "currency") {
    return (
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-2">Currency Data</h2>
        <Table
          dataSource={data}
          columns={[
            { title: "ID", dataIndex: "id" },
            { title: "Description", dataIndex: "description" },
            { title: "Value", dataIndex: "value" },
            { title: "Created At", dataIndex: "created_at" },
          ]}
          rowKey="id"
        />
      </Card>
    );
  }

  if (type === "MILK-RECORD") {
    return (
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-2">Milk Records</h2>
        <Table
          dataSource={data}
          columns={[
            { title: "ID", dataIndex: "id" },
            { title: "Description", dataIndex: "description" },
            { title: "Value", dataIndex: "value" },
            { title: "Created At", dataIndex: "created_at" },
          ]}
          rowKey="id"
        />
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.map((d, i) => ({ x: i, y: d.value.amount || 0 }))}>
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    );
  }

  if (type === "ANIMAL") {
    return (
      <div className="grid grid-cols-3 gap-4">
        {data.map(item => (
          <Card key={item.id} className="p-3 flex flex-col items-center">
            {item.image && (
              <img
                src={item.image}
                alt={item.description}
                className="w-24 h-24 object-cover rounded-full mb-2"
              />
            )}
            <h3 className="font-semibold">{item.description}</h3>
            <pre className="text-xs text-gray-600">{JSON.stringify(item.value, null, 2)}</pre>
          </Card>
        ))}
      </div>
    );
  }

  return <div>No valid type selected.</div>;
}
