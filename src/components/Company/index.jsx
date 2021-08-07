import React from "react";
import "../Dashboard/style.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  smallHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#585a56",
    marginTop: "20px",
    marginBottom: "10px",
    textTransform: "capitalize",
    [theme.breakpoints.down("1641")]: {
      fontSize: "14px",
    },
  },
  root: {
    "& .MuiOutlinedInput-root": {
      width: "100%",
      [theme.breakpoints.down("1641")]: {
        width: "500px",
        height: "40px",
      },
      [theme.breakpoints.down("1241")]: {
        width: "100%",
        height: "40px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#003d73",
      },
      "&:hover fieldset": {
        borderColor: "#003d73",
      },
    },
  },
}));

export default function Company() {

  const classes = useStyles();

  const handleClick = ()=>{

  }

  return (
    <div className="full-body">
      <div className="content-body">
        <h1 className="heading-main">Verify Certificate</h1>
        <p className="descriptions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis
          mi, accumsan eget vestibulum sed, hendrerit et odio. In non lacus eget
          enim convallis facilisis. Aliquam massa elit, semper quis posuere at,
          commodo nec justo. Vestibulum non ipsum eu lacus elementum vestibulum
          id ut mauris. Praesent interdum quam sed tincidunt imperdiet.
          Curabitur luctus gravida venenatis. Pellentesque eu sem nec libero
          rutrum lacinia nec at nisi. Sed blandit turpis eu risus luctus
          maximus. In id orci a ipsum condimentum ultricies.
        </p>
        <p className={classes.smallHeading}>Student Id</p>
        <TextField
          size="small"
          className={classes.root}
          InputProps={{
            style: {
              fontSize: 12,
              fontFamily: "'poppins', sans-serif",
            },
          }}
          id="outlined-basic"
          placeholder="Enter student id"
          //   onChange={handleName}
          variant="outlined"
          required={true}
          InputProps={{
            style: {
              fontSize: 12,
              fontFamily: "'poppins', sans-serif",
            },
          }}
        />

        <p className={classes.smallHeading}>Student Hash</p>
        <TextField
          size="small"
          className={classes.root}
          InputProps={{
            style: {
              fontSize: 12,
              fontFamily: "'poppins', sans-serif",
            },
          }}
          id="outlined-basic"
          placeholder="Enter student id"
          //   onChange={handleName}
          variant="outlined"
          required={true}
          InputProps={{
            style: {
              fontSize: 12,
              fontFamily: "'poppins', sans-serif",
            },
          }}
        />
        <p style={{width:"170px",marginTop:"25px",height:"45px" ,background:"#1A9991"}} className="upload-button" onclick={handleClick}>Verify Hash</p>
      </div>
    </div>
  );
}
