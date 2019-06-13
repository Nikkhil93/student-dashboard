import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorhandler/withErrorhandler';

import classes from './Students.css';

class Students extends Component {
  state = {
    studentDetails: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/getAllStudents')
      .then(res => {
        const fetchedStudent = [];
        for (let key in res.data) {
          fetchedStudent.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, studentDetails: fetchedStudent });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  displayStudents(studentResultDetail, totalMarksArray) {
    console.log('totalMarksArray', totalMarksArray);
    return (
      <tr key={studentResultDetail.index}>
        <td>{studentResultDetail.name}</td>
        <td>{studentResultDetail.rollNumber}</td>
        <td>{studentResultDetail.totalMarks}</td>
        <td
          className={[
            studentResultDetail.status === 'Fail' ? classes.Fail : '',
            studentResultDetail.totalMarks === Math.max(...totalMarksArray)
              ? classes.top
              : ''
          ].join(' ')}
        >
          {studentResultDetail.status}
        </td>
      </tr>
    );
  }

  setDetails() {
    let studentResultDetail = {};
    let totalMarksArray = [];
    this.state.studentDetails.map(student => {
      let totalMarks = 0;
      for (let subject in student.marks) {
        totalMarks = totalMarks + parseInt(student.marks[subject], 10);
      }
      totalMarksArray.push(totalMarks);
    });
    return this.state.studentDetails.map((student, index) => {
      studentResultDetail.index = index;
      studentResultDetail.name = student.name;
      studentResultDetail.status = 'Pass';
      studentResultDetail.rollNumber = student.rollNumber;
      let totalMarks = 0;
      for (let subject in student.marks) {
        totalMarks = totalMarks + parseInt(student.marks[subject], 10);
        if (parseInt(student.marks[subject], 10) < 20) {
          studentResultDetail.status = 'Fail';
        }
      }
      studentResultDetail['totalMarks'] = totalMarks;
      return (
        <tr key={studentResultDetail.index}>
          <td>{studentResultDetail.name}</td>
          <td>{studentResultDetail.rollNumber}</td>
          <td>{studentResultDetail.totalMarks}</td>
          <td
            className={[
              studentResultDetail.status === 'Fail' ? classes.Fail : '',
              studentResultDetail.totalMarks === Math.max(...totalMarksArray)
                ? classes.top
                : ''
            ].join(' ')}
          >
            {studentResultDetail.status}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className={classes.Students}>
        <table>
          <thead>
            <tr>
              <th colSpan={4}>Students Result Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Total Marks</th>
              <th>Status</th>
            </tr>
            {this.setDetails()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withErrorHandler(Students, axios);
