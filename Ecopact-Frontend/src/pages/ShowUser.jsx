import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../apiCalls/userApiCall';

const ShowUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getOneUser(id);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]); 


  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
};

export default ShowUser;
