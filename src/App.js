import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './componet/useFormContext';
import Step1 from './componet/Step1';
import Step2 from './componet/Step2';
import Review from './componet/DisplayData';
import Layout from './componet/Layout';

const App = () => (
  <FormProvider>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  </FormProvider>
);

export default App;
