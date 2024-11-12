import React from 'react';
import Box from '@mui/material/Box';
import { InputLabel, Input, Button, FormControl, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useFormContext } from './useFormContext';

const Step2 = () => {
  const { inputFields, errors, handleChange } = useFormContext(); 
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/review');  
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
        <Typography variant="h5" component="div" textAlign="center" sx={{ marginBottom: '20px' }}>
          Step 2: Experience
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="job">Job Title:</InputLabel>
            <Input
              id="job"
              name="job"
              type="text"
              value={inputFields.job}
              onChange={handleChange}
            />
            {errors.job && <Typography color="error">{errors.job}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="companyName">Company Name:</InputLabel>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              value={inputFields.companyName}
              onChange={handleChange}
            />
            {errors.companyName && <Typography color="error">{errors.companyName}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="duration">Duration:</InputLabel>
            <Input
              id="duration"
              name="duration"
              type="number"
              value={inputFields.duration}
              onChange={handleChange}
            />
            {errors.duration && <Typography color="error">{errors.duration}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="responsibilities">Responsibilities:</InputLabel>
            <Input
              id="responsibilities"
              name="responsibilities"
              type="text"
              value={inputFields.responsibilities}
              onChange={handleChange}
            />
            {errors.responsibilities && <Typography color="error">{errors.responsibilities}</Typography>}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel htmlFor="achievements">Achievements:</InputLabel>
            <Input
              id="achievements"
              name="achievements"
              type="text"
              value={inputFields.achievements}
              onChange={handleChange}
            />
            {errors.achievements && <Typography color="error">{errors.achievements}</Typography>}
          </FormControl>

          <Box sx={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" onClick={() => navigate('/step1')}>
              Prev
            </Button>
            
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Step2;
