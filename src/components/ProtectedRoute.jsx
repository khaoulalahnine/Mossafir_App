import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const user = useSelector((s) => s.auth.user);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  if (requireAdmin && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
}
