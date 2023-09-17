import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box'; // Importa el componente Box para aplicar márgenes
import Button from '@mui/joy/Button';

const PantallaQuest = (props) => {
  // Estados para las respuestas a las preguntas
  const [yearBuilt, setYearBuilt] = useState(1900);
  const [yearRemodAdd, setYearRemodAdd] = useState(2000);
  const [masVnrArea, setMasVnrArea] = useState(1000);
  const [totalBsmtSF, setTotalBsmtSF] = useState(5000);
  const [firstFlrSF, setFirstFlrSF] = useState(2500);
  const [grLivArea, setGrLivArea] = useState(3000);
  const [fullBath, setFullBath] = useState(2);
  const [totRmsAbvGrd, setTotRmsAbvGrd] = useState(6);
  const [fireplaces, setFireplaces] = useState(1);
  const [garageFinish, setGarageFinish] = useState('Finished');
  const [garageCars, setGarageCars] = useState(2);
  const [garageArea, setGarageArea] = useState(500);
  const [zoningClassification, setZoningClassification] = useState('Floating Village Residential');
  const [neighborhood, setNeighborhood] = useState('Bloomington Heights');
  const [bldgType, setBldgType] = useState('Single-family Detached');
  const [houseStyle, setHouseStyle] = useState('One story');
  const [exterior1st, setExterior1st] = useState('Asbestos Shingles');
  const [exterior2nd, setExterior2nd] = useState('Asbestos Shingles');
  const [masVnrType, setMasVnrType] = useState('Brick Common');
  const [foundation, setFoundation] = useState('Brick & Tile');
  const [garageType, setGarageType] = useState('More than one type of garage');
  const [saleType, setSaleType] = useState('Warranty Deed - Conventional');
  const [saleCondition, setSaleCondition] = useState('Normal');

  // Manejar cambio de respuestas
  const handleYearBuiltChange = (event, newValue) => {
    setYearBuilt(newValue);
  };

  const handleYearRemodeledChange = (event, newValue) => {
    setYearRemodAdd(newValue);
  };

  const handleMasVnrArea = (event, newValue) => {
    setMasVnrArea(newValue);
  };

  const handleTotalBsmtSF = (event, newValue) => {
    setTotalBsmtSF(newValue);
  }

  const handleFirstFlrSF = (event, newValue) => {
    setFirstFlrSF(newValue);
  }

  const handleGrLivArea = (event, newValue) => {
    setGrLivArea(newValue);
  }

  const handleFullBath = (event, newValue) => {
    setFullBath(newValue);
  }

  const handleTotRmsAbvGrd = (event, newValue) => {
    setTotRmsAbvGrd(newValue);
  }

  const handleFireplaces = (event, newValue) => {
    setFireplaces(newValue);
  }

  const handleGarageFinishChange = (event) => {
    setGarageFinish(event.target.value);
  };

  const handleGarageCars = (event, newValue) => {
    setGarageCars(newValue);
  }

  const handleGarageArea = (event, newValue) => {
    setGarageArea(newValue);
  }

  const handleZoningClassificationChange = (event) => {
    setZoningClassification(event.target.value);
  };

  const handleNeighborhoodChange = (event) => {
    setNeighborhood(event.target.value);
  }

  const handleBldgTypeChange = (event) => {
    setBldgType(event.target.value);
  }

  const handleHouseStyleChange = (event) => {
    setHouseStyle(event.target.value);
  }

  const handleExterior1stChange = (event) => {
    setExterior1st(event.target.value);
  }

  const handleExterior2ndChange = (event) => {
    setExterior2nd(event.target.value);
  }

  const handleMasVnrTypeChange = (event) => {
    setMasVnrType(event.target.value);
  }

  const handleFoundationChange = (event) => {
    setFoundation(event.target.value);
  }

  const handleGarageTypeChange = (event) => {
    setGarageType(event.target.value);
  }

  const handleSaleTypeChange = (event) => {
    setSaleType(event.target.value);
  }

  const handleSaleConditionChange = (event) => {
    setSaleCondition(event.target.value);
  }

  // Generar JSON
  const enviarRespuestas = () => {
    let garageFinishValue = 0;
    switch (garageFinish) {
      case 'Finished':
        garageFinishValue = 3;
        break;
      case 'Rough Finished':
        garageFinishValue = 2;
        break;
      case 'Unfinished':
        garageFinishValue = 1;
        break;
      default:
        garageFinishValue = 0;
        break;
    }

    const zoningClassificationMapping = {
      "Floating Village Residential": "FV",
      "Residential High Density": "RH",
      "Residential Low Density": "RL",
      "Commercial": "C",
      "Residential Medium Density": "RM",
    };
    // Función para mapear la ubicación física dentro de los límites de la ciudad de Ames
  const neighborhoodMapping = {
    "Bloomington Heights": "Blmngtn",
    "Bluestem": "Blueste",
    "Briardale": "BrDale",
    "Brookside": "BrkSide",
    "Clear Creek": "ClearCr",
    "College Creek": "CollgCr",
    "Crawford": "Crawfor",
    "Edwards": "Edwards",
    "Gilbert": "Gilbert",
    "Iowa DOT and Rail Road": "IDOTRR",
    "Meadow Village": "MeadowV",
    "Mitchell": "Mitchel",
    "North Ames": "Names",
    "Northridge": "NoRidge",
    "Northpark Villa": "NPkVill",
    "Northridge Heights": "NridgHt",
    "Northwest Ames": "NWAmes",
    "Old Town": "OldTown",
    "South & West of Iowa State University": "SWISU",
    "Sawyer": "Sawyer",
    "Sawyer West": "SawyerW",
    "Somerset": "Somerst",
    "Stone Brook": "StoneBr",
    "Timberland": "Timber",
    "Veenker": "Veenker",
  };

// Función para mapear el tipo de vivienda
  const bldgTypeMapping = {
    "Single-family Detached": "1Fam",
    "Two-family Conversion; originally built as one-family dwelling": "2FmCon",
    "Duplex": "Duplx",
    "Townhouse End Unit": "TwnhsE",
    "Townhouse Inside Unit": "TwnhsI",
  };

  const houseStyleMapping = {
    "One story": "1Story",
    "One and one-half story: 2nd level finished": "1.5Fin",
    "One and one-half story: 2nd level unfinished": "1.5Unf",
    "Two story": "2Story",
    "Two and one-half story: 2nd level finished": "2.5Fin",
    "Two and one-half story: 2nd level unfinished": "2.5Unf",
    "Split Foyer": "SFoyer",
    "Split Level": "SLvl",
  };

// Función para mapear el revestimiento exterior de la casa (primero)
  const exterior1stMapping = {
    "Asbestos Shingles": "AsbShng",
    "Asphalt Shingles": "AsphShn",
    "Brick Common": "BrkComm",
    "Brick Face": "BrkFace",
    "Cinder Block": "CBlock",
    "Cement Board": "CemntBd",
    "Hard Board": "HdBoard",
    "Imitation Stucco": "ImStucc",
    "Metal Siding": "MetalSd",
    "Other": "Other",
    "Plywood": "Plywood",
    "PreCast": "PreCast",
    "Stone": "Stone",
    "Stucco": "Stucco",
    "Vinyl Siding": "VinylSd",
    "Wood Siding": "Wd Sdng",
    "Wood Shingles": "WdShing",
  };

// Función para mapear el revestimiento exterior de la casa (segundo)
  const exterior2ndMapping = {
    "Asbestos Shingles": "AsbShng",
    "Asphalt Shingles": "AsphShn",
    "Brick Common": "BrkComm",
    "Brick Face": "BrkFace",
    "Cinder Block": "CBlock",
    "Cement Board": "CemntBd",
    "Hard Board": "HdBoard",
    "Imitation Stucco": "ImStucc",
    "Metal Siding": "MetalSd",
    "Other": "Other",
    "Plywood": "Plywood",
    "PreCast": "PreCast",
    "Stone": "Stone",
    "Stucco": "Stucco",
    "Vinyl Siding": "VinylSd",
    "Wood Siding": "Wd Sdng",
    "Wood Shingles": "WdShing",
  };

// Función para mapear el tipo de garaje
  const garageTypeMapping = {
    "More than one type of garage": "2Types",
    "Attached to home": "Attchd",
    "Basement Garage": "Basment",
    "Built-In (Garage part of house - typically has room above garage)": "BuiltIn",
    "Car Port": "CarPort",
    "Detached from home": "Detchd",
    "No Garage": "NA",
  };


// Función para mapear el tipo de venta
  const saleTypeMapping = {
    "Warranty Deed - Conventional": "WD",
    "Warranty Deed - Cash": "CWD",
    "Warranty Deed - VA Loan": "VWD",
    "Home just constructed and sold": "New",
    "Court Officer Deed/Estate": "COD",
    "Contract 15% Down payment regular terms": "Con",
    "Contract Low Down payment and low interest": "ConLw",
    "Contract Low Interest": "ConLI",
    "Contract Low Down": "ConLD",
    "Other": "Oth",
  };

// Función para mapear la condición de venta
  const saleConditionMapping = {
    "Normal Sale": "Normal",
    "Abnormal Sale -  trade, foreclosure, short sale": "Abnorml",
    "Adjoining Land Purchase": "AdjLand",
    "Allocation - two linked properties with separate deeds, typically condo with a garage unit": "Alloca",
    "Sale between family members": "Family",
    "Home was not completed when last assessed (associated with New Homes)": "Partial",
  };

// Función para mapear el tipo de fundación
  const foundationMapping = {
    "Brick & Tile": "BrkTil",
    "Cinder Block": "CBlock",
    "Poured Contrete": "PConc",
    "Slab": "Slab",
    "Stone": "Stone",
    "Wood": "Wood",
  };

// Función para mapear el tipo de revestimiento de mampostería
  const masVnrTypeMapping = {
    "Brick Common": "BrkCmn",
    "Brick Face": "BrkFace",
    "Cinder Block": "CBlock",
    "None": "None",
    "Stone": "Stone",
  };

    // Construir el objeto JSON con las respuestas
    const respuestas = {
      "YearBuilt": yearBuilt,
      "YearRemodAdd": yearRemodAdd,
      "MasVnrArea": masVnrArea,
      "TotalBsmtSF": totalBsmtSF,
      "1stFlrSF": firstFlrSF,
      "GrLivArea": grLivArea,
      "FullBath": fullBath,
      "TotRmsAbvGrd": totRmsAbvGrd,
      "Fireplaces": fireplaces,
      "GarageFinish": garageFinishValue,
      "GarageCars": garageCars,
      "GarageArea": garageArea,
      "MSZoning_FV": zoningClassification === "Floating Village Residential" ? 1 : 0,
      "MSZoning_RH": zoningClassification === "Residential High Density" ? 1 : 0,
      "MSZoning_RL": zoningClassification === "Residential Low Density" ? 1 : 0,
      "MSZoning_C": zoningClassification === "Commercial" ? 1 : 0,
      "MSZoning_RM": zoningClassification === "Residential Medium Density" ? 1 : 0,
      "Neighborhood_Blmngtn": neighborhood === "Bloomington Heights" ? 1 : 0,
      "Neighborhood_Blueste": neighborhood === "Bluestem" ? 1 : 0,
      "Neighborhood_BrDale": neighborhood === "Briardale" ? 1 : 0,
      "Neighborhood_BrkSide": neighborhood === "Brookside" ? 1 : 0,
      "Neighborhood_ClearCr": neighborhood === "Clear Creek" ? 1 : 0,
      "Neighborhood_CollgCr": neighborhood === "College Creek" ? 1 : 0,
      "Neighborhood_Crawfor": neighborhood === "Crawford" ? 1 : 0,
      "Neighborhood_Edwards": neighborhood === "Edwards" ? 1 : 0,
      "Neighborhood_Gilbert": neighborhood === "Gilbert" ? 1 : 0,
      "Neighborhood_IDOTRR": neighborhood === "Iowa DOT and Rail Road" ? 1 : 0,
      "Neighborhood_MeadowV": neighborhood === "Meadow Village" ? 1 : 0,
      "Neighborhood_Mitchel": neighborhood === "Mitchell" ? 1 : 0,
      "Neighborhood_NAmes": neighborhood === "North Ames" ? 1 : 0,
      "Neighborhood_NPkVill": neighborhood === "Northpark Villa" ? 1 : 0,
      "Neighborhood_NWAmes": neighborhood === "Northwest Ames" ? 1 : 0,
      "Neighborhood_NoRidge": neighborhood === "Northridge" ? 1 : 0,
      "Neighborhood_NridgHt": neighborhood === "Northridge Heights" ? 1 : 0,
      "Neighborhood_OldTown": neighborhood === "Old Town" ? 1 : 0,
      "Neighborhood_SWISU": neighborhood === "South & West of Iowa State University" ? 1 : 0,
      "Neighborhood_Sawyer": neighborhood === "Sawyer" ? 1 : 0,
      "Neighborhood_SawyerW": neighborhood === "Sawyer West" ? 1 : 0,
      "Neighborhood_Somerst": neighborhood === "Somerset" ? 1 : 0,
      "Neighborhood_StoneBr": neighborhood === "Stone Brook" ? 1 : 0,
      "Neighborhood_Timber": neighborhood === "Timberland" ? 1 : 0,
      "Neighborhood_Veenker": neighborhood === "Veenker" ? 1 : 0,
      "BldgType_1Fam": bldgType === "Single-family Detached" ? 1 : 0,
      "BldgType_2fmCon": bldgType === "Two-family Conversion; originally built as one-family dwelling" ? 1 : 0,
      "BldgType_Duplex": bldgType === "Duplex" ? 1 : 0,
      "BldgType_Twnhs": bldgType === "Townhouse" ? 1 : 0,
      "BldgType_TwnhsE": bldgType === "Townhouse End Unit" ? 1 : 0,
      "HouseStyle_1.5Fin": houseStyle === "One and one-half story: 2nd level finished" ? 1 : 0,
      "HouseStyle_1.5Unf": houseStyle === "One and one-half story: 2nd level unfinished" ? 1 : 0,
      "HouseStyle_1Story": houseStyle === "One story" ? 1 : 0,
      "HouseStyle_2.5Unf": houseStyle === "Two and one-half story: 2nd level unfinished" ? 1 : 0,
      "HouseStyle_2Story": houseStyle === "Two story" ? 1 : 0,
      "HouseStyle_SFoyer": houseStyle === "Split Foyer" ? 1 : 0,
      "HouseStyle_SLvl": houseStyle === "Split Level" ? 1 : 0,
      "Exterior1st_AsbShng": exterior1st === "Asbestos Shingles" ? 1 : 0,
      "Exterior1st_AsphShn": exterior1st === "Asphalt Shingles" ? 1 : 0,
      "Exterior1st_BrkComm": exterior1st === "Brick Common" ? 1 : 0,
      "Exterior1st_BrkFace": exterior1st === "Brick Face" ? 1 : 0,
      "Exterior1st_CBlock": exterior1st === "Cinder Block" ? 1 : 0,
      "Exterior1st_CemntBd": exterior1st === "Cement Board" ? 1 : 0,
      "Exterior1st_HdBoard": exterior1st === "Hard Board" ? 1 : 0,
      "Exterior1st_MetalSd": exterior1st === "Metal Siding" ? 1 : 0,
      "Exterior1st_Plywood": exterior1st === "Plywood" ? 1 : 0,
      "Exterior1st_Stucco": exterior1st === "Stucco" ? 1 : 0,
      "Exterior1st_VinylSd": exterior1st === "Vinyl Siding" ? 1 : 0,
      "Exterior1st_Wd Sdng": exterior1st === "Wood Siding" ? 1 : 0,
      "Exterior1st_WdShing": exterior1st === "Wood Shingles" ? 1 : 0,
      "Exterior2nd_AsbShng": exterior2nd === "Asbestos Shingles" ? 1 : 0,
      "Exterior2nd_AsphShn": exterior2nd === "Asphalt Shingles" ? 1 : 0,
      "Exterior2nd_Brk Cmn": exterior2nd === "Brick Common" ? 1 : 0,
      "Exterior2nd_BrkFace": exterior2nd === "Brick Face" ? 1 : 0,
      "Exterior2nd_CBlock": exterior2nd === "Cinder Block" ? 1 : 0,
      "Exterior2nd_CmentBd": exterior2nd === "Cement Board" ? 1 : 0,
      "Exterior2nd_HdBoard": exterior2nd === "Hard Board" ? 1 : 0,
      "Exterior2nd_ImStucc": exterior2nd === "Imitation Stucco" ? 1 : 0,
      "Exterior2nd_MetalSd": exterior2nd === "Metal Siding" ? 1 : 0,
      "Exterior2nd_Plywood": exterior2nd === "Plywood" ? 1 : 0,
      "Exterior2nd_Stone": exterior2nd === "Stone" ? 1 : 0,
      "Exterior2nd_Stucco": exterior2nd === "Stucco" ? 1 : 0,
      "Exterior2nd_VinylSd": exterior2nd === "Vinyl Siding" ? 1 : 0,
      "Exterior2nd_Wd Sdng": exterior2nd === "Wood Siding" ? 1 : 0,
      "Exterior2nd_Wd Shng": exterior2nd === "Wood Shingles" ? 1 : 0,
      "MasVnrType_BrkCmn": masVnrType === "Brick Common" ? 1 : 0,
      "MasVnrType_BrkFace": masVnrType === "Brick Face" ? 1 : 0,
      "MasVnrType_None": masVnrType === "None" ? 1 : 0,
      "MasVnrType_Stone": masVnrType === "Stone" ? 1 : 0,
      "Foundation_BrkTil": foundation === "Brick & Tile" ? 1 : 0,
      "Foundation_CBlock": foundation === "Cinder Block" ? 1 : 0,
      "Foundation_PConc": foundation === "Poured Concrete" ? 1 : 0,
      "Foundation_Slab": foundation === "Slab" ? 1 : 0,
      "Foundation_Stone": foundation === "Stone" ? 1 : 0,
      "Foundation_Wood": foundation === "Wood" ? 1 : 0,
      "GarageType_2Types": garageType === "More than one type of garage" ? 1 : 0,
      "GarageType_Attchd": garageType === "Attached to home" ? 1 : 0,
      "GarageType_Basment": garageType === "Basement Garage" ? 1 : 0,
      "GarageType_BuiltIn": garageType === "Built-In (Garage part of house - typically has room above garage)" ? 1 : 0,
      "GarageType_CarPort": garageType === "Car Port" ? 1 : 0,
      "GarageType_Detchd": garageType === "Detached from home" ? 1 : 0,
      "GarageType_NA_Valor": garageType === "No Garage" ? 1 : 0,
      "SaleType_COD": saleType === "Court Officer Deed/Estate" ? 1 : 0,
      "SaleType_CWD": saleType === "Warranty Deed - Cash" ? 1 : 0,
      "SaleType_Con": saleType === "Contract 15% Down payment regular terms" ? 1 : 0,
      "SaleType_ConLD": saleType === "Contract Low Down" ? 1 : 0,
      "SaleType_ConLI": saleType === "Contract Low Interest" ? 1 : 0,
      "SaleType_ConLw": saleType === "Contract Low Down payment and low interest" ? 1 : 0,
      "SaleType_New": saleType === "Home just constructed and sold" ? 1 : 0,
      "SaleType_Oth": saleType === "Other" ? 1 : 0,
      "SaleType_WD": saleType === "Other" ? 1 : 0,
      "SaleCondition_Abnorml": saleCondition === "Abnormal Sale - trade, foreclosure, short sale" ? 1 : 0,
      "SaleCondition_AdjLand": saleCondition === "Adjoining Land Purchase" ? 1 : 0,
      "SaleCondition_Alloca": saleCondition === "Allocation - two linked properties with separate deeds, typically condo with a garage unit" ? 1 : 0,
      "SaleCondition_Family": saleCondition === "Sale between family members" ? 1 : 0,
      "SaleCondition_Normal": saleCondition === "Normal Sale" ? 1 : 0,
      "SaleCondition_Partial": saleCondition === "Home was not completed when last assessed (associated with New Homes)" ? 1 : 0,
    };

    console.log("Respuestas enviadas al backend:", respuestas);

    // Envía el objeto JSON al backend (puedes usar fetch o axios para esto)
    fetch('http://100.25.131.202:8080/modelo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(respuestas),
    })
      .then((response) => response.json())
      .then((data) => {
        const result = Object.values(data);
        // Mostrar la respuesta en una ventana emergente
        const popupWindow = window.open('', '_blank', 'width=400,height=400');
        if (popupWindow && !popupWindow.closed) {
          const popupContent = `
          <html>
            <head>
              <title>Custom Popup</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
                }
                h1 {
                  text-align:center;
                  color: #333;
                }
                pre {
                  font-size:50px
                  text-align:center;
                  background-color: #f9f9f9;
                  padding: 2px;
                }
                img{
                  width: 70%
                }
              </style>
            </head>
            <body>
              <h1>¡Tu casa ideal costaría!:</h1>
              <pre>${result}</pre>
              <img src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?w=740&t=st=1694921570~exp=1694922170~hmac=45778480fc63ec365e4078629443cf27b273facac801861121edd2c9e319634c" alt="Dream house">
            </body>
          </html>
        `

        popupWindow.document.write(popupContent);

          // You can also customize the content of the popup window as needed
          // For example:
          // popupWindow.document.write('<h1>Response Data</h1>');
          // popupWindow.document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        } else {
          alert('Ventana emergente bloqueada. Porfavor permita ventanas emergentes en esta pestaña.');
        };

      })
      .catch((error) => {
        console.error('Error al enviar las respuestas:', error);
      });
  };

  return (
    <Box m={8}>
      <h2>Find your dream home</h2>

      <div>
        <p>Año en el que fue construido: {yearBuilt}</p>
        <Slider
          value={yearBuilt}
          onChange={handleYearBuiltChange}
          valueLabelDisplay="auto"
          min={1872}
          max={2010}
          step={1}
        />
      </div>

      <div>
        <p>Año en el que fue remodelado (si aplica): {yearRemodAdd}</p>
        <Slider
          value={yearRemodAdd}
          onChange={handleYearRemodeledChange}
          valueLabelDisplay="auto"
          min={1950}
          max={2010}
          step={1}
        />
      </div>

      <div>
        <p>Área del revestimiento de mampostería: {masVnrArea}</p>
        <Slider
          value={masVnrArea}
          onChange={handleMasVnrArea}
          valueLabelDisplay="auto"
          min={0}
          max={1600}
          step={1}
        />
      </div>

      <div>
        <p>Square feet que le gustaría el terreno de su casa: {totalBsmtSF}</p>
        <Slider
          value={totalBsmtSF}
          onChange={handleTotalBsmtSF}
          valueLabelDisplay="auto"
          min={0}
          max={6110}
          step={1}
        />
      </div>


      <div>
        <p>Square feet que le gustaría que le gustaría el primer piso de su casa: {firstFlrSF}</p>
        <Slider
          value={firstFlrSF}
          onChange={handleFirstFlrSF}
          valueLabelDisplay="auto"
          min={0}
          max={6110}
          step={1}
        />
      </div>

      <div>
        <p>Square feet que le gustaría que le gustaría el terreno habitable: {grLivArea}</p>
        <Slider
          value={grLivArea}
          onChange={handleGrLivArea}
          valueLabelDisplay="auto"
          min={334}
          max={5642}
          step={1}
        />
      </div>

      <div>
        <p>¿Cuántos baños le gustaría que tuviera su casa?: {fullBath}</p>
        <Slider
          value={fullBath}
          onChange={handleFullBath}
          valueLabelDisplay="auto"
          min={0}
          max={3}
          step={1}
        />
      </div>

      <div>
        <p>¿Cuántas recámaras le gustaría que tuviera su casa?: {totRmsAbvGrd}</p>
        <Slider
          value={totRmsAbvGrd}
          onChange={handleTotRmsAbvGrd}
          valueLabelDisplay="auto"
          min={2}
          max={14}
          step={1}
        />
      </div>


      <div>
        <p>¿Cuántas chimeneas le gustaría que tuviera su casa?: {fireplaces}</p>
        <Slider
          value={fireplaces}
          onChange={handleFireplaces}
          valueLabelDisplay="auto"
          min={0}
          max={3}
          step={1}
        />
      </div>


      <div>
        <p>Le gustaría que el garaje esté terminado?</p>
        <RadioGroup
          value={garageFinish}
          onChange={handleGarageFinishChange}
        >
          <FormControlLabel
            value="Finished"
            control={<Radio />}
            label="Finished"
          />
          <FormControlLabel
            value="Rough Finished"
            control={<Radio />}
            label="Rough Finished"
          />
          <FormControlLabel
            value="Unfinished"
            control={<Radio />}
            label="Unfinished"
          />
          <FormControlLabel
            value="No garage"
            control={<Radio />}
            label="No garage"
          />
        </RadioGroup>
      </div>

      <div>
        <p>¿Cuál es la capacidad en carros en el garage que desea?: {garageCars}</p>
        <Slider
          value={garageCars}
          onChange={handleGarageCars}
          valueLabelDisplay="auto"
          min={0}
          max={4}
          step={1}
        />
      </div>

      <div>
        <p>Área del garage que le gustaría que tuviera: {garageArea}</p>
        <Slider
          value={garageArea}
          onChange={handleGarageArea}
          valueLabelDisplay="auto"
          min={0}
          max={1418}
          step={1}
        />
      </div>


      <div>
        <p>General Zoning Classification:</p>
        <RadioGroup
          value={zoningClassification}
          onChange={handleZoningClassificationChange}
        >
          <FormControlLabel
            value="Floating Village Residential"
            control={<Radio />}
            label="Floating Village Residential"
          />
          <FormControlLabel
            value="Residential High Density"
            control={<Radio />}
            label="Residential High Density"
          />
          <FormControlLabel
            value="Residential Low Density"
            control={<Radio />}
            label="Residential Low Density"
          />
          <FormControlLabel
            value="Commercial"
            control={<Radio />}
            label="Commercial"
          />
          <FormControlLabel
            value="Residential Medium Density"
            control={<Radio />}
            label="Residential Medium Density"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Physical locations within Ames city limits:</p>
        <RadioGroup
          value={neighborhood}
          onChange={handleNeighborhoodChange}
        >
          <FormControlLabel
            value="Bloomington Heights"
            control={<Radio />}
            label="Bloomington Heights"
          />
          <FormControlLabel
            value="Bluestem"
            control={<Radio />}
            label="Bluestem"
          />
          <FormControlLabel
            value="Briardale"
            control={<Radio />}
            label="Briardale"
          />
          <FormControlLabel
            value="Brookside"
            control={<Radio />}
            label="Brookside"
          />
          <FormControlLabel
            value="Clear Creek"
            control={<Radio />}
            label="Clear Creek"
          />
          <FormControlLabel
            value="College Creek"
            control={<Radio />}
            label="College Creek"
          />
          <FormControlLabel
            value="Crawford"
            control={<Radio />}
            label="Crawford"
          />
          <FormControlLabel
            value="Edwards"
            control={<Radio />}
            label="Edwards"
          />
           <FormControlLabel
            value="Gilbert"
            control={<Radio />}
            label="Gilbert"
          />
           <FormControlLabel
            value="Iowa DOT and Rail Road"
            control={<Radio />}
            label="Iowa DOT and Rail Road"
          />
           <FormControlLabel
            value="Meadow Village"
            control={<Radio />}
            label="Meadow Village"
          />
           <FormControlLabel
            value="Mitchell"
            control={<Radio />}
            label="Mitchell"
          />
           <FormControlLabel
            value="North Ames"
            control={<Radio />}
            label="North Ames"
          />
          <FormControlLabel
            value="Northridge"
            control={<Radio />}
            label="Northridge"
          />
          <FormControlLabel
            value="Northpark Villa"
            control={<Radio />}
            label="Northpark Villa"
          />
          <FormControlLabel
            value="Northridge Heights"
            control={<Radio />}
            label="Northridge Heights"
          />
          <FormControlLabel
            value="Northwest Ames"
            control={<Radio />}
            label="Northwest Ames"
          />
          <FormControlLabel
            value="Old Town"
            control={<Radio />}
            label="Old Town"
          />
          <FormControlLabel
            value="South & West of Iowa State University"
            control={<Radio />}
            label="South & West of Iowa State University"
          />
          <FormControlLabel
            value="Sawyer"
            control={<Radio />}
            label="Sawyer"
          />
          <FormControlLabel
            value="Sawyer West"
            control={<Radio />}
            label="Sawyer West"
          />
          <FormControlLabel
            value="Somerset"
            control={<Radio />}
            label="Somerset"
          />
          <FormControlLabel
            value="Stone Brook"
            control={<Radio />}
            label="Stone Brook"
          />
          <FormControlLabel
            value="Timberland"
            control={<Radio />}
            label="Timberland"
          />
          <FormControlLabel
            value="Veenker"
            control={<Radio />}
            label="Veenker"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Type of dwelling:</p>
        <RadioGroup
          value={bldgType}
          onChange={handleBldgTypeChange}
        >
          <FormControlLabel
            value="Single-family Detached"
            control={<Radio />}
            label="Single-family Detached"
          />
          <FormControlLabel
            value="Two-family Conversion; originally built as one-family dwelling"
            control={<Radio />}
            label="Two-family Conversion; originally built as one-family dwelling"
          />
          <FormControlLabel
            value="Duplex"
            control={<Radio />}
            label="Duplex"
          />
          <FormControlLabel
            value="Townhouse End Unit"
            control={<Radio />}
            label="Townhouse End Unit"
          />
          <FormControlLabel
            value="Townhouse Inside Unit"
            control={<Radio />}
            label="Townhouse Inside Unit"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Style of dwelling:</p>
        <RadioGroup
          value={houseStyle}
          onChange={handleHouseStyleChange}
        >
          <FormControlLabel
            value="One story"
            control={<Radio />}
            label="One story"
          />
          <FormControlLabel
            value="One and one-half story: 2nd level finished"
            control={<Radio />}
            label="One and one-half story: 2nd level finished"
          />
          <FormControlLabel
            value="One and one-half story: 2nd level unfinished"
            control={<Radio />}
            label="One and one-half story: 2nd level unfinished"
          />
          <FormControlLabel
            value="Two story"
            control={<Radio />}
            label="Two story"
          />
          <FormControlLabel
            value="Two and one-half story: 2nd level unfinished"
            control={<Radio />}
            label="Two and one-half story: 2nd level unfinished"
          />
          <FormControlLabel
            value="Split Foyer"
            control={<Radio />}
            label="Split Foyer"
          />
          <FormControlLabel
            value="Split Level"
            control={<Radio />}
            label="Split Level"
          />
        </RadioGroup>
      </div>


      <div>
        <p>Exterior covering on house:</p>
        <RadioGroup
          value={exterior1st}
          onChange={handleExterior1stChange}
        >
          <FormControlLabel
            value="Asbestos Shingles"
            control={<Radio />}
            label="Asbestos Shingles"
          />
          <FormControlLabel
            value="Asphalt Shingles"
            control={<Radio />}
            label="Asphalt Shingles"
          />
          <FormControlLabel
            value="Brick Common"
            control={<Radio />}
            label="Brick Common"
          />
          <FormControlLabel
            value="Brick Face"
            control={<Radio />}
            label="Brick Face"
          />
          <FormControlLabel
            value="Cinder Block"
            control={<Radio />}
            label="Cinder Block"
          />
          <FormControlLabel
            value="Cement Board"
            control={<Radio />}
            label="Cement Board"
          />
          <FormControlLabel
            value="Hard Board"
            control={<Radio />}
            label="Hard Board"
          />
          <FormControlLabel
            value="Imitation Stucco"
            control={<Radio />}
            label="Imitation Stucco"
          />
          <FormControlLabel
            value="Metal Siding"
            control={<Radio />}
            label="Metal Siding"
          />
          <FormControlLabel
            value="Other"
            control={<Radio />}
            label="Other"
          />
          <FormControlLabel
            value="Plywood"
            control={<Radio />}
            label="Plywood"
          />
          <FormControlLabel
            value="PreCast"
            control={<Radio />}
            label="PreCast"
          />
          <FormControlLabel
            value="Stone"
            control={<Radio />}
            label="Stone"
          />
          <FormControlLabel
            value="Stucco"
            control={<Radio />}
            label="Stucco"
          />
          <FormControlLabel
            value="Vinyl Siding"
            control={<Radio />}
            label="Vinyl Siding"
          />
          <FormControlLabel
            value="Wood Siding"
            control={<Radio />}
            label="Wood Siding"
          />
          <FormControlLabel
            value="Wood Shingles"
            control={<Radio />}
            label="Wood Shingles"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Exterior covering on house (if more than one material):</p>
        <RadioGroup
          value={exterior2nd}
          onChange={handleExterior2ndChange}
        >
          <FormControlLabel
            value="Asbestos Shingles"
            control={<Radio />}
            label="Asbestos Shingles"
          />
          <FormControlLabel
            value="Asphalt Shingles"
            control={<Radio />}
            label="Asphalt Shingles"
          />
          <FormControlLabel
            value="Brick Common"
            control={<Radio />}
            label="Brick Common"
          />
          <FormControlLabel
            value="Brick Face"
            control={<Radio />}
            label="Brick Face"
          />
          <FormControlLabel
            value="Cinder Block"
            control={<Radio />}
            label="Cinder Block"
          />
           <FormControlLabel
            value="Cement Board"
            control={<Radio />}
            label="Cement Board"
          />
           <FormControlLabel
            value="Hard Board"
            control={<Radio />}
            label="Hard Board"
          />
           <FormControlLabel
            value="Imitation Stucco"
            control={<Radio />}
            label="Imitation Stucco"
          />
           <FormControlLabel
            value="Metal Siding"
            control={<Radio />}
            label="Metal Siding"
          />
          <FormControlLabel
            value="Other"
            control={<Radio />}
            label="Other"
          />
          <FormControlLabel
            value="Plywood"
            control={<Radio />}
            label="Plywood"
          />
          <FormControlLabel
            value="PreCast"
            control={<Radio />}
            label="PreCast"
          />
          <FormControlLabel
            value="Stone"
            control={<Radio />}
            label="Stone"
          />
          <FormControlLabel
            value="Stucco"
            control={<Radio />}
            label="Stucco"
          />
          <FormControlLabel
            value="Vinyl Siding"
            control={<Radio />}
            label="Vinyl Siding"
          />
          <FormControlLabel
            value="Wood Siding"
            control={<Radio />}
            label="Wood Siding"
          />
          <FormControlLabel
            value="Wood Shingles"
            control={<Radio />}
            label="Wood Shingles"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Garage location:</p>
        <RadioGroup
          value={garageType}
          onChange={handleGarageTypeChange}
        >
          <FormControlLabel
            value="More than one type of garage"
            control={<Radio />}
            label="More than one type of garage"
          />
          <FormControlLabel
            value="Attached to home"
            control={<Radio />}
            label="Attached to home"
          />
          <FormControlLabel
            value="Basement Garage"
            control={<Radio />}
            label="Basement Garage"
          />
          <FormControlLabel
            value="Built-In (Garage part of house - typically has room above garage)"
            control={<Radio />}
            label="Built-In (Garage part of house - typically has room above garage)"
          />
          <FormControlLabel
            value="Car Port"
            control={<Radio />}
            label="Car Port"
          />
           <FormControlLabel
            value="Detached from home"
            control={<Radio />}
            label="Detached from home"
          />
           <FormControlLabel
            value="No Garage"
            control={<Radio />}
            label="No Garage"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Type of sale:</p>
        <RadioGroup
          value={saleType}
          onChange={handleSaleTypeChange}
        >
          <FormControlLabel
            value="Warranty Deed - Conventional"
            control={<Radio />}
            label="Warranty Deed - Conventional"
          />
          <FormControlLabel
            value="Warranty Deed - Cash"
            control={<Radio />}
            label="Warranty Deed - Cash"
          />
          <FormControlLabel
            value="Warranty Deed - VA Loan"
            control={<Radio />}
            label="Warranty Deed - VA Loan"
          />
          <FormControlLabel
            value="Home just constructed and sold"
            control={<Radio />}
            label="Home just constructed and sold"
          />
          <FormControlLabel
            value="Court Officer Deed/Estate"
            control={<Radio />}
            label="Court Officer Deed/Estate"
          />
          <FormControlLabel
            value="Contract 15% Down payment regular terms"
            control={<Radio />}
            label="Contract 15% Down payment regular terms"
          />
          <FormControlLabel
            value="Contract Low Down payment and low interest"
            control={<Radio />}
            label="Contract Low Down payment and low interest"
          />
          <FormControlLabel
            value="Contract Low Interest"
            control={<Radio />}
            label="Contract Low Interest"
          />
          <FormControlLabel
            value="Contract Low Down"
            control={<Radio />}
            label="Contract Low Down"
          />
          <FormControlLabel
            value="Other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Condition of sale:</p>
        <RadioGroup
          value={saleCondition}
          onChange={handleSaleConditionChange}
        >
          <FormControlLabel
            value="Normal Sale"
            control={<Radio />}
            label="Normal Sale"
          />
          <FormControlLabel
            value="Abnormal Sale -  trade, foreclosure, short sale"
            control={<Radio />}
            label="Abnormal Sale -  trade, foreclosure, short sale"
          />
          <FormControlLabel
            value="Adjoining Land Purchase"
            control={<Radio />}
            label="Adjoining Land Purchase"
          />
          <FormControlLabel
            value="Allocation - two linked properties with separate deeds, typically condo with a garage unit"
            control={<Radio />}
            label="Allocation - two linked properties with separate deeds, typically condo with a garage unit"
          />
          <FormControlLabel
            value="Sale between family members"
            control={<Radio />}
            label="Sale between family members"
          />
          <FormControlLabel
            value="Home was not completed when last assessed (associated with New Homes)"
            control={<Radio />}
            label="Home was not completed when last assessed (associated with New Homes)"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Type of foundation:</p>
        <RadioGroup
          value={foundation}
          onChange={handleFoundationChange}
        >
          <FormControlLabel
            value="Brick & Tile"
            control={<Radio />}
            label="Brick & Tile"
          />
          <FormControlLabel
            value="Cinder Block "
            control={<Radio />}
            label="Cinder Block"
          />
          <FormControlLabel
            value="Poured Contrete"
            control={<Radio />}
            label="Poured Contrete"
          />
          <FormControlLabel
            value="Slab"
            control={<Radio />}
            label="Slab"
          />
          <FormControlLabel
            value="Stone"
            control={<Radio />}
            label="Stone"
          />
          <FormControlLabel
            value="Wood"
            control={<Radio />}
            label="Wood"
          />
        </RadioGroup>
      </div>

      <div>
        <p>Masonry veneer type:</p>
        <RadioGroup
          value={masVnrType}
          onChange={handleMasVnrTypeChange}
        >
          <FormControlLabel
            value="Brick Common"
            control={<Radio />}
            label="Brick Common"
          />
          <FormControlLabel
            value="Brick Face"
            control={<Radio />}
            label="Brick Face"
          />
          <FormControlLabel
            value="Cinder Block"
            control={<Radio />}
            label="Cinder Block"
          />
          <FormControlLabel
            value="None"
            control={<Radio />}
            label="None"
          />
          <FormControlLabel
            value="Stone"
            control={<Radio />}
            label="Stone"
          />
        </RadioGroup>
      </div>

      <Button onClick={enviarRespuestas}>Enviar Respuestas</Button>
    </Box>
  );
};

export default PantallaQuest;