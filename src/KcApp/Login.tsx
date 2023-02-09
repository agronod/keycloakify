import { useState, memo } from "react";
import { useCssAndCx } from "tss-react";
import { useConstCallback } from "powerhooks/useConstCallback";
import type { FormEventHandler } from "react";
import { getMsg, KcContextBase, KcProps } from "keycloakify";
import { Template } from "keycloakify/lib/components/Template";
import agrosfarLogo from "../agrosfar-pilot-logo.png";

export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Login } & KcProps) => {
    const {
      social,
      realm,
      url,
      usernameEditDisabled,
      login,
      auth,
      registrationDisabled,
    } = kcContext;

    console.log(kcContext, props);

    const realmPassword = process.env.REACT_APP_PASSWORD === "enabled"; // always disable as unable to set from keycloak config
    // const realmPassword = realm.password && false; // always disable as unable to set from keycloak config

    const { msg, msgStr } = getMsg(kcContext);

    const { cx } = useCssAndCx();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
      (e) => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement
          .querySelector("input[name='email']")
          ?.setAttribute("name", "username");

        formElement.submit();
      }
    );

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={true}
        displayInfo={social.displayInfo && false} // disable manually
        displayWide={realmPassword && social.providers !== undefined}
        headerNode={null} // msg("doLogIn")
        formNode={
          <div
            id="kc-form"
            className={cx(
              realmPassword &&
                social.providers !== undefined &&
                props.kcContentWrapperClass
            )}
          >
            <div
              id="kc-form-wrapper"
              className={cx(
                realmPassword &&
                  social.providers && [
                    props.kcFormSocialAccountContentClass,
                    props.kcFormSocialAccountClass,
                  ]
              )}
            >
              <img
                src={agrosfarLogo}
                className="agrosfar__logo"
                alt="Agrosfär logotyp"
              />
              <header className="login__header">
                <h1 className="login__title">Välkommen till Agrosfär</h1>
                <p className="login__description">
                  <div style={{ marginBottom: "0px" }}>
                    Agrosfär är lantbrukets automatiska klimatberäkningsverktyg
                    för ett effektivt klimatarbete.
                  </div>
                  Logga in med BankID på denna eller en annan enhet.
                </p>
              </header>

              {social.providers !== undefined && (
                <div
                  id="kc-social-providers"
                  className={cx(
                    props.kcFormSocialAccountContentClass,
                    props.kcFormSocialAccountClass
                  )}
                >
                  <ul
                    className={cx(
                      props.kcFormSocialAccountListClass,
                      social.providers.length > 4 &&
                        props.kcFormSocialAccountDoubleListClass
                    )}
                  >
                    {social.providers.map((p) => (
                      <li
                        key={p.providerId}
                        className={cx(props.kcFormSocialAccountListLinkClass)}
                      >
                        <a
                          href={p.loginUrl}
                          id={`zocial-${p.alias}`}
                          className={cx("zocial", p.providerId)}
                        >
                          <span>{p.displayName}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {realmPassword && (
                <form
                  id="kc-form-login"
                  onSubmit={onSubmit}
                  action={url.loginAction}
                  method="post"
                >
                  <div className={cx(props.kcFormGroupClass)}>
                    {(() => {
                      const label = !realm.loginWithEmailAllowed
                        ? "username"
                        : realm.registrationEmailAsUsername
                        ? "email"
                        : "usernameOrEmail";

                      const autoCompleteHelper: typeof label =
                        label === "usernameOrEmail" ? "username" : label;

                      return (
                        <>
                          <label
                            htmlFor={autoCompleteHelper}
                            className={cx(props.kcLabelClass)}
                          >
                            {msg(label)}
                          </label>
                          <input
                            tabIndex={1}
                            id={autoCompleteHelper}
                            className={cx(props.kcInputClass)}
                            //NOTE: This is used by Google Chrome auto fill so we use it to tell
                            //the browser how to pre fill the form but before submit we put it back
                            //to username because it is what keycloak expects.
                            name={autoCompleteHelper}
                            defaultValue={login.username ?? ""}
                            type="text"
                            {...(usernameEditDisabled
                              ? { disabled: true }
                              : {
                                  autoFocus: true,
                                  autoComplete: "off",
                                })}
                          />
                        </>
                      );
                    })()}
                  </div>
                  <div className={cx(props.kcFormGroupClass)}>
                    <label
                      htmlFor="password"
                      className={cx(props.kcLabelClass)}
                    >
                      {msg("password")}
                    </label>
                    <input
                      tabIndex={2}
                      id="password"
                      className={cx(props.kcInputClass)}
                      name="password"
                      type="password"
                      autoComplete="off"
                    />
                  </div>
                  <div
                    className={cx(
                      props.kcFormGroupClass,
                      props.kcFormSettingClass
                    )}
                  >
                    {/* <div id="kc-form-options">
                      {realm.rememberMe && !usernameEditDisabled && (
                        <div className="checkbox">
                          <label>
                            <input
                              tabIndex={3}
                              id="rememberMe"
                              name="rememberMe"
                              type="checkbox"
                              {...(login.rememberMe
                                ? {
                                    checked: true,
                                  }
                                : {})}
                            />
                            {msg("rememberMe")}
                          </label>
                        </div>
                      )}
                    </div> */}
                    {/* <div className={cx(props.kcFormOptionsWrapperClass)}>
                      {realm.resetPasswordAllowed && (
                        <span>
                          <a tabIndex={5} href={url.loginResetCredentialsUrl}>
                            {msg("doForgotPassword")}
                          </a>
                        </span>
                      )}
                    </div> */}
                  </div>
                  <div
                    id="kc-form-buttons"
                    className={cx(props.kcFormGroupClass)}
                  >
                    <input
                      type="hidden"
                      id="id-hidden-input"
                      name="credentialId"
                      {...(auth?.selectedCredential !== undefined
                        ? {
                            value: auth.selectedCredential,
                          }
                        : {})}
                    />
                    <input
                      tabIndex={4}
                      className={cx(
                        props.kcButtonClass,
                        props.kcButtonPrimaryClass,
                        props.kcButtonBlockClass,
                        props.kcButtonLargeClass
                      )}
                      name="login"
                      id="kc-login"
                      type="submit"
                      value={msgStr("doLogIn")}
                      disabled={isLoginButtonDisabled}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        }
        infoNode={
          realmPassword &&
          realm.registrationAllowed &&
          !registrationDisabled && (
            <div id="kc-registration">
              <span>
                {msg("noAccount")}
                <a tabIndex={6} href={url.registrationUrl}>
                  {msg("doRegister")}
                </a>
              </span>
            </div>
          )
        }
      />
    );
  }
);
