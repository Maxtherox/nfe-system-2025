import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { USER_ROLE } from '../utils/roles';
import { useEffect } from 'react';
import { api } from '../services/api';

export function Routes() {
  const { user, signOut} = useAuth();

  useEffect(()=> {
    api
    .get('/users/validated')
    .catch((error) => {
      if(error.response?.status === 401){
        signOut()

      }
    })
  },[])

  function AcessRoute(){
    switch(user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>;
      case USER_ROLE.CUSTOMER:
        return <AppRoutes/>;
        default:
          return <AppRoutes/>;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AcessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}