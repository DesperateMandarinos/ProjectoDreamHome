import React, { useState} from 'react';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Grid from '@mui/joy/Grid';
import { Button,  Stack } from '@mui/joy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function Filters({data, onFilter}) {

  function filterJsonData(data, filters) {
    
    return data.filter((item) => { const key=item.Id
      // Initialize a flag to keep track of whether any provided filters match
      let anyFilterMatches = false;
  
      // Check and apply filters one by one
      if (filters.neighborhood && item.Neighborhood=== filters.neighborhood) {
        anyFilterMatches = true;
      }
      if (filters.price && item.SalePrice === filters.price) {
        anyFilterMatches = true;
      }
      if (filters.bedrooms !== '' && item.TotRmsAbvGrd === filters.bedrooms) {
        anyFilterMatches = true;
      }
      if (filters.bathrooms !== '' && item.FullBath >= filters.bathrooms) {
        anyFilterMatches = true;
      }
  
      return anyFilterMatches;
    });
  }

  function clearFiltersHandler(data){
    return data
  }
  

  const [neighborhood, setNeighborhood] = useState(" ");
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');;

    const filterOnClickHandler = ()=>{
      const filters = {
        neighborhood,
        bedrooms,
        bathrooms,
        price,
      };
      
      onFilter(filterJsonData(data, filters));
    }

    // Function to handle changes in neighborhood input
    const handlePriceChange = (event) => {
      const newValue = event.target.value;
      // You can add validation here to ensure it's a valid price
      setPrice(newValue);
    };

    const handleNeighborhoodChange = (event, selectedNeighborhood) => {
      console.log("Selected Neighborhood:", selectedNeighborhood);
      setNeighborhood(selectedNeighborhood);
    };

  // Function to handle changes in floors input
  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  // Function to handle changes in bathrooms input
  const handleBathroomsChange = (event) => {
    setBathrooms(event.target.value);
  };

  return (
    <div>
      <Grid
        spacing={1.5}
        container
        justifyContent="space-between"
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={12} sm={6} md={3}>
          <Select value={neighborhood} onChange={handleNeighborhoodChange}>
              <Option value="Blmngtn">Bloomington Heights</Option>
              <Option value="Blueste">Bluestem</Option>
              <Option value="BrDale">Briardale</Option>
              <Option value="BrkSide">Brookside</Option>
              <Option value="ClearCr">Clear Creek</Option>
              <Option value="CollgCr">College Creek</Option>
          </Select>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
        <FormControl>
        <Input
              startDecorator="$"
              value={price}
              onChange={handlePriceChange}
              type="number"
              placeholder="0 - 208500"
              aria-label="Price"
              slotProps={{
                input: {
                min:0,
                max:208500
                }
              }}
              
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <FormControl>
            <Input
              startDecorator={<i data-feather="box" />}
              onChange={handleBedroomsChange}
              type="number"
              placeholder="2 - 14"
              aria-label="Bedrooms"
              slotProps={{
                input: {
                min:2,
                max:14
                }
              }}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <FormControl>
            <Input
              startDecorator={<FontAwesomeIcon  icon={ faBath }/>}
              onChange={handleBathroomsChange}
              type="number"
              placeholder="0-3"
              aria-label="Bathrooms"
              slotProps={{
                input: {
                  min:0,
                  max:3
                }
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Stack spacing={1.5} direction="row">
        <Button variant="outlined" color="neutral"  onClick={clearFiltersHandler}>
          Clear
        </Button>
        <Button variant="solid" color="primary" onClick={filterOnClickHandler}>
          Search
        </Button>
    </Stack>
    </div>
  );
}
