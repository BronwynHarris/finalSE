import React from 'react';
import CampusItem from './CampusItem';

class StudentCampusDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.student ? this.props.student.campusId : -1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { match, campuses, put, campus } = this.props;

    let registration = `This student is not part of a campus. Please select a campus.`;

    if(campus) {
      registration = 'This student is registered to the following campus:';
    }

    return (
      <div className='student-detail'>
        <h2>{ registration }</h2>
        <div className='student-detail'>
          { campus && <CampusItem campuses={[ campus ]} /> }
          <form onSubmit={ (event) => put(event, match.params.id, { campusId: Number(this.state.value) })}>
            <select id='student-campus-dropdown' name='campus' value={ this.state.value } onChange={ this.handleChange }>
              <option value='-1'>Select a campus...</option>
              { campuses && campuses.map(campus => (
                <option key={ campus.id } value={ campus.id }>{ campus.name }</option>
              ))}
            </select>
            <br />
            <button className='btn btn-outline-primary'>Change Campus</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StudentCampusDetail;
