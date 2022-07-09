import { useState } from "react";

const useUserSetting = () => {
  //// handle day light change
  const [isNight, setIsNight] = useState(true);

  const changeLight = () => {
    setIsNight(!isNight);
  };
  //// list of socialMediaList

  return { changeLight, isNight };
};
export default useUserSetting;
