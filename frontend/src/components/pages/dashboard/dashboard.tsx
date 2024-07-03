import React from 'react';
import style from './dashboard.module.css';
import { Box, Paper, Typography } from "@mui/material";
import { NavBar } from '../../common/navbar/navbar';
import { Footer } from '../../common/footer/footer';
import { DataGrid } from '@mui/x-data-grid';

/**
 * Dashboard Page
 * @returns dashboard page element
 */
export function Dashboard() {
  return (
    <>
      <NavBar />

      <div className={style.dashboardPage}>
        <h3>Today's Date: {new Date().toLocaleDateString()}</h3>
        <h3>Current Time: 13:54</h3>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={8}
        >
          <Paper
            style={{
              flex: 1,
              height: 600,
              minWidth: 375,
              maxWidth: 500
            }}
          >
            <Typography variant="h4" color="primary">
              Upcoming Busses
            </Typography>
            <DataGrid
              rows={[]}
              columns={[]}
              localeText={{
                noRowsLabel: 'No upcoming buses found.'
              }}
            />
          </Paper>

          <Paper
            style={{
              flex: 1,
              height: 600,
              minWidth: 375,
              maxWidth: 500
            }}
          >
            <Typography variant="h4" color="primary">
              Upcoming Skytrains
            </Typography>
            <DataGrid
              rows={[]}
              columns={[]}
              localeText={{
                noRowsLabel: 'No upcoming skytrains found.'
              }}
            />
          </Paper>

          <Paper
            style={{
              flex: 1,
              height: 600,
              minWidth: 375,
              maxWidth: 500
            }}
          >
            <Typography variant="h4" color="primary">
              Alerts
            </Typography>
            <DataGrid
              rows={[]}
              columns={[]}
              localeText={{
                noRowsLabel: 'No current alerts.'
              }}
            />
          </Paper>
        </Box>

        {/* <Grid container className={style.container}>
          <Grid item xs={2.2}>
            <Box
              bgcolor="#1976d2"
              padding={3}
              margin={4}
              sx={{ border: 1, borderRadius: '6px' }}
            >
              <h2>Upcoming Buses</h2>
              <Box bgcolor="gainsboro" padding={2}>
                <div className="Station">
                  <h4>R5 Hastings</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>14:02</td>
                        <td>SFU Burnaby</td>
                      </tr>
                      <tr>
                        <td>14:20</td>
                        <td>SFU Burnaby</td>
                      </tr>
                      <tr>
                        <td>14:35</td>
                        <td>SFU Burnaby</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="Station">
                  <h4>145 Production Way</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>13:57</td>
                        <td>SFU Burnaby</td>
                      </tr>
                      <tr>
                        <td>14:06</td>
                        <td>SFU Burnaby</td>
                      </tr>
                      <tr>
                        <td>14:20</td>
                        <td>SFU Burnaby</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={2.2}>
            <Box
              bgcolor="#1976d2"
              padding={3}
              margin={4}
              sx={{ border: 1, borderRadius: '6px' }}
            >
              <h2>Upcoming SkyTrains</h2>
              <Box bgcolor="gainsboro" padding={2}>
                <div className="Station">
                  <h4>Expo Line</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>14:04</td>
                        <td>Surrey Central</td>
                      </tr>
                      <tr>
                        <td>14:11</td>
                        <td>Surrey Central</td>
                      </tr>
                      <tr>
                        <td>14:18</td>
                        <td>Surrey Central</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="Station">
                  <h4>Canada Line</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>13:59</td>
                        <td>Waterfront</td>
                      </tr>
                      <tr>
                        <td>14:05</td>
                        <td>Waterfront</td>
                      </tr>
                      <tr>
                        <td>14:14</td>
                        <td>Waterfront</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={5.6}>
            <Box bgcolor='#1976d2' padding={3} margin={4} sx={{ border: 1, borderRadius: '6px' }}><h2>Calendar</h2>
              <Box bgcolor="gainsboro" padding={2}>

              </Box>
            </Box>
          </Grid>

          <Grid item xs={10}>
            <Box
              bgcolor="#1976d2"
              padding={3}
              margin={4}
              sx={{ border: 1, borderRadius: '6px' }}
            >
              <h2>Alert</h2>
              <Box bgcolor="gainsboro" padding={2}>
                <Grid container>
                  <Grid item xs={3}>
                    <h3>May 15 - June 21</h3>
                    <Box
                      bgcolor="white"
                      padding={3}
                      margin={4}
                      sx={{ border: 1, borderRadius: '6px' }}
                    >
                      <h3>Skytrain: Expo Line</h3>
                      <h4>Construction at King George</h4>
                      <p>
                        Due to construction at king George, terminal station
                        will be changed to Surrey Central
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <h3>10:44 - 15:37</h3>
                    <Box
                      bgcolor="white"
                      padding={3}
                      margin={4}
                      sx={{ border: 1, borderRadius: '6px' }}
                    >
                      <h3>Bus: 144/Metrotown Station</h3>
                      <h4>Shortage of buses</h4>
                      <p>
                        There is shortage of buses for the 144 route for
                        Metrotown. Expect delays for this route in the
                        meanwhile.
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <h3>13:31 - ?</h3>
                    <Box
                      bgcolor="white"
                      padding={3}
                      margin={4}
                      sx={{ border: 1, borderRadius: '6px' }}
                    >
                      <h3>West Vancouver</h3>
                      <h4>Power Outage</h4>
                      <p>
                        Due to power outage, expect delays for buses and
                        skytrains near west Vancouver.
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <h3>Time: 13:52 - 14:10</h3>
                    <Box
                      bgcolor="white"
                      padding={3}
                      margin={4}
                      sx={{ border: 1, borderRadius: '6px' }}
                    >
                      <h3>Skytrain: Canada Line</h3>
                      <h4>Medical Emergency at Waterfront</h4>
                      <p>
                        Due to a medical emergency at Waterfront station, there
                        will be a short delay for all trains.
                      </p>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid> */}
      </div>

      <Footer />
    </>
  );
}

