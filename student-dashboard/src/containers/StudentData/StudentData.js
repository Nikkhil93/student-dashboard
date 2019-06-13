import React, {
  Component
} from 'react';

import Button from '../../components/UI/Button/Button';
import classes from './StudentData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';

class StudentData extends Component {
  state = {
    orderForm: {
      name: this.populateStateStudentfrom(
        'input',
        'Name',
        'text',
        'Enter Your Name',
        'required',
        '^[a-zA-Z]{1,20}$',
        20
      ),
      LastName: this.populateStateStudentfrom(
        'input',
        'Last Name',
        'text',
        'Enter Your Last Name',
        'required',
        '^([A-Za-z]){1,20}$',
        20
      ),
      Class: this.populateStateStudentfrom(
        'input',
        'Class',
        'text',
        'Enter Your Class (ex: 5A)',
        'required',
        '^[1-9][0-9]*[a-zA-Z]*$'
      ),
      YearOfPassing: this.populateStateStudentfrom(
        'input',
        'Year Of Passing',
        'number',
        'Enter Your Year Of Passing',
        'required',
        '^[1-9][0-9]{3}$'
      ),
      percentage: this.populateStateStudentfrom(
        'input',
        'Percentage',
        'number',
        'Enter Your Percentage',
        'required',
        '^[1-9][0-9]{0,2}$'
      )
    },
    formIsValid: false,
    loading: false
  };

  populateStateStudentfrom(
    elementType,
    name,
    type,
    placeholder,
    required,
    pattern,
    maxLength
  ) {
    let details = {};
    details = {
      elementType: elementType,
      elementConfig: {
        type: type,
        placeholder: placeholder
      },
      value: '',
      valid: false,
      touched: false,
      name: name
    };
    if (required === 'required') {
      details['validation'] = {
        required: true
      };
    }
    if (!isNaN(maxLength)) {
      details.validation['maxLength'] = maxLength;
    }
    if (pattern) {
      details.validation['pattern'] = pattern;
    }
    return details;
  }

  userInputHandler = (event, inputIdentifier) => {
    const updatedStudentForm = {
      ...this.state.orderForm
    };
    const updatedElement = {
      ...updatedStudentForm[inputIdentifier]
    };
    updatedElement.value = event.target.value;
    updatedElement.valid = this.checkvalidity(
      updatedElement.value,
      updatedElement.validation,
      updatedElement.name
    );
    updatedElement.touched = true;
    updatedStudentForm[inputIdentifier] = updatedElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedStudentForm) {
      formIsValid = updatedStudentForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      orderForm: updatedStudentForm,
      formIsValid: formIsValid
    });
  };

  checkvalidity(value, rules, name) {
    let isValid = true;
    if (rules) {
      if (rules.required) {
        isValid = value.trim() !== '' && isValid;
      }
      if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
      }
      if (rules.pattern) {
        let testPattern = new RegExp(rules.pattern);
        isValid = value.match(testPattern) && isValid;
      }
      if (name === 'Percentage') {
        isValid = value <= 100 && isValid;
      }
      if (name === 'Year Of Passing') {
        isValid = value <= 2017 && isValid;
      }
    }
    return isValid;
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = ( <
      form onSubmit = {
        () => alert('Submitted')
      } > {
        formElementArray.map(formElement => ( <
          Input key = {
            formElement.id
          }
          elementType = {
            formElement.config.elementType
          }
          elementConfig = {
            formElement.config.elementConfig
          }
          value = {
            formElement.config.value
          }
          changed = {
            event => this.userInputHandler(event, formElement.id)
          }
          invalid = {!formElement.config.valid
          }
          touched = {
            formElement.config.touched
          }
          shouldValidate = {
            formElement.config.validation
          }
          valueName = {
            formElement.config.name
          }
          />
        ))
      } <
      Button btnType = "Success"
      disabled = {!this.state.formIsValid
      } >
      Save <
      /Button> <
      /form>
    );
    if (this.state.loading) {
      form = < Spinner / > ;
    }

    return ( <
      div className = {
        classes.StudentData
      } >
      <
      h4 > Enter Student Details < /h4> {
        form
      } <
      /div>
    );
  }
}

export default StudentData;