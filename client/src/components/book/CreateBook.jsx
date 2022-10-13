import React, { useState } from 'react'
import {
  Box,
  Typography,
  MenuItem,
  InputLabel,
  PostAddIcon,
  FormControl,
  TextField,
  Button,

} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const useStyles = makeStyles((theme) => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }
})

function CreateBook() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [coverImg, setCoverImg] = useState('')
  const [is_Available, setIs_Available] = useState('')
  const [books, setBooks] = useState({})
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleAvailabilityChange = (event) => {
    setIs_Available(event.target.value)
  }

  function handleSubmit(e) {

    e.preventDefault()
    const formData = {
      title: title,
      author: author,
      coverImg: coverImg,
      is_Available: is_Available,
      category: category,
    }

    fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json())
    window.location.replace('/home')
  }

  return (
    <div className={classes.form}>
      <Box sx={{ mt: 6, mb: 6, mr: 10, ml: 10 }} maxWidth='md'>
        <Typography variant='h2' sx={{ mb: 2 }}>
          Post New Book
        </Typography>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mt: 1, mb: 1.5 }}
            label='Title'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />

          <TextField
            onChange={(e) => setAuthor(e.target.value)}
            sx={{ mt: 1, mb: 1.5 }}
            label='author'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />
          <TextField
            onChange={(e) => setCoverImg(e.target.value)}
            sx={{ mt: 1, mb: 1.5 }}
            label='img'
            variant='outlined'
            color='secondary'
            fullWidth
            required
          />

          <Box sx={{ minWidth: 120, mt: 1, mb: 1.5 }}>
            <FormControl fullWidth>
              <InputLabel id='availabilty'>Is Available</InputLabel>
              <Select
                labelId='availability'
                id='availabiltySelect'
                value={is_Available}
                label='Is Available'
                onChange={handleAvailabilityChange}
              >
                <MenuItem value={0}>yes</MenuItem>
                <MenuItem value={1}>no</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, mt: 1, mb: 1.5 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Category
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={category}
                label='Category'
                onChange={handleCategoryChange}
              >
              /* Values should be ids from backend*/
                <MenuItem value="Fiction">Fiction</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
                <MenuItem value="Dystopian">Dystopian</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              onClick={handleSubmit}
            >
              Post Book
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  )
}

export default CreateBook
