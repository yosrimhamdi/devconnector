export default firstname => {
  const [firstLetter] = firstname.split('');

  return firstLetter.toUpperCase() + firstname.slice(1);
};
