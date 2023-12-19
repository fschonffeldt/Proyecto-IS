
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider, useAuth } from '../context/AuthContext';
import NavBar from '../components/NavBar';

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

import { useState, useEffect, useRef } from 'react';

function PageRoot() {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleEmailClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDeleteConversation = () => {
    // Lógica para eliminar la conversación
    setShowConfirmationDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationDialog(false);
  };

  const { user } = useAuth();

  const pageRootRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pageRootRef.current && !pageRootRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={pageRootRef}>
      <NavBar />
      <div>
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <span onClick={handleEmailClick}>{user.email}</span>
          {showOptions && (
            <div style={{ marginTop: '10px' }}>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
          {selectedOption && (
            <div style={{ marginTop: '10px' }}>
              Has seleccionado: {selectedOption}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;