import { Box, Typography, IconButton } from '@mui/material';
import {
  HomeIcon,
  ShortIcon,
  FollowIcon,
  MusicIcon,
  YouIcon,
  DownloadIcon,
} from './Icon/page';

const sidebarItems = [
  { Icon: HomeIcon, label: 'หน้าแรก' },
  { Icon: ShortIcon, label: 'Shorts' },
  { Icon: FollowIcon, label: 'การติดตาม' },
  { Icon: MusicIcon, label: 'Youtube Music' },
  { Icon: YouIcon, label: 'คุณ' },
  { Icon: DownloadIcon, label: 'การดาวน์โหลด' },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: '0',
        display: 'flex',
        flexDirection: 'column',
        width: '72px',
        padding: '0',
      }}
    >
      {sidebarItems.map(({ Icon, label }) => (
        <IconButton
          key={label} // Use the label as a unique key
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0px 14px', // Adds space between each item
            color: '#333',
            borderRadius: '10px',
            '& .MuiTouchRipple-child': { borderRadius: 'inherit' },
          }}
        >
          <Icon width='24' height='24' />
          <Typography sx={{ fontSize: '10px', lineHeight: '24px' }}>
            {label}
          </Typography>
        </IconButton>
      ))}
    </Box>
  );
}
