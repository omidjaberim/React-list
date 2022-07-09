import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useCallback, useState } from "react";

const useStyles = makeStyles({
  addRoot: {
    background: "rgb(52, 61, 72)",
    width: "100%",
    marginTop: 50,
    borderRadius: 15,
    padding: 35,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "silver",
      },
      "&:hover fieldset": {
        borderColor: "orange",
      },
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
  },
  title: {
    color: "white",
    fontWeight: 500,
    lineHeight: 1.57,
    fontSize: 11,
  },
  inputContainer: {
    marginTop: 15,
  },
  menu: {
    direction: "rtl",
  },
  txt: {
    direction: "ltr",
  },
  btnHolder: {
    padding: 15,
  },
  btnCancel: {
    marginRight: "12px !important",
  },
});

interface IProps {
  hide: () => void;
  socialList: { title: string; icon: React.ReactNode; link: string }[];
  saveSocial: () => void;
  socialMedia: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTxt: (v: string) => void;
}

const ConnectionAddEdit = (props: IProps) => {
  const { hide, socialList, saveSocial, socialMedia, handleChange, handleTxt } =
    props;
  const styles = useStyles();

  return (
    <Grid container direction="column" className={styles.addRoot}>
      <Typography className={styles.title}>
        افزودن مسیر ارتباطی&nbsp; {socialMedia}
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        className={styles.inputContainer}
      >
        <Grid item xs={4}>
          <TextField
            label="نوع"
            fullWidth
            select
            variant="outlined"
            onChange={handleChange}
            value={socialMedia}
            InputLabelProps={{
              shrink: true,
              style: { color: "#fff" },
            }}
            SelectProps={{
              MenuProps: {
                className: styles.menu,
                PaperProps: {
                  sx: {
                    backgroundColor: "rgb(52, 61, 72)",
                    color: "white",
                  },
                },
              },
            }}
          >
            {socialList.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                <span>{option.icon}</span>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={7}>
          <TextField
            fullWidth
            variant="outlined"
            label="لینک"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            inputProps={{
              className: styles.txt,
            }}
            onChange={(e) => handleTxt(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" className={styles.btnHolder}>
        <Button
          variant="outlined"
          color="primary"
          className={styles.btnCancel}
          onClick={hide}
        >
          انصراف
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.btnCancel}
          onClick={saveSocial}
        >
          ثبت مسیر ارتباطی {socialMedia}
        </Button>
      </Grid>
    </Grid>
  );
};
export default ConnectionAddEdit;
