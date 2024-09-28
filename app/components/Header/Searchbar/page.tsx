import { Box, IconButton, TextField } from '@mui/material';
import { CiSearch } from 'react-icons/ci';

export default function Searchbar() {
  return (
    <>
      <Box
        sx={{
          display: {sm: 'flex', xs: 'none'},
          flexDirection: 'row',
          height: '40px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid #ccc',
            borderRadius: '40px 0 0 40px',
            padding: '0 4px 0 16px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
            alignItems: 'center',
            flex: '1',
            marginLeft: '32px',
            borderRight: 'none',
          }}
        >
          <TextField
            sx={{
              '& .MuiInputBase-input': {
                padding: '1px 0', // Adjust input text padding
                color: '#333', // Text color
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove default border styling
              },
            }}
            size='small'
            placeholder='ค้นหา'
            fullWidth
            id='fullWidth'
          />
        </Box>
        <IconButton
          sx={{
            border: '1px solid #d3d3d3',
            bgcolor: '#f8f8f8',
            borderRadius: '0 40px 40px 0',
            height: '40px',
            width: '64px',
          }}
        >
          <CiSearch size={24} />
        </IconButton>
      </Box>
    </>
  );
}
