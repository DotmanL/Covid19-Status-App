
import React, { useState, useEffect } from 'react';
import  { NativeSelect, FormControl, Typography} from '@material-ui/core';
import { fetchCountries } from '../../api';
import  styles from './CountryPicker.module.css';



const CountryPicker = ({handleCountryChange}) => {

  const [fetchedCountries, setFetchedCountries] = useState([]);


useEffect(() => {
  const fetchAPI = async () => {
     setFetchedCountries(await fetchCountries()); 
  }
  fetchAPI();
  

}, [setFetchedCountries]);




return (
  <div>
    <Typography className={styles.Typography} variant="body2" align="center"> Select a country below </Typography>
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value =''> Global </option>
          {fetchedCountries.map((country, i) => <option key ={i} value={country}> {country} </option> )}
        </NativeSelect>
      </FormControl>
  </div>
)
}
export default CountryPicker;
