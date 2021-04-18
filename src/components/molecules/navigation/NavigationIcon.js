import IconPlus from '../../../assets/images/icons/plus.svg';
import IconUser from '../../../assets/images/icons/user.svg';
import IconX from '../../../assets/images/icons/x.svg';

const Icons = {
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const NavigationIcon = ({ name, title }) => {
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[name] === undefined) return null;
  // If icon found, return the icon in a span element
  const Icon = Icons[name];
  return (
    <span className='button__icon'>
      <img src={Icon} alt={Icon} />
      <p>{title}</p>
    </span>
  );
};

export { NavigationIcon };
