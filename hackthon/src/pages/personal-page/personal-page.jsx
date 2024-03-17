import style from "./personal-page.module.css";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import favLogo from "../../assets/icons/star.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEAM } from "../../constants";
import {getRandomColor} from "../../utils";
import {
  ProgressBar,
  Button,
  Bard,
  GitSwip,
  Logo,
  Layout,
  Modal,
} from "../../components";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [githubRepos, setGithubRepos] = useState([]);
  const userPage = TEAM.find((item) => item.id === params.id);
  const [isOpenModalWindows, setIsOpenModalWindows] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [progressBarType, setProgressBarType] = useState("circle");
  const [error, setError] = useState(null);

  const progressBarStyle = `${progressBarType}ProgressBarWrapper`;

  useEffect(() => {
    fetch(`https://api.github.com/users/${userPage.githubLogin}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setGithubRepos(data.map((item) => item.name));
      })
      .catch((error) => {
        setError(error);
        // console.error('Error fetching repositories:', error);
      });
    localStorage.getItem(userPage.id) ? setIsFav(true) : setIsFav(false);
    
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  const addToFavorite = () => {
    setIsOpenModalWindows(true);
  };


  return (
    <>
      <Layout>
        <div className={style.personalPage}>
          {isFav ? (
            <div>
              <img src={favLogo} alt="Favorite" className={style.starLogo} />
              <span>В избранном</span>
            </div>
          ) : (
            <Button
              text={"Добавить в избранное"}
              borderRadius={"10px"}
              className={style.buttonFavorite}
              func={addToFavorite}
            />
          )}

          <h1>{userPage.name}</h1>
          <h1>{userPage.surname}</h1>
          <p>{userPage.age}</p>
          <p>{userPage.description}</p>
          {userPage.done.map((item) => (
            <span key={item}>{item}</span>
          ))}

          {userPage.special?.length > 0 ? (
            <div className={style.specialWrapper}>
              {userPage.special.map((item) => (
                <Bard color={"green"} text={item} key={item} />
              ))}
            </div>
          ) : null}

          <div>
            <h2>Социальные сети</h2>
            <Logo
              alt={"vkontakte"}
              text={userPage.socialNetwork?.vk}
              logo={vk}
            />
            <Logo
              alt={"facebook"}
              text={userPage.socialNetwork?.facebook}
              logo={facebook}
            />
            <Logo
              alt={"instagram"}
              text={userPage.socialNetwork?.instagram}
              logo={instagram}
            />
            <Logo
              alt={"linkedin"}
              text={userPage.socialNetwork?.linkedIn}
              logo={linkedIn}
            />
            <Logo
              alt={"github"}
              text={userPage.socialNetwork?.github}
              logo={github}
            />

            <div className={style[progressBarStyle]}>
              <h4>Прогресс</h4>
              <select className={style.select} onChange={(e) => setProgressBarType(e.target.value)}>
                <option value="circle">Круг</option>
                <option value="line">Линия</option>
              </select>

              {Object.entries(userPage.skills).map((skillInfo, index) => (
                <ProgressBar
                  key={index}
                  skillInfo={skillInfo}
                  color={getRandomColor()}
                  type={progressBarType}
                />
              ))}
            </div>
          </div>

          <img src={userPage.image} className={style.personalPageImage} />
          <div className={style.swiperWrapper}>
            {githubRepos.length > 0 && error === null ? (
              <GitSwip githubRepos={githubRepos} />
            ) : <div>Ошибка запроса на гитхаб</div>}
          </div>
          <Button func={() => goBack()} text="Назад" />
        </div>
      </Layout>
      {isOpenModalWindows && (
        <Modal
          setIsOpenModalWindows={setIsOpenModalWindows}
          userPage={userPage}
          setIsFav={setIsFav}
        />
      )}
    </>
  );
};
