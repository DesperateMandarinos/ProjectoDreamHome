import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import useScript from '../useScript.js';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import HeaderSection from '../components/HeaderSection.js';
import Filters from '../components/Filters.js';
import feather from 'feather-icons';
import React, { useState, useEffect } from 'react';
import Pages from '../components/Pages.js';
import HouseData from '../components/HouseData.js';

const useEnhancedEffect =
typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;


function PantallaAlbum() {
  const status = useScript(`https://unpkg.com/feather-icons`)
  const [data, setData] = useState([]);
  const[changes, setChanges]= useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [housesPerPage] = useState(10);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (newData) => {
    setFilteredData(newData)
    setChanges(filteredData)
  };

    useEffect(() => {
      fetch('train2.json')
        .then((response) => response.json())
        .then((jsonData) => {
          setData(jsonData);
          setChanges(jsonData)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

  useEnhancedEffect(() => {
      // Feather icon setup: https://github.com/feathericons/feather#4-replace
      // @ts-ignore
      if (typeof feather !== 'undefined') {
        // @ts-ignore
        feather.replace();
      }
    }, [status]
  );
    
  const indexOfLast = currentPage * housesPerPage;
  const indexOfFirst = indexOfLast - housesPerPage;
  const currentHouses = data.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          '[data-feather], .feather': {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: 'var(--Icon-margin)',
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: '1em',
            height: '1em',
          },
        })}
      />
      <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <Main>
            <Stack spacing={2}>
                <HeaderSection />
                <Divider />
                <Box
                  sx={{
                    width: '100%',
                    height: 360,
                    backgroundSize: 'cover'
                  }}
                  display={{ xs: 'block', md: 'none' }}
                />
                <Filters data = {data} onFilter={handleFilter}/>
                 {console.log((currentHouses))}
                 <HouseData houses={data.length > 1 ?  currentHouses: []}/>
                <Pages housesPerPage={housesPerPage} totalHouses={data.length} paginate={paginate}/>
                  <Divider />
            </Stack>
          </Main>
        </Box>
    </CssVarsProvider>
  );
}

export default PantallaAlbum;