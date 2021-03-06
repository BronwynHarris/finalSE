import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sortByLastName } from '../store';

import StudentItem from './StudentItem';

const Students = ({ students }) => {
  if(!students.length) {
    return (
      <div className='empty-message'>
        <h2>There are no students in the database.</h2>
        <Link to='/studentform'><button className='btn btn-outline-primary'>Add Student</button></Link>
      </div>
    );
  }

  return (
    <div>
      <div className='header row'>
        <h1>All Students</h1>
      </div>
      <StudentItem students={ students } />
      <Link to='/addstudent'><button className='btn btn-primary'>Add Student</button></Link>
    </div>
  );
};

const mapState = state => ({
  students: sortByLastName(state.students)
});

export default connect(mapState)(Students);
