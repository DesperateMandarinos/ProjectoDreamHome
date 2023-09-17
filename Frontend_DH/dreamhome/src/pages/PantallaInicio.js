/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

function PantallaInicio() {
    return (
        <TwoSidedLayout>
          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            Dreamhome
          </Typography>
          <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
            Find your Dreamhome.
          </Typography>
          <Link component={RouterLink} to="/Questionario">
            <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                Take the test!
            </Button>
          </Link>
          <Typography>
            Already know what you are searching for? <Link component={RouterLink} to="/Casas" fontWeight="lg">See now</Link>
          </Typography>

          <Typography
            level="body-xs"
            sx={{
              position: 'absolute',
              top: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
          </Typography>
        </TwoSidedLayout>
      );
}

export default PantallaInicio;
