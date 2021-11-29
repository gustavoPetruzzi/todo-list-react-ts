const NewTodo: React.FC = (props) => {
  return (
    <form>
      <label htmlFor="text"> Text </label>
      <input type="text" id="text" />
    </form>
  );
};

export default NewTodo;
