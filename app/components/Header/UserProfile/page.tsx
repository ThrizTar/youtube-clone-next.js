import { Avatar } from '@mui/material';

export default function UserProfile() {
  return (
    <>
      <Avatar
        alt='user-profile'
        src='/images/user-profile.jpg'
        sx={{ width: 32, height: 32 }}
      />
    </>
  );
}
