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

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>{sculpture.name[0]}</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= "HollyWood Artist"
          subheader={sculpture.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={sculpture.url}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
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
        <FormLabel id="demo-radio-buttons-group-label">Hollywood Artist</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={hollywoodArtistList[index]?.name || ''}
        >
          {hollywoodArtistList.map((artist, i) => (
            <FormControlLabel
              key={artist.name}
              value={artist.name}
              control={<Radio />}
              label={artist.name}
              onChange={() => handleRadioClick(i)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }


  let sculpture = hollywoodArtistList[index] || { name: '', description: '', url: '', alt: '' };

  return (
    <Container maxWidth="sm">
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <div className="name">John Rein Vinuya</div>
        <RadioButtons />
        <ArtistCards />
        
      </Box>
    </Container>
  );
}
