import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age:'',
    phone:'',
    job: '',
    companyName: '',
    duration: '',
    responsibilities: '',
    achievements: '',
  });

  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (name, value) => {
    const regex = {
      name: /^.{3,}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      username:/^[a-zA-Z0-9_]{3,16}$/,
      phone: /^[0-9]{10}$/,
      age:/^(?:1[01][0-9]|120|\d{1,2})$/,
      gender: /^(M|F)$/,
      job: /^.{3,}$/,
      companyName: /^.{3,}$/,
      duration: /^[1-9][0-9]*$/,
      responsibilities: /^.{3,}$/,
      achievements: /^.{3,}$/,
    };

    return !regex[name]?.test(value) ? `${name} is invalid` : '';
  };

  const handleNext = (path) => {
    navigate(path);
  };

  const handleBack = (path) => {
    navigate(path);
  };
  const handleSave = (path) => {
    navigate(path)
  }

  const saveDataToLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(inputFields));
  };

  return (
    <FormContext.Provider
      value={{
        inputFields,
        errors,
        handleChange,
        handleNext,
        handleBack,
        saveDataToLocalStorage,
        handleSave
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
