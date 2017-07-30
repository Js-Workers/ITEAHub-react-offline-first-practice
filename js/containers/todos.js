import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodosList from '../components/todos';
import {deleteItem, addItem} from '../actions/todos';

class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(event) {
    this.setState({item: event.target.value});
  }
  addItem() {
    this.props.addItem({
      id: Date.now(),
      title: this.state.item,
      status: 'inactive',
    });
  }
  deleteItem(id) {
    return () => {
      this.props.deleteItem(id);
    };
  }
  render() {
    return (
      <div>
        <TodosList todos={ this.props.todos } deleteItem={this.deleteItem} />
        <div style={{padding: 20}}>
          <input onChange={this.changeTitle} type="text"/>
          <div onClick={this.addItem}>Add item</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => ({ todos });
const mapActionsToProps = dispatch => bindActionCreators({deleteItem, addItem}, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(TodosContainer);
