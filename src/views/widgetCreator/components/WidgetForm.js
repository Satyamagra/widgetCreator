import React from 'react'
import { Form, FormikProvider, useFormik } from "formik"
import { WidgetFormSchema } from '../../../validationSchema/WidgetFormSchema';
import { Autocomplete, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import CustomTextField from '../../../components/controls/CustomTextField';
import { states } from '../../../JSON/states';

function WidgetForm(props) {
  const { setCopySuccess } = props;

  // Demo country demo json data
  const stateItem = states;

  // initial value and form handle using formik
  const formik = useFormik({
    initialValues: {
      country: "",
      headerText: "",
      headerBackColor: "#002AFF",
      headerTextColor: "#000000",
      footerText: "",
      footerBackColor: "#002AFF",
      footerTextColor: "#000000",
      width: "",
      height: ""
    },

    // form Validation schema
    validationSchema: WidgetFormSchema,
    onSubmit: (values) => {

      const { country, headerText, headerBackColor, headerTextColor, footerText, footerBackColor,
        footerTextColor, width, height } = values;

      Object.entries(stateItem).forEach(([item, stateValue]) => {

        if (item === country) {

          // get total district wise data
          const totalItemJson = getTotalItemJson(stateValue.districtData);

          let demoIframe = `<iframe frameborder="0"  width=${width} height=${height} srcDoc= ${`"<!DOCTYPE html>
          <html>
             <head>
                <style>
                   *{
                   box-sizing: border-box;
                   }
                   .row::after {
                   display: table;
                   }
                   .header {
                   background-color: ${headerBackColor};
                   color: ${headerTextColor};
                 text-align: center;
                   padding: 1px 5px;
                   }
                   .aside {
                   padding: 15px;
                   text-align: center;
                   font-size: 14px;
                   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
                   }
                   .aside1 {
                   padding: 15px;
                   font-size: 14px;
                   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
                   }
                   .dis-flex{
                   display: flex;
                   justify-content: space-between;
                   }
                   .footer {
                    background-color: ${footerBackColor};
                    color: ${footerTextColor};
                   text-align: center;
                   font-size: 12px;
                   padding: 15px;
                   }
                   @media only screen and (min-width: 600px) {
                   /* For tablets: */
                   .col-s-1 {width: 8.33%;}
                   .col-s-2 {width: 16.66%;}
                   .col-s-3 {width: 25%;}
                   .col-s-4 {width: 33.33%;}
                   .col-s-5 {width: 41.66%;}
                   .col-s-6 {width: 50%;}
                   .col-s-7 {width: 58.33%;}
                   .col-s-8 {width: 66.66%;}
                   .col-s-9 {width: 75%;}
                   .col-s-10 {width: 83.33%;}
                   .col-s-11 {width: 91.66%;}
                   .col-s-12 {width: 100%;}
                   }
                   @media only screen and (min-width: 768px) {
                   /* For desktop: */
                   .col-1 {width: 8.33%;}
                   .col-2 {width: 16.66%;}
                   .col-3 {width: 25%;}
                   .col-4 {width: 33.33%;}
                   .col-5 {width: 41.66%;}
                   .col-6 {width: 50%;}
                   .col-7 {width: 58.33%;}
                   .col-8 {width: 66.66%;}
                   .col-9 {width: 75%;}
                   .col-10 {width: 83.33%;}
                   .col-11 {width: 91.66%;}
                   .col-12 {width: 100%;}
                   }
                </style>
             </head>
             <body>
                <div class='header'>
                   <h2>${headerText}</h2>
                </div>
                <div class='row'>
                   <div class='col-12 col-s-12'>
                      <div style='text-align:center;'>
                         <h2>${country}</h2>
                      </div>
                   </div>
                </div>
                <!-- map for data start //-->
                <div class='row'>

                ${totalItemJson.map((t) =>
            `<div class='col-4 col-s-12'>
                  <div class='aside'>
                     <h2>${t.count}</h2>
                     <p>${t.type}</p>
                  </div>
               </div>
                `)}
                  
                </div>
                <!-- map for data end //-->
                <div class='row'>
                   <div class='col-12 col-s-12'>
                      <div style='text-align:center;'>
                         <h2>District Level Data</h2>
                      </div>
                   </div>
                </div>
                
                <!-- map for data start //-->
                <div class='row'>
                ${Object.entries(stateValue.districtData)
              .map(([item, stateValue]) =>
                `<div class='col-4 col-s-12'>
                  <div class='aside1'>
                    <div style='text-align:center;'>
                      <h2>${item}</h2>
                    </div>
                    <div class='dis-flex'>
                      <div>
                        <div>
                          <p>Active : ${stateValue.active}</p>
                        </div>
                        <div>
                          <p>Confirmed : ${stateValue.confirmed}</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p>Deaths : ${stateValue.deceased}</p>
                        </div>
                        <div>
                          <p>Recovered : ${stateValue.recovered}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`
              )}
                  
                </div>
                <!-- map for data end //-->
                <div class='footer'>
                   <p>${footerText}</p>
                </div>
             </body>
          </html>"`}/>`

          setCopySuccess((_) => demoIframe);
        }
      })
    },
  })

  const getTotalItemJson = (districtData) => {
    let totalActive = 0;
    let totalDeath = 0;
    let totalRecovered = 0;
    let totalConfirm = 0;

    // find total values
    Object.values(districtData).forEach((item) => {
      totalActive += item.active
      totalDeath += item.deceased
      totalRecovered += item.recovered
      totalConfirm += item.confirmed
    })

    console.info({ totalActive, totalDeath, totalRecovered, totalConfirm })

    return [{
      count: totalActive,
      type: "ACTIVE",
    },
    {
      count: totalDeath,
      type: "DECEASED",
    },
    {
      count: totalConfirm,
      type: "CONFIRMED",
    },
    {
      count: totalRecovered,
      type: "RECOVERED",
    }]
  }



  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Card  >
      <CardContent>
        {/* <input value={data}></input> */}
        <FormikProvider value={formik} >
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} >
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <Typography variant="h5" gutterBottom align={"center"}>
                  Enter Widget Details
                </Typography>
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <Autocomplete
                  freeSolo
                  size="small"
                  id="free-solo-2-demo"
                  disableClearable
                  options={Object.keys(stateItem).map((item) => item)}
                  onChange={(_event, countryValue) => {
                    formik.setFieldValue("country", countryValue)
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Country"
                      required
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                      {...getFieldProps('country')}
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}
                    />
                  )}
                />

              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  label="Header Text"
                  {...getFieldProps('headerText')}
                  error={Boolean(touched.headerText && errors.headerText)}
                  helperText={touched.headerText && errors.headerText}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  type="color"
                  label="Header Backgroud Color"
                  {...getFieldProps('headerBackColor')}
                  error={Boolean(touched.headerBackColor && errors.headerBackColor)}
                  helperText={touched.headerBackColor && errors.headerBackColor}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  type="color"
                  label="Header Text Color"
                  {...getFieldProps('headerTextColor')}
                  error={Boolean(touched.headerTextColor && errors.headerTextColor)}
                  helperText={touched.headerTextColor && errors.headerTextColor}
                />
              </Grid>

              <Grid item md={12} lg={12} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  label="Footer Text"
                  {...getFieldProps('footerText')}
                  error={Boolean(touched.footerText && errors.footerText)}
                  helperText={touched.footerText && errors.footerText}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  type="color"
                  label="Footer Backgroud Color"
                  {...getFieldProps('footerBackColor')}
                  error={Boolean(touched.footerBackColor && errors.footerBackColor)}
                  helperText={touched.footerBackColor && errors.footerBackColor}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  required
                  label="Footer Text Color"
                  type="color"
                  {...getFieldProps('footerTextColor')}
                  error={Boolean(touched.footerTextColor && errors.footerTextColor)}
                  helperText={touched.footerTextColor && errors.footerTextColor}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  type="number"
                  required
                  label="Width (in px)"
                  {...getFieldProps('width')}
                  error={Boolean(touched.width && errors.width)}
                  helperText={touched.width && errors.width}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <CustomTextField
                  size="small"
                  type="number"
                  required
                  label="Height (in px)"
                  {...getFieldProps('height')}
                  error={Boolean(touched.height && errors.height)}
                  helperText={touched.height && errors.height}
                />
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Get your widget
                </Button>
              </Grid>

            </Grid>
          </Form>
        </FormikProvider>
      </CardContent>
    </Card >
  )
}

export default WidgetForm