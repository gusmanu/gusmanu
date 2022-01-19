import {
  IconButton,
  Typography,
  Grid,
  Paper,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

// import logo from './logo.svg';
import "./Main.css";
import "swiper/css";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  SwiperCore.use([Autoplay]);
  const toLocation = (url) => {
    window.location.href = url;
  };
  return (
    <div class="App">
      <div className="header">
        <div className="my__logo">{/* <img src=""></img> */}</div>
        <div className="header__menu">
          <Typography>About Me</Typography>
          <Typography>My Skills</Typography>
          <Typography>My Projects</Typography>
        </div>
      </div>
      <div className="body">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card className="card__grid">
              <CardContent>
                <div className="avatar__wrapper">
                  <Avatar className="avatar__image">GR</Avatar>
                  <Typography variant="h5" component="h1">
                    Gusmanu Rohman
                  </Typography>
                </div>
                <div className="about__me__short">
                  <Typography variant="subtitle1" component="span">
                    Lulusan baru Teknik Elektro. Desainer amatir, menyukai
                    minimalis, mewujudkan ide-ide melalui kode.
                  </Typography>
                </div>
                <div className="my__contact">
                  <IconButton
                    onClick={() => {
                      toLocation("mailto:gusmanurr@gmail.com");
                    }}
                  >
                    <GoogleIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      toLocation("https://wa.me/+6288217466987");
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      toLocation("https://instagram.com/gusmanurohman_");
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      toLocation("https://github.com/gusmanu");
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Card>
              <CardContent>
                <Typography component="h1" className="h1__custom">
                  More About Me
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  className="bio__content"
                >
                  Halo, perkenalkan saya gusmanu rohman, biasa dipanggil
                  gusmanu. Saya lulusan S1 Teknik Elektro Universitas Trunojoyo
                  Madura. Saat ini saya menggeluti bidang web programming,
                  terutama PHP dan JavaScript. Saya menggeluti bidang ini selama
                  kurang lebih 3,5 tahun dan memiliki pengalaman freelance
                  developing website kurang lebih selama 2 tahun.
                </Typography>
                <Typography component="h1" className="h1__custom">
                  My Skills
                </Typography>
                <div className="bio__content">
                  <ul className="my__ul">
                    <li>
                      <Typography variant="body2" component="span">
                        <b>Programming :</b> PHP, JavaScript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span">
                        <b>Framework :</b> Laravel, CodeIgniter, ExpressJs,
                        ReactJs
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span">
                        <b>Version Control System :</b> Git, Github
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span">
                        <b>Web :</b> HTML, CSS
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span">
                        <b>Database :</b> MySQL, PostgreSQL, MongoDB, Firebase
                      </Typography>
                    </li>
                  </ul>
                </div>
                <Typography component="h1" className="h1__custom">
                  Pendidikan
                </Typography>
                <div className="bio__content">
                  <Typography component="h2" className="education__title">
                    S1 Teknik Elektro | Universitas Trunojoyo Madura
                  </Typography>
                  <ul className="my__ul">
                    <li className="education__year">
                      <Typography variant="body2" component="span">
                        2016 - 2021
                      </Typography>
                    </li>
                  </ul>
                  <Typography component="h2" className="education__title">
                    SMA | MA Negeri 6 Jombang
                  </Typography>
                  <ul className="my__ul">
                    <li>
                      <Typography variant="body2" component="span">
                        2013 - 2016
                      </Typography>
                    </li>
                  </ul>
                </div>
                <Typography component="h1" className="h1__custom">
                  Projects
                </Typography>
                <div className="bio__content">
                  <Swiper
                    slidesPerView="auto"
                    spaceBetween={25}
                    loop="true"
                    autoplay={{
                      delay: 10000,
                    }}
                  >
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          titleTypographyProps={{ variant: "subtitle2" }}
                          className="website__title"
                          title="Napulsa.com"
                        ></CardHeader>
                        <CardMedia
                          className="porto__web__image"
                          component="img"
                          fit
                          image="/images/napulsav2.png"
                          alt="Napulsa"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          titleTypographyProps={{ variant: "subtitle2" }}
                          className="website__title"
                          title="Neodrive.my.id"
                        ></CardHeader>
                        <CardMedia
                          className="porto__web__image"
                          component="img"
                          fit
                          image="/images/neodrivev3.png"
                          alt="Napulsa"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          className="website__title"
                          titleTypographyProps={{ variant: "subtitle2" }}
                          title="Napulsa v1"
                        ></CardHeader>
                        <CardMedia
                          className="porto__web__image"
                          component="img"
                          fit
                          image="/images/napulsav1.png"
                          alt="Napulsa"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader title="Napulsa.com"></CardHeader>
                        <CardMedia
                          component="img"
                          className="porto__web__image"
                          fit
                          image="/images/napulsav2.png"
                          alt="Napulsa"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
