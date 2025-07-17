// Table UI for import logs
import React from 'react';

const ImportLogTable = ({ logs }) => (
  <div className="p-4">
    <h2 className="text-lg font-bold mb-2">Import History</h2>
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th>Date</th>
          <th>Feed Source</th>
          <th>Total</th>
          <th>New</th>
          <th>Updated</th>
          <th>Failed</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, idx) => (
          <tr key={idx} className="border-t">
            <td>{new Date(log.timestamp).toLocaleString()}</td>
            <td>{log.feedSource}</td>
            <td>{log.totalFetched}</td>
            <td>{log.newJobs}</td>
            <td>{log.updatedJobs}</td>
            <td>{log.failedJobs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ImportLogTable;
