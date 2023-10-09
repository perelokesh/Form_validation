import {Formik, useFormik } from 'formik';
import axios from 'axios';
import { Container, TextField, Button, Grid } from '@mui/material';

function UserForm() {
  // const handleSubmit =;
  // console.log("Details:", handleSubmit)
  const formik = useFormik({
    initialValues:{
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    country: '',
    zipCode: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Make an HTTP request to your backend API
        const response = await axios.post('http://localhost:3002/api/users', values);
  
        // Handle the response (e.g., show success message)
        console.log('Response from backend:', response.data);
  
        // Reset form values
        // You can use setValues from Formik to reset the form
      } catch (error) {
        // Handle errors (e.g., show error message)
        console.error('Error:', error);
      } finally {
        // Reset the submitting state
        setSubmitting(false);
      }
    }
  });

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <center><h2>Register Form</h2></center>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}  
              type='number'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Address 1"
              variant="outlined"
              fullWidth
              name="address1"
              value={formik.values.address1}
              onChange={formik.handleChange}            
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Address 2"
              variant="outlined"
              fullWidth
              name="address2"
              value={formik.values.address2}
              onChange={formik.handleChange}            
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}            
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}            
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}            
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Zip Code"
              variant="outlined"
              fullWidth
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}   
              type='number'         
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid container justifyContent="center" spacing={6} padding={5}>
          <Grid item>
            <button type="submit" 
            color="primary">
              Submit
            </button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default UserForm;
