import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  console.log(auth)

  useEffect(() => {
    setUser(auth.currentUser);
    console.log(user)
  }, []);

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

export default Profile;