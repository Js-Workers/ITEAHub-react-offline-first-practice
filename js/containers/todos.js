import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodosList from '../components/todos';
import {deleteItem} from '../actions/todos';


class TodosContainer extends Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(id) {
    return () => {
      this.props.deleteItem(id);
    };
  }
  render() {
    return (
      <TodosList todos={ this.props.todos } deleteItem={this.deleteItem} />
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });
const mapActionsToProps = dispatch => bindActionCreators({deleteItem}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(TodosContainer);
