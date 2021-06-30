import React from "react";
import {
  Container,
  Grid,
  FormLabel,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
    paddingRight: 50,
    background: "#fff",
  },
  label: {
    display: "block",
  },
  textBox: {
    border: "1.5px solid #e7e7e7",
    padding: "0.5rem 0.5rem",
    color: "grey",
    borderRadius: 2.5,
    marginTop: 8,
    width: "100%",
    outline: 0,
  },
  date: {
    border: "1.5px solid #e7e7e7",
    padding: "0.38rem 0.5rem",
    color: "grey",
    borderRadius: 2.5,
    marginTop: 8,
    width: "100%",
    outline: 0,
  },
  select: {
    background: '#fff',
    border: "1.5px solid #e7e7e7",
    padding: "0.5rem 0.5rem",
    color: "grey",
    borderRadius: 2.5,
    marginTop: 8,
    width: 264,
    outline: 0,
  },
  formGroup: {
    marginTop: 3,
  },
  formGroupSpecial: {
    marginTop: 20,
  },
  addressGroup: {
      marginTop: 20
  },
  addressTextBox: {
      marginBottom: 7
  },
  btn: {
      background: "#4c4c4c",
      color: "#fff",
      border: 0,
      width: 80,
      padding: 8,
      borderRadius: 2,
      marginTop: 10
  }
}));

const Form = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="sm">
      <Grid container>
        <Grid item lg={12} xl={12} sm={12} xs={12}>
          <FormLabel className={classes.label}> Arrival Date </FormLabel>
          <input className={classes.date} type="date" />
        </Grid>
      </Grid>

      <Grid container spacing={5} className={classes.formGroup}>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Source Supplier </FormLabel>
          <input className={classes.textBox} />
        </Grid>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Phone </FormLabel>
          <input className={classes.textBox} placeholder="### ### ###" />
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Purchased By: </FormLabel>
          <input className={classes.textBox} />
        </Grid>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}>
            {" "}
            Confidental clue Page No{" "}
          </FormLabel>
          <input className={classes.textBox} />
        </Grid>
      </Grid>

      <Grid container className={ classes.addressGroup }>
        <FormLabel className={classes.label}> Address </FormLabel>
        <Grid item lg={12} xl={12} sm={12} xs={12} className={ classes.addressTextBox}>
          <input
            className={classes.textBox}
            type="text"
            placeholder="Street Address"
          />
        </Grid>
          <Grid item lg={12} xl={12} sm={12} xs={12} className={ classes.addressTextBox}>
            <input
              className={classes.textBox}
              type="text"
              placeholder="Street Address Line 2"
            />
        </Grid>

        <Grid container spacing={5}>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            <input className={classes.textBox} type="text" placeholder="City" />
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6} className={ classes.addressTextBox}>
            <input
              className={classes.textBox}
              type="text"
              placeholder="Region"
            />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            <input
              className={classes.textBox}
              type="text"
              placeholder="Postal / Zip Code"
            />
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            <select
              className={classes.select}
            >
                <option value={1}>Romania</option> 
            </select>
          </Grid>
        </Grid>
      </Grid>

        <Grid container spacing={5} className={classes.formGroup}>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Clasification No </FormLabel>
          <input className={classes.textBox} />
        </Grid>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Author Marks </FormLabel>
          <input className={classes.textBox} />
        </Grid>
      </Grid>

        <Grid container spacing={5} className={classes.formGroup}>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Usability Condition </FormLabel>
          <input className={classes.textBox} />
        </Grid>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Entry Date </FormLabel>
          <input className={classes.date} type="date" />
        </Grid>
      </Grid>

        <Grid container spacing={5} className={classes.formGroup}>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> Publish Place </FormLabel>
          <input className={classes.textBox} />
        </Grid>
        <Grid item lg={6} xl={6} sm={6} xs={6}>
          <FormLabel className={classes.label}> No of Copies </FormLabel>
          <input className={classes.textBox} />
        </Grid>
      </Grid>

      <Grid container className={classes.formGroupSpecial}>
        <Grid item lg={12} xl={12} sm={12} xs={12}>
          <FormLabel className={classes.label}> Accession No </FormLabel>
          <input className={classes.textBox}  />
        </Grid>
      </Grid>

       <Grid container className={classes.formGroupSpecial}>
        <Grid item lg={12} xl={12} sm={12} xs={12}>
          <FormLabel className={classes.label}> Remarks </FormLabel>
          <textarea className={classes.textBox}  />
        </Grid>
      </Grid>

      <Grid container justify="center">
          <Grid item>
              <button className={classes.btn}>SEND</button>
          </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
