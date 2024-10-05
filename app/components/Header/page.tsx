import Image from 'next/image';
import Box from '@mui/material/Box';

import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineVideoCall } from 'react-icons/md';
import { PiMicrophoneFill } from 'react-icons/pi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CreateIcon } from './Icon/page';


import Searchbar from './Searchbar/page';
import UserProfile from './UserProfile/page';
import { IconButton } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '56px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 16px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          sx={{
            padding: '8px',
            width: '40px',
            height: '40px',
          }}
        >
          <RxHamburgerMenu size={24} />
        </IconButton>
        <Box
          sx={{
            padding: '21px 16px 18px 16px',
          }}
        >
          <Image
            src={'/svgs/youtube.svg'}
            alt='youtube-logo'
            width={97}
            height={20}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flex: '0 1 732px',
          minWidth: 0,
        }}
      >
        <Box sx={{ flex: '1' }}>
          <Searchbar />
        </Box>
        <IconButton
          sx={{
            bgcolor: '#e9e9e9',
            width: '40px',
            height: '40px',
            marginLeft: '12px',
            color: '#000000',
          }}
        >
          <PiMicrophoneFill size={20} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minWidth: '225px',
        }}
      >
        <IconButton
          sx={{
            padding: '8px',
            width: '40px',
            height: '40px',
            color: '#000000',
          }}
        >
          <CreateIcon />
        </IconButton>

        <IconButton sx={{ width: '40px', height: '40px', color: '#000000' }}>
          <IoMdNotificationsOutline size={24} />
        </IconButton>

        <IconButton
          sx={{
            padding: '1px 6px',
            width: '40px',
            height: '40px',
          }}
        >
          <UserProfile />
        </IconButton>
      </Box>
    </Box>
  );
}
