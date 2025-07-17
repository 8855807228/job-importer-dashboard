// ImportDashboard page: shows logs and import button
import React, { useEffect, useState } from 'react';
import ImportLogTable from '../components/ImportLogTable';
import { fetchLogs, triggerImport } from '../services/api';
import '../App.css';

const ImportDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchLogs()
      .then((data) => setLogs(data))
      .catch(() => setError('Failed to fetch logs'))
      .finally(() => setLoading(false));
  }, []);

  const handleImport = async () => {
    setImporting(true);
    setError('');
    try {
      await triggerImport();
      setTimeout(() => window.location.reload(), 1000); // Refresh logs after import
    } catch {
      setError('Import failed');
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Job Import Dashboard</h1>
      <button
        className="import-btn"
        onClick={handleImport}
        disabled={importing}>
        {importing ? 'Importing...' : 'Trigger Import'}
      </button>
      {error && <div className="error-msg">{error}</div>}
      {loading ? (
        <div className="loading-msg">Loading logs...</div>
      ) : (
        <ImportLogTable logs={logs} />
      )}
    </div>
  );
};

export default ImportDashboard;
