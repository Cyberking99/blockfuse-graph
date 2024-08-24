"use client";

import { useEffect, useState } from 'react';

export default function Home() {

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
          <tr>
            <td>1</td>
            <td>0x0fff</td>
            <td>123</td>
            <td>0xe12j3</td>
          </tr>
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
