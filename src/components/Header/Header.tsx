import classes from './Header.module.css';
const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <h1> Todo app </h1>
    </div>
  )
}

export default Header;