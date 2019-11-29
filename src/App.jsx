import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { getTodosAsync } from './redux/todo/todo.action';
import Search from "./Search";
import StatusSelect from "./StatusSelect";
import ListTodo from './components/list-todo/list-todo.component';
import InputTodo from './components/input-todo/input-todo.component';
class App extends React.Component{
  componentDidMount() {
    const { getTodosAsync } = this.props;
    getTodosAsync();
  }
  render() {
    const { isLoading, todos } = this.props;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Search onSubmit={() => console.log("tdod")} />
            <hr></hr>
            <StatusSelect onChange={() => console.log("todo")} />
            <InputTodo />
            <hr></hr>
            { isLoading ? 
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }} >
                <Spinner animation="grow" /> 
              </div>
              : <ListTodo todos={todos}></ListTodo>}
            </Col>
          </Row>
        </Container>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getTodosAsync: () => dispatch(getTodosAsync()),
});

const mapStateToProps = (state, ownProps) => ({
  todos: state.todo.todos,
  isLoading: state.todo.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
