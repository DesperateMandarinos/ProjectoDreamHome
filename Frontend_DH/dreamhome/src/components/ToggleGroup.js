import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { radioClasses } from '@mui/joy/Radio';

const ToggleGroup = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <RadioGroup
      orientation="horizontal"
      aria-label="Alignment"
      name="alignment"
      variant="outlined"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((option, index) => (
        <Box
          key={option.value}
          sx={(theme) => ({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            paddingX: 2,
            '&:not([data-first-child])': {
              borderLeft: '1px solid',
              borderColor: 'divider',
            },
            [`&[data-first-child] .${radioClasses.action}`]: {
              borderTopLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
            [`&[data-last-child] .${radioClasses.action}`]: {
              borderTopRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
          })}
          data-first-child={index === 0 ? true : undefined}
          data-last-child={index === options.length - 1 ? true : undefined}
        >
          <Radio
            value={option.value}
            disableIcon
            overlay
            label={option.label}
            color="neutral"
            variant={selectedOption === option.value ? 'soft' : 'plain'}
            slotProps={{
              input: { 'aria-label': option.value },
              action: {
                sx: { borderRadius: 0, transition: 'none' },
              },
              label: { sx: { lineHeight: 0, fontSize: 'sm', fontWeight: 'lg' } },
            }}
          />
        </Box>
      ))}
    </RadioGroup>
  );
};

export default ToggleGroup;
