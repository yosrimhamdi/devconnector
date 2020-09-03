export default [
  {
    name: 'handle',
    placeholder: '* profile handle',
    type: 'text',
    message:
      'a unique handle for your profile URL. Your full name, company name, nickname',
    errorName: 'handleExists',
  },
  {
    name: 'status',
    type: 'select',
    message: 'give us an idea of where you are at in your career',
  },
  {
    name: 'company',
    placeholder: 'company',
    type: 'text',
    message: 'could be your own company or one you work for',
  },
  {
    name: 'website',
    placeholder: 'website',
    type: 'text',
    message: 'could be your own website or company one',
  },
  {
    name: 'location',
    placeholder: 'location',
    type: 'text',
    message: 'city or city & state suggested (eg. Boston, MA)',
  },
  {
    name: 'skills',
    placeholder: '* skills',
    type: 'text',
    message: 'please use comma, separated values (eg. HTML, CSS, PHP)',
  },
  {
    name: 'githubusername',
    placeholder: 'github username',
    type: 'text',
    message:
      'if you want your latest repos and a Github link, include your username',
  },
  {
    name: 'bio',
    type: 'textarea',
    placeholder: 'short bio',
    message: 'tell us a little about yourself',
  },
];
