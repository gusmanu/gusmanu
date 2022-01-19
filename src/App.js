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
        <div>
          <img className="my__logo" src="/images/logo.png" alt="logo"></img>
        </div>
        <div className="header__menu"></div>
      </div>
      <div className="body">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card className="card__grid">
              <CardContent>
                <div className="avatar__wrapper">
                  <Avatar
                    className="avatar__image"
                    src="/images/my.jpg"
                  ></Avatar>
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
                      toLocation("https://wa.me/+6282232460729");
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
                  <IconButton
                    onClick={() => {
                      toLocation("https://m.facebook.com/gusmanurohman28");
                    }}
                  >
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
                          title="Napulsa v2 (Laravel)"
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
                            Website penjualan produk pulsa dan PPOB, dilengkapi
                            notifikasi real-time menggunakan pusher. alamat URL:{" "}
                            <a href="https://napulsa.com">
                              https://napulsa.com
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          titleTypographyProps={{ variant: "subtitle2" }}
                          className="website__title"
                          title="Neodrive v3 (CodeIgniter 4)"
                        ></CardHeader>
                        <CardMedia
                          className="porto__web__image"
                          component="img"
                          image="/images/neodrivev3.png"
                          alt="Neodrive v3 (CodeIgniter 4)"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Website sharing file dengan API google drive,
                            meningkatkan keamanan serta bypass limitasi google
                            drive, dilengkapi player HTML5 untuk memutar video.
                            Alamat URL :
                            <a href="https://neodrive.my.id">
                              https://neodrive.my.id
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          className="website__title"
                          titleTypographyProps={{ variant: "subtitle2" }}
                          title="Napulsa v1 (CodeIgniter 3)"
                        ></CardHeader>
                        <CardMedia
                          className="porto__web__image"
                          component="img"
                          fit
                          image="/images/napulsav1.png"
                          alt="Napulsa v1 (CodeIgniter 3)"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Versi pendahulu dari napulsa, Website penjualan
                            produk pulsa dan PPOB. Alamat URL :{" "}
                            <a href="https://v1-napulsa.herokuapp.com/">
                              https://v1-napulsa.herokuapp.com/
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          titleTypographyProps={{ variant: "subtitle2" }}
                          className="website__title"
                          title="Neodrive v2 (PHP Native)"
                        ></CardHeader>
                        <CardMedia
                          component="img"
                          className="porto__web__image"
                          image="/images/neodrivev2.png"
                          alt="Neodrive"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Versi pendahulu dari neodrive. Website sharing file
                            dengan API google drive. Alamat URL :
                            <a href="https://v2-neodrive.herokuapp.com/">
                              https://v2-neodrive.herokuapp.com/
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide className="porto__web__card">
                      <Card>
                        <CardHeader
                          titleTypographyProps={{ variant: "subtitle2" }}
                          className="website__title"
                          title="Aplikasi penjualan (ReactJs Firebase)"
                        ></CardHeader>
                        <CardMedia
                          component="img"
                          className="porto__web__image"
                          image="/images/penjualan.png"
                          alt="Aplikasi penjualan (ReactJs Firebase)"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Versi pendahulu dari neodrive. Website sharing file
                            dengan API google drive. Alamat URL :
                            <a href="https://inspiring-rosalind-5f6347.netlify.app/">
                              https://inspiring-rosalind-5f6347.netlify.app/
                            </a>
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
