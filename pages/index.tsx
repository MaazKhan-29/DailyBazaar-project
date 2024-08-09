import { NextPage } from "next";
import styles from "./index.module.css";

const LogIn: NextPage = () => {
  return (
    <>
      <div className={styles.logIn}>
        <div className={styles.logInInner}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeBackWrapper}>
              <div className={styles.welcomeBack}>Welcome back!</div>
            </div>
            <div className={styles.enterYourCredentials}>
              Enter your Credentials to access your account
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.nameWrapper}>
                <div className={styles.welcomeBack}>Name</div>
              </div>

            </div>
            <div className={styles.frameContainer}>
              <div className={styles.nameWrapper}>
                <div className={styles.welcomeBack}>Email address</div>
              </div>
              {/* <div className={styles.frameWrapper}> */}
              <div className={styles.nameFrame}>
                {/* <div className={styles.welcomeBack}>Enter your email</div> */}

                <input className={styles.login_input} type="email" name="text" placeholder="Email Address" />
              </div>
              {/* </div> */}
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.nameWrapper}>
                <div className={styles.welcomeBack}>Password</div>
              </div>
              {/* <div className={styles.frameWrapper}> */}
                <div className={styles.nameFrame}>
                {/* <div className={styles.welcomeBack}>Name</div> */}
                <input className={styles.login_input} type="password" name="text" placeholder="Password" maxLength='10'/>
                </div>
              {/* </div> */}
            </div>
            <div className={styles.instanceParent}>
              <div className={styles.frameParent1}>
                <div className={styles.nameWrapper3}>
                  <div className={styles.name5}>Name</div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.nameWrapper4}>
                    <div className={styles.name6}>Name</div>
                  </div>
                </div>
              </div>
              <b className={styles.login}>Login</b>
            </div>
            <div className={styles.forgotPassword}>forgot password</div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.orWrapper}>
            <div className={styles.welcomeBack}>Or</div>
          </div>
        </div>
        <div className={styles.glyphcomWrapper}>
          <div className={styles.welcomeBack}>Glyph.com</div>
        </div>
        <img
          className={styles.chrisLee70l1tdai6rmUnsplashIcon}
          alt=""
          src="/chrislee70l1tdai6rmunsplash-1@2x.png"
        />
      </div>
    </>
  );
};

export default LogIn;
