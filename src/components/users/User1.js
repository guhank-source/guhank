import React from 'react';
import Useritem1 from './Useritem1';
import Spinner from '../layout/Spinner1';
import PropTypes from 'prop-types';

const User1 = ({ users, loading }) => {
  if (loading) {
    //console.log(users);
    //console.log(loading);
    return (
      <div style={userStyle}>
        {users.map((users) => (
          <Useritem1 key={users.id} users={users} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

User1.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default User1;
