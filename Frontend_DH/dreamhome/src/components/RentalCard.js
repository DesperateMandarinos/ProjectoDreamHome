import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faToilet, faCube, faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function RentalCard({
  image,
  neighborhood,
  price,
  rooms,
  fullbath,
  halfbath,
  area
}) {

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        transition: '250ms all',
        padding: {
          xs: 0,
          sm: 2,
        },
        boxShadow: 'none',
        borderRadius: 'sm',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        width="100%"
        spacing={2.5}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: 200,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
          }}
        >
          <AspectRatio
            ratio={16 / 9}
            sx={(theme) => ({
              borderRadius: 'xs',
              [theme.breakpoints.down('sm')]: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            })}
          >
            <img alt="" src={image} style={{ display: 'block' }} />
          </AspectRatio>
        </Box>
        <Stack
          sx={{
            padding: {
              xs: 2,
              sm: 0,
            },
          }}
          spacing={1}
          flex={1}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <div>
              <Typography fontWeight="md" fontSize="lg">
                  {neighborhood}
              </Typography>
            </div>
          </Stack>
          <Stack spacing={1} direction="row">
            <Typography><strong>Area:</strong> {area}</Typography>
          </Stack>
          <Stack spacing={3} direction="row">
            <Typography startDecorator={<FontAwesomeIcon icon={faLocationDot} />}>
                {neighborhood}
            </Typography>
            <Typography
              startDecorator={<FontAwesomeIcon icon={faCube} />}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              {rooms}
            </Typography>
            <Typography
              startDecorator={<FontAwesomeIcon  icon={ faBath }/>}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              {fullbath}
            </Typography>
            <Typography
              startDecorator={<FontAwesomeIcon icon={faToilet} />}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              {halfbath}
            </Typography>
            <Typography sx={{ flexGrow: 1, textAlign: 'right' }}>
              <strong>${price}</strong> <Typography>total</Typography>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
