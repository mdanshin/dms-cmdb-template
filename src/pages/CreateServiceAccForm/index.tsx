import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ContactMailIcon from '@mui/icons-material/ContactMailOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Copyright from './Copyright'
import handleSubmit from './HandleSubmit'
import useHandleDomain from './HandleDomain'

export default function CreateServiceUser() {
  const { domain, handle } = useHandleDomain()

  return (
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Заявка на создание сервисной учётной записи
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  autoComplete="fullname"
                  name="fullname"
                  fullWidth
                  id="fullname"
                  label="ФИО или название учётной записи"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  autoComplete="login"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="E-Mail, если необходим почтовый ящик"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="domainLabel">Домен</InputLabel>
                  <Select
                    labelId="domainLabel"
                    id="domain"
                    value={domain}
                    label="Домен"
                    name="domain"
                    onChange={handle}
                  >
                    <MenuItem value={'IBS'}>IBS</MenuItem>
                    <MenuItem value={'DELSYS'}>DELSYS</MenuItem>
                    <MenuItem value={'APPLINE'}>APPLINE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="responsible"
                  label="Ответственный"
                  id="responsible"
                  autoComplete="responsible"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="deputy"
                  label="Заместитель"
                  id="deputy"
                  autoComplete="deputy"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fullnameEng"
                  label="ФИО или название учётной записи латинскими буквами"
                  id="fullnameEng"
                  autoComplete="fullnameEng"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="appointment"
                  label="Назначение (краткое описание для чего используется данная УЗ)"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  name="appointment"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox value="allowExternalEmails" color="primary" />}
                  label="Предполагается получение сообщений из Internet"
                  name='allowExternalEmails'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox value="passwordLeack" color="primary" />}
                  label="Данные от учётной записи будут передаваться третьим лицам"
                  name='passwordLeack'
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Отправить
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}