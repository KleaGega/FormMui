import React from 'react';
import Box from '@mui/material/Box';
import {
  InputLabel,
  Input,
  Button,
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useFormContext } from './useFormContext';
import { useNavigate } from 'react-router-dom'; 

const Step1 = () => {
  const { inputFields, errors, handleChange } = useFormContext();
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/step2'); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
      }}
    >
      <Box
        sx={{
          width: '60%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          boxSizing: 'border-box',
          boxShadow: '0px 0px 10px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ marginBottom: '20px' }}>
          Step 1: User Information
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Input
              id="name"
              name="name"
              type="text"
              value={inputFields.name}
              onChange={handleChange}
            />
            {errors.name && <Typography color="error">{errors.name}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="username">Username:</InputLabel>
            <Input
              id="username"
              name="username"
              type="text"
              value={inputFields.username}
              onChange={handleChange}
            />
            {errors.username && <Typography color="error">{errors.username}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input
              id="email"
              name="email"
              type="text"
              value={inputFields.email}
              onChange={handleChange}
            />
            {errors.email && <Typography color="error">{errors.email}</Typography>}
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="email">Age:</InputLabel>
            <Input
              id="age"
              name="age"
              type="number"
              value={inputFields.age}
              onChange={handleChange}
            />
            {errors.age && <Typography color="error">{errors.age}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="phone">Phone:</InputLabel>
            <Input
              id="phone"
              name="phone"
              type="number"
              value={inputFields.phone}
              onChange={handleChange}
            />
            {errors.phone && <Typography color="error">{errors.phone}</Typography>}
          </FormControl>

          <FormControl component="fieldset" fullWidth sx={{ marginBottom: '20px' }}>
            <RadioGroup
              row
              name="gender"
              value={inputFields.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="M" control={<Radio />} label="Male" />
            </RadioGroup>
            {errors.gender && <Typography color="error">{errors.gender}</Typography>}
          </FormControl>

          <Button variant="contained" type="submit">
            Next
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Step1;
