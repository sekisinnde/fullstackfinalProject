import React from 'react';

const InscriptionForm = () => {

    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        password: "",
        adress: "",
        phoneNumber: ""
});


      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

const handleSubmit = (e) => {
e.preventDefault();
let data = {...form}
fetch("http://localhost:5000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data}),
      })
        .then(() => {
          alert("vous etes enregistré");
        })
        .catch((error) => {
          window.alert(error);
          return;
        });

};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h5">
            Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => updateForm({ firstname: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => updateForm({ lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => updateForm({ email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => updateForm({ password: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label=""
                  type="date"
                  id="age"
                  onChange={(e) => updateForm({ age: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="adress"
                  label="Adress"
                  id="adress"
                  onChange={(e) => updateForm({ adress: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone number"
                  id="phone"
                  onChange={(e) => updateForm({ phone: e.target.value })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./connexion" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
