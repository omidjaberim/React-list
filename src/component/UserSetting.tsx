import {
  Backdrop,
  CircularProgress,
  Grid,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import useUserSetting from "./useUserSetting";
import AddIcon from "@mui/icons-material/Add";
import ConnectionAddEdit from "./ConnectionAddEdit";
import Collapse from "@mui/material/Collapse";
import React, { useCallback, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useId } from "react";
//// social media icons
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebIcon from "@mui/icons-material/Language";

const useStyles = makeStyles<Theme, StyleProps>({
  root: {
    background: "#161B25",
    height: "100vh",
    width: "100%",
  },
  day: {
    cursor: "pointer",
    fill: "white !important",
  },
  night: { cursor: "pointer", fill: "rgba(255, 168, 46, 1) !important" },
  container: {
    width: "80%",
    padding: 30,
    margin: "35px 0px",
  },
  main: {
    borderRadius: 10,
    backgroundColor: "rgb(33, 43, 53)",
    padding: 25,
    margin: "35px 0px",
    width: "100%",
  },
  title: {
    color: "rgb(121, 131, 142)",
    margin: "25px 0",
  },
  addElement: {
    color: (prop) => (prop.isVisible ? "silver" : "white"),
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  setting: {
    fontWeight: "bold",
    fontSize: 22,
  },
  socialRow: {
    background: "rgb(52, 61, 72)",
    borderRadius: "10px",
    marginTop: 15,
    padding: "25px 10px",
    color: "white",
    fontSize: 14,
    "& span": {
      fontSize: 12,
    },
  },
  edit: {
    color: "rgb(255, 168, 46)",
    cursor: "pointer",
  },
  delete: {
    color: "red",
    cursor: "pointer",
  },
});

interface StyleProps {
  isVisible: boolean;
}

const UserSetting = () => {
  const { changeLight, isNight } = useUserSetting();
  const [isVisible, setisVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialMedia, setSocialMedia] = useState<string>("");
  const [newLink, setNewLink] = useState<string>("");
  const handleTxt = (value: string) => {
    setNewLink(value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialMedia(event.target.value);
  };
  const hide = () => {
    setisVisible(false);
  };

  const saveSocial = () => {
    const selectedSocial = socialList.find((sL) => sL.title === socialMedia);
    if (selectedSocial) {
      setLsit((prev) => {
        prev.push({
          ...selectedSocial,
          link: newLink,
          id: Math.floor(Math.random() * 100000),
        });
        return prev;
      });
      setisVisible(false);
    }
  };

  const [list, setLsit] = useState<
    { title: string; icon: React.ReactNode; link: string; id: number }[]
  >(() => [
    {
      title: "توییتر",
      icon: <TwitterIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
      id: Math.floor(Math.random() * 100000),
    },
    {
      title: "اینستاگرام",
      icon: <InstagramIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
      id: Math.floor(Math.random() * 100000),
    },
    {
      title: "فیسبوک",
      icon: <FacebookIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
      id: Math.floor(Math.random() * 100000),
    },
  ]);

  const [socialList, setSocialList] = useState<
    { title: string; icon: React.ReactNode; link: string }[]
  >([
    {
      title: "توییتر",
      icon: <TwitterIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
    {
      title: "اینستاگرام",
      icon: <InstagramIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
    {
      title: "فیسبوک",
      icon: <FacebookIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
    {
      title: "تلگرام",
      icon: <TelegramIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
    {
      title: "لینکداین",
      icon: <LinkedInIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
    {
      title: "وبسایت",
      icon: <WebIcon />,
      link: "http://116.203.243.155:3082/profile/settings/",
    },
  ]);

  const deleteItem = (id: number) => {
    setLoading(true);

    const index = list.findIndex((lI) => lI.id === id);
    if (index !== -1) {
      setLsit((prev) => {
        const newLi = [...prev];
        newLi.splice(index, 1);
        return newLi;
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    icon: React.ReactNode;
    link: string;
    id: number;
  } | null>(null);

  const showEditPanel = (item: {
    title: string;
    icon: React.ReactNode;
    link: string;
    id: number;
  }) => {
    setSelectedItem(item);
  };
  const updateSocial = () => {
    setLsit((prev) => {
      const list4Update = [...prev];
      const index = list4Update.findIndex(
        (l4up) => l4up.id === selectedItem?.id
      );
      if (index !== -1) {
        list4Update.splice(index, 1, {
          ...selectedItem,
          link: newLink,
          title: socialMedia,
          icon: selectedItem?.icon,
          id: Number(selectedItem?.id),
        });
      }
      return list4Update;
    });
    setSelectedItem(null);
  };
  const styles = useStyles({ isVisible });
  const key = useId();
  return (
    <Grid container className={styles.root} justifyContent="center">
      <Backdrop sx={{ color: "#fff", zIndex: 9 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid
        container
        item
        xs={8}
        direction="column"
        className={styles.container}
      >
        <Grid container justifyContent="space-between">
          <Typography color="white" className={styles.setting}>
            تنظیمات کاربری
          </Typography>
          <div onClick={changeLight}>
            {isNight ? (
              <NightlightIcon className={styles.day} />
            ) : (
              <LightModeIcon className={styles.night} />
            )}
          </div>
        </Grid>
        <Grid container direction="column" className={styles.main}>
          <Typography className={styles.title} fontSize={12}>
            مسیرهای ارتباطی
          </Typography>
          <Typography
            fontSize={12}
            className={styles.addElement}
            onClick={() => setisVisible(true)}
            color={isVisible ? "silver" : "rgb(255, 168, 46)"}
          >
            <AddIcon />
            افزودن مسیر ارتباطی
          </Typography>
          <Collapse in={isVisible}>
            <ConnectionAddEdit
              hide={hide}
              socialList={socialList}
              saveSocial={saveSocial}
              socialMedia={socialMedia}
              handleChange={handleChange}
              handleTxt={handleTxt}
            />
          </Collapse>
          {list.length > 0 &&
            list.map((item, index) => (
              <Grid
                container
                justifyContent={"space-between"}
                className={styles.socialRow}
                key={key + index}
              >
                <Grid item xs={10} container justifyContent={"start"}>
                  {item.icon} &nbsp;{item.title}&nbsp;&nbsp;
                  <span> لینک:&nbsp;</span>
                  {item.link}
                </Grid>
                <Grid
                  xs={2}
                  item
                  container
                  justifyContent={"end"}
                  alignItems="center"
                >
                  <Grid
                    xs={6}
                    item
                    container
                    justifyContent={"center"}
                    onClick={() => showEditPanel(item)}
                  >
                    <EditIcon className={styles.edit} />
                    <Typography color="primary">ویرایش</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    container
                    justifyContent={"center"}
                    onClick={() => deleteItem(item.id)}
                  >
                    <DeleteIcon className={styles.delete} />
                    <Typography color={"red"}>حذف</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Collapse in={!!selectedItem && item.id === selectedItem.id}>
                    <ConnectionAddEdit
                      hide={() => setSelectedItem(null)}
                      socialList={socialList}
                      saveSocial={updateSocial}
                      socialMedia={socialMedia}
                      handleChange={handleChange}
                      handleTxt={handleTxt}
                    />
                  </Collapse>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default UserSetting;
