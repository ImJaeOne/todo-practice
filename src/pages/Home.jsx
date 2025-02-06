import TodoForm from '../components/TodoForm';

const Home = ({ todo, setTodo }) => {
    return <TodoForm todo={todo} setTodo={setTodo} />;
};

export default Home;
