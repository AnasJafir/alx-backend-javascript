import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, fullName]) => console.log(`${body.body} ${fullName.firstname} ${fullName.lastname}`))
    .catch(() => console.log('Signup system offline'));
}
