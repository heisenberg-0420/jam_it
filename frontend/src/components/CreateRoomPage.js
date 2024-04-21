import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Link } from 'react-router-dom';

const CreateRoomPage = ({ csrftoken }) => {
  let defaultVotes = 2;
  const [votes, setVotes] = useState(defaultVotes);
  const [guestPause, setGuestPause] = useState(true);

  const handleVotes = (e) => {
    setVotes(parseInt(e.target.value));
  }

  const handleGuestPause = (e) => {
    setGuestPause(e.target.value === 'true');
  }

  const handleRoomButtonPressed = () => {
    console.log(votes, guestPause);
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'X-CSRFToken': csrftoken},
      body: JSON.stringify({votes_skip: votes, guest_pause: guestPause})
    };
    fetch("/api/create", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <Grid container spacing={1} style={{ height: '40%' }}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center"> {/* radio group */}
        <FormControl component="fieldset">
          <FormHelperText>
            <div style={{ textAlign: 'center' }}>
              Guest control of playback state
            </div>
          </FormHelperText>
          <RadioGroup row defaultValue="true" onChange={handleGuestPause}>
            <FormControlLabel value="true" control={<Radio color='primary' />} label="Play/Pause" labelPlacement='bottom' />
            <FormControlLabel value="false" control={<Radio color='secondary' />} label="No control" labelPlacement='bottom' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center"> {/* votes to skip */}
        <FormControl>
          <TextField required={true} type='number' onChange={handleVotes} defaultValue={defaultVotes} inputProps={{min: 1, style: {textAlign: "center"}}} />
          <FormHelperText>
            <div style={{ textAlign: 'center' }}>
              Votes required to skip songs
            </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant='contained' onClick={handleRoomButtonPressed}>Create a Room</Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant='contained' to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  )
}

CreateRoomPage.propTypes = {
  csrftoken: PropTypes.string.isRequired,
};

export default CreateRoomPage;