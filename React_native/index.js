import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, setTodoText } from './actions';

const Todo = () => {
  const todo = useSelector(state => state.todo);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodoText(''));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={text => dispatch(setTodoText(text))}
        placeholder="Add a new todo"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {todos.map((t, index) => (
        <View key={index} style={styles.todoContainer}>
          <Text style={styles.todo}>{t}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  todoContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
  },
  todo: {
    fontSize: 20,
  },
});

export default Todo;
