import React from 'react';
import { useNavigate } from 'react-router';
import { useFormContext } from './useFormContext';

const DisplayData = () => {
  const { inputFields } = useFormContext(); 
  const navigate = useNavigate(); 

  return (
    <div>
      <h2>Review Your Data</h2>
      <p><strong>Job Title:</strong> {inputFields.job}</p>
      <p><strong>Company Name:</strong> {inputFields.companyName}</p>
      <p><strong>Duration:</strong> {inputFields.duration}</p>
      <p><strong>Responsibilities:</strong> {inputFields.responsibilities}</p>
      <p><strong>Achievements:</strong> {inputFields.achievements}</p>
      <button onClick={() => navigate('/step2')}>Edit</button>
    </div>
  );
};

export default DisplayData;
