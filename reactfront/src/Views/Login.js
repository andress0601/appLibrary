/*import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {sendRequest} from '../functions';

import storage from '../Storage/storage';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const go = useNavigate();
    const csrf = async()=>{
    await axios.get('/sanctum/csrf-cookie'); 
}
const login = async(e)=>{ 
    e.preventDefault();
    await csrf();
    const form = {email:email, password:password};
    const res = await sendRequest('POST',form,'/api/auth/login','',false);
    if(res.status == true){
        storage.set('authToken',res.token);
        storage.set('authUser',res.data);
        go('/');
    }
}

  return (
      <div className='container-fluid'>
          <div className='row mt-5'>
              <div className='col-md-4 offset-md-4'>
                  <div className='card border border-primary'>
                      <div className='card-header bg-primary border border-primary text white'>
                        LOGIN
                          <div className='card-body' ></div>
                      </div>

                  </div>

              </div>

          </div>
      </div>   
    
    
     
  )
}

export default Login


   */