import { useState } from 'react';
import { hollywoodArtistList } from './data.tsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  interface ExpandMoreProps {
    expand: boolean;
  }

  const ExpandMore = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'expand',
  })<ExpandMoreProps>(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  }));

  function ArtistCards() {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    let sculpture = hollywoodArtistList[index] || { name: '', description: '', url: '', alt: '' };

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: '#333', color: 'white' }} className='cards'>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>{sculpture.name[0]}</Avatar>}
          action={
            <IconButton aria-label="settings" sx={{ color: 'white' }}>
              <MoreVertIcon />
            </IconButton>
          }
          title="Hollywood Artist"
          subheader={sculpture.name}
          sx={{ color: 'white' }}  // Text color for the card header
        />
        <CardMedia
          component="img"
          height="194"
          image={sculpture.url}
          alt="Artist image"
        />
        <CardActions disableSpacing sx={{ color: 'white' }}>
          <IconButton aria-label="add to favorites" sx={{ color: 'white' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" sx={{ color: 'white' }}>
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: 'white' }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2, color: 'white' }}>
              {sculpture.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

  function handleRadioClick(index: number) {
    setIndex(index);
  }

  function RadioButtons() {
    return (
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          sx={{ color: 'white', marginBottom: 2 }}  // Light text for the label
        >
          John Rein Vinuya - C-PEITEL3
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={hollywoodArtistList[index]?.name || ''}
          sx={{
            gap: 1,
            mb: 3,
            display: 'grid',  // Using grid layout
            mt: '20px',
            gridTemplateColumns: 'repeat(4, 1fr)',  // 4 columns per row
            flexWrap: 'wrap',
            backgroundColor: '#444',  // Dark background
            padding: 2,
            borderRadius: 2,  // Optional rounded corners
          }}
        >
          {hollywoodArtistList.map((artist, i) => (
            <FormControlLabel
              key={artist.name}
              value={artist.name}
              control={
                <Radio
                  sx={{
                    color: 'white',  // Light radio button color
                    '&.Mui-checked': {
                      color: '#ff4081',  // Change color when checked (you can choose any color)
                    },
                  }}
                />
              }
              label={
                <Typography sx={{ color: 'white' }}>  {/* Light text color for labels */}
                  {artist.name}
                </Typography>
              }
              onChange={() => handleRadioClick(i)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="section"
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: '#222',  // Dark background for the container
          color: 'white',  // Light text color
          padding: 5,
          width: '700px',
        }}
      >
        <div className="name" style={{ color: 'white' }}>
          Hollywood Artist
        </div>
        <RadioButtons />
        <div className="card-container">
          <ArtistCards />
        </div>
      </Box>
    </Container>
  );
}
