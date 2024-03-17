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
import { getRandomColor } from "../../utils";
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
        {/* <Header onFavoritePage={true} /> */}
        <div className={style.personalPageWrapper}>
          <div className={style.personalSpecial}>
            <div className={style.Name}>
              <div className={style.personalPageName}>{userPage.name}</div>
              <div className={style.personalPageName}>{userPage.surname}</div>
              {isFav ? (
                <div className={style.personalPageFavorite}>
                  <img
                    src={favLogo}
                    alt="Favorite"
                    className={style.starLogo}
                  />
                  <span>В избранном</span>
                </div>
              ) : (
                <div className={style.buttonFavorite}>
                  <Button
                    text={"Добавить в избранное"}
                    borderRadius={"10px"}
                    func={addToFavorite}
                  />
                </div>
              )}
              <p>Возраст: {userPage.age}</p>
              <p>О себе: {userPage.description}</p>
              <div className={style.personalPageDone}>
                <p> Сделано:</p>
                {userPage.done.map((item) => (
                  <p key={item}>{item},</p>
                ))}
              </div>
              <div className={style.socialNetworkWrapper}>
                <div className={style.snHeader}>Социальные сети</div>
                <div className={style.socialNetworkLogos}>
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
                </div>
              </div>
              <div className={style.specialWr}>
                <div className={style.snHeader}>Специальность:</div>
                {userPage.special?.length > 0 ? (
                  <div className={style.specialWrapper}>
                    {userPage.special.map((item) => (
                      <Bard color={"green"} text={item} key={item} />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className={style.personalPageImageWrapper}>
              <img src={userPage.image} className={style.personalPageImage} />
              <Button
                className={style.buttonBack}
                borderRadius={"10px"}
                co
                func={() => goBack()}
                text="Назад"
              />
            </div>
          </div>

          <div className={style.progressBarWrapper}>
            <div className={style.namePlusSelector}>
              <div className={style.snHeader}>Прогресс</div>
              <select
                className={style.select}
                onChange={(e) => setProgressBarType(e.target.value)}
              >
                <option value="circle">Круг</option>
                <option value="line">Линия</option>
              </select>
            </div>
            <div className={style[progressBarStyle]}>
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

          <div className={style.swiperWrapper}>
            {githubRepos.length > 0 && error === null ? (
              <GitSwip githubRepos={githubRepos} />
            ) : (
              <div>Ошибка запроса на гитхаб</div>
            )}
          </div>
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
