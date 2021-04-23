import Button from './Button';

const Header = ({ propColor, title }) => {  
  const onClick = () => {
    console.log('click');
  }

  return (
    <header className="header">
      <h2 style={ { color: propColor } }>
        { title }
      </h2>
      <Button color="red" text="Open" onClick={ onClick } />
    </header>
  );
}

Header.defaultProps = {
  title: 'todo list',
  color: 'black'
}

export default Header;
