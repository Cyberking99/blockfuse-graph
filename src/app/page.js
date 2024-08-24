"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchData');
        const result = await response.json();
        
        if (result.status) {
          setData(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...<br/>Please wait...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Blockfuse Graph</h1>
      <p>This is a simple web page that uses the Graph API to fetch data.</p>
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>ID</th>
            <th>Block Number</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.blockNumber}</td>
              <td>{item.account}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        table, th, td {
          border: 1px solid #ddd;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}
