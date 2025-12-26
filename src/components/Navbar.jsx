import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-8 mr-2" />
          <span className="font-bold">MOUSSAFIR</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <Link to="/guides" className="text-sm">Guides</Link>
        <Link to="/restaurants" className="text-sm">Restaurants</Link>
        <Link to="/artisans" className="text-sm">Artisans</Link>
      </div>

      <div className="flex items-center gap-3">
        {!user && (
          <Link to="/auth" className="bg-blue-600 text-white px-3 py-1 rounded">Login</Link>
        )}

        {user && user.role === 'user' && (
          <>
            <Link to="/profile" className="text-sm">{user.name}</Link>
            <Link to="/favorites" className="text-sm">Favorites</Link>
            <Link to="/bookings" className="text-sm">Bookings</Link>
            <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </>
        )}

        {user && user.role === 'admin' && (
          <>
            <Link to="/admin" className="text-sm">Dashboard</Link>
            <Link to="/admin/posts" className="text-sm">Posts</Link>
            <Link to="/admin/products" className="text-sm">Products</Link>
            <Link to="/admin/trips" className="text-sm">Trips</Link>
            <button onClick={onLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </>
        )}

        <button className="md:hidden" onClick={() => setOpen(o => !o)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
