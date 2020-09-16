export default userName => {
  const [firstName] = userName.split(' ');

  const [firstLetter] = firstName.split('');

  return firstLetter.toUpperCase() + firstName.slice(1);
};
