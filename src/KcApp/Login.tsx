import { memo } from "react";
import { KcContextBase, KcProps } from "keycloakify";
import Template from "keycloakify/lib/Template";
import BaseLayout from "components/BaseLayout/BaseLayout";
import type { I18n } from "./i18n";
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const test = {
  execution: "b197ebfa-b169-40b4-80f9-6c77c602a776",
  social: {
    displayInfo: true,
    providers: [
      {
        displayName: "Visma BankID",
        providerId: "saml",
        loginUrl:
          "/auth/realms/prod-lantbrukare/broker/visma/login?client_id=fence-frontend&tab_id=zqxXXKCD234&session_code=k0xomSdm5b8Irb8WUvuz7AJRHthwQmSvfpbUkRtkCVU",
        iconClasses: "",
        alias: "visma",
      },
    ],
  },
  auth: {
    showResetCredentials: false,
    authenticationSelections: [
      {
        helpText: "auth-username-password-form-help-text",
        displayName: "auth-username-password-form-display-name",
        iconCssClass: "kcAuthenticatorDefaultClass",
        authExecId: "b197ebfa-b169-40b4-80f9-6c77c602a776",
        authenticationExecution: {
          authenticatorFlow: false,
          conditional: false,
          required: true,
          enabled: true,
          disabled: false,
          id: "b197ebfa-b169-40b4-80f9-6c77c602a776",
          parentFlow: "0e2b70cb-db79-4b92-8297-074f7125643f",
          authenticator: "auth-username-password-form",
          alternative: false,
          requirement: {},
          priority: "10",
        },
      },
    ],
    showUsername: false,
    showTryAnotherWayLink: false,
  },
  message: {
    summary: "The request was canceled",
    type: "error",
    error: true,
    success: false,
    warning: false,
  },
  locale: {
    current: "se",
    supported: [
      {
        languageTag: "se",
        label: "se",
        url: "/auth/realms/prod-lantbrukare/login-actions/authenticate?client_id=fence-frontend&tab_id=zqxXXKCD234&execution=b197ebfa-b169-40b4-80f9-6c77c602a776&kc_locale=se",
      },
    ],
    currentLanguageTag: "se",
  },
  login: {},
  url: {
    oauthAction: "/auth/realms/prod-lantbrukare/login-actions/authenticate",
    resourcesPath: "/auth/resources/iejto/login/agronod-lantbrukare-theme",
    loginAction:
      "https://iam.apps.prod-ocp.agronod.com/auth/realms/prod-lantbrukare/login-actions/authenticate?session_code=k0xomSdm5b8Irb8WUvuz7AJRHthwQmSvfpbUkRtkCVU&execution=b197ebfa-b169-40b4-80f9-6c77c602a776&client_id=fence-frontend&tab_id=zqxXXKCD234",
    loginUrl:
      "/auth/realms/prod-lantbrukare/login-actions/authenticate?client_id=fence-frontend&tab_id=zqxXXKCD234",
    resourcesCommonPath:
      "/auth/resources/iejto/login/agronod-lantbrukare-theme/resources_common",
    firstBrokerLoginUrl:
      "/auth/realms/prod-lantbrukare/login-actions/first-broker-login?client_id=fence-frontend&tab_id=zqxXXKCD234",
    registrationUrl:
      "/auth/realms/prod-lantbrukare/login-actions/registration?client_id=fence-frontend&tab_id=zqxXXKCD234",
    logoutConfirmAction:
      "/auth/realms/prod-lantbrukare/protocol/openid-connect/logout/logout-confirm?client_id=fence-frontend&tab_id=zqxXXKCD234",
    registrationAction:
      "https://iam.apps.prod-ocp.agronod.com/auth/realms/prod-lantbrukare/login-actions/authenticate?session_code=k0xomSdm5b8Irb8WUvuz7AJRHthwQmSvfpbUkRtkCVU&execution=b197ebfa-b169-40b4-80f9-6c77c602a776&client_id=fence-frontend&tab_id=zqxXXKCD234",
    loginResetCredentialsUrl:
      "/auth/realms/prod-lantbrukare/login-actions/reset-credentials?client_id=fence-frontend&tab_id=zqxXXKCD234",
    resourcesUrl:
      "/auth/resources/iejto?client_id=fence-frontend&tab_id=zqxXXKCD234/login/agronod-lantbrukare-theme",
    loginRestartFlowUrl:
      "/auth/realms/prod-lantbrukare/login-actions/restart?client_id=fence-frontend&tab_id=zqxXXKCD234",
    oauth2DeviceVerificationAction:
      "/auth/realms/prod-lantbrukare/login-actions/authenticate",
  },
  messagesPerField: {},
  client: {
    clientId: "fence-frontend",
    description: "",
    baseUrl: "",
    name: "fence-frontend",
    attributes: {
      "backchannel.logout.session.required": "true",
      "client_credentials.use_refresh_token": "false",
      "display.on.consent.screen": "false",
      "oauth2.device.authorization.grant.enabled": "false",
      "backchannel.logout.revoke.offline.tokens": "false",
      "use.refresh.tokens": "true",
      "exclude.session.state.from.auth.response": "false",
    },
  },
  realm: {
    displayName: "prod-lantbrukare",
    registrationAllowed: false,
    displayNameHtml: "<b>prod-lantbrukare</b>",
    resetPasswordAllowed: false,
    resetCredentialsActionTokenLifespanMinutes: "5",
    password: true,
    actionTokenGeneratedByUserLifespanMinutes: "5",
    internationalizationEnabled: true,
    idpVerifyAccountLinkActionTokenLifespanMinutes: "5",
    verifyEmailActionTokenLifespanMinutes: "5",
    loginWithEmailAllowed: false,
    duplicateEmailsAllowed: false,
    editUsernameAllowed: false,
    name: "prod-lantbrukare",
    rememberMe: false,
    registrationEmailAsUsername: false,
    identityFederationEnabled: true,
  },
  scripts: [],
  properties: {
    "kcLogoIdP-facebook": "fa fa-facebook",
    parent: "keycloak",
    kcAuthenticatorOTPClass: "fa fa-mobile list-view-pf-icon-lg",
    "kcLogoIdP-bitbucket": "fa fa-bitbucket",
    kcAuthenticatorWebAuthnClass: "fa fa-key list-view-pf-icon-lg",
    kcWebAuthnDefaultIcon: "pficon pficon-key",
    "kcLogoIdP-stackoverflow": "fa fa-stack-overflow",
    kcSelectAuthListItemClass:
      "pf-l-stack__item select-auth-box-parent pf-l-split",
    "kcLogoIdP-microsoft": "fa fa-windows",
    kcLocaleItemClass: "pf-c-dropdown__menu-item",
    kcLoginOTPListItemHeaderClass: "pf-c-tile__header",
    kcLoginOTPListItemIconBodyClass: "pf-c-tile__icon",
    kcInputHelperTextAfterClass:
      "pf-c-form__helper-text pf-c-form__helper-text-after",
    kcFormClass: "form-horizontal",
    kcSelectAuthListClass: "pf-l-stack select-auth-container",
    kcInputClassRadioCheckboxLabelDisabled: "pf-m-disabled",
    kcSelectAuthListItemIconClass: "pf-l-split__item select-auth-box-icon",
    kcRecoveryCodesWarning: "kc-recovery-codes-warning",
    kcFormSettingClass: "login-pf-settings",
    kcWebAuthnBLE: "fa fa-bluetooth-b",
    kcInputWrapperClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcSelectAuthListItemArrowIconClass: "fa fa-angle-right fa-lg",
    meta: "viewport==width=device-width,initial-scale=1",
    styles: "css/login.css css/tile.css",
    kcFeedbackAreaClass: "col-md-12",
    "kcLogoIdP-google": "fa fa-google",
    kcCheckLabelClass: "pf-c-check__label",
    kcSelectAuthListItemFillClass: "pf-l-split__item pf-m-fill",
    kcAuthenticatorDefaultClass: "fa fa-list list-view-pf-icon-lg",
    "kcLogoIdP-gitlab": "fa fa-gitlab",
    kcFormAreaClass:
      "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",
    kcFormButtonsClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcInputClassRadioLabel: "pf-c-radio__label",
    kcAuthenticatorWebAuthnPasswordlessClass: "fa fa-key list-view-pf-icon-lg",
    kcSelectAuthListItemHeadingClass:
      "pf-l-stack__item select-auth-box-headline pf-c-title",
    kcInfoAreaClass: "col-xs-12 col-sm-4 col-md-4 col-lg-5 details",
    kcLogoLink: "http://www.keycloak.org",
    kcContainerClass: "container-fluid",
    kcSelectAuthListItemTitle: "select-auth-box-paragraph",
    kcHtmlClass: "login-pf",
    kcLoginOTPListItemTitleClass: "pf-c-tile__title",
    locales: "en",
    "kcLogoIdP-openshift-v4": "pf-icon pf-icon-openshift",
    kcWebAuthnUnknownIcon: "pficon pficon-key unknown-transport-class",
    kcFormSocialAccountNameClass: "kc-social-provider-name",
    "kcLogoIdP-openshift-v3": "pf-icon pf-icon-openshift",
    kcLoginOTPListInputClass: "pf-c-tile__input",
    kcWebAuthnUSB: "fa fa-usb",
    kcInputClassRadio: "pf-c-radio",
    kcWebAuthnKeyIcon: "pficon pficon-key",
    kcFeedbackInfoIcon: "fa fa-fw fa-info-circle",
    kcCommonLogoIdP: "kc-social-provider-logo kc-social-gray",
    stylesCommon:
      "web_modules/@patternfly/react-core/dist/styles/base.css web_modules/@patternfly/react-core/dist/styles/app.css node_modules/patternfly/dist/css/patternfly.min.css node_modules/patternfly/dist/css/patternfly-additions.min.css lib/pficon/pficon.css",
    kcRecoveryCodesActions: "kc-recovery-codes-actions",
    kcFormGroupHeader: "pf-c-form__group",
    kcFormSocialAccountSectionClass: "kc-social-section kc-social-gray",
    "kcLogoIdP-instagram": "fa fa-instagram",
    kcAlertClass: "pf-c-alert pf-m-inline",
    kcHeaderClass: "login-pf-page-header",
    kcLabelWrapperClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcFormSocialAccountLinkClass: "pf-c-login__main-footer-links-item-link",
    kcLocaleMainClass: "pf-c-dropdown",
    kcTextareaClass: "form-control",
    kcButtonBlockClass: "pf-m-block",
    kcButtonClass: "pf-c-button",
    kcWebAuthnNFC: "fa fa-wifi",
    kcLocaleClass: "col-xs-12 col-sm-1",
    kcInputClassCheckboxInput: "pf-c-check__input",
    kcFeedbackErrorIcon: "fa fa-fw fa-exclamation-circle",
    kcInputLargeClass: "input-lg",
    kcInputErrorMessageClass:
      "pf-c-form__helper-text pf-m-error required kc-feedback-text",
    kcRecoveryCodesList: "kc-recovery-codes-list",
    kcFormSocialAccountListClass:
      "pf-c-login__main-footer-links kc-social-links",
    kcAlertTitleClass: "pf-c-alert__title kc-feedback-text",
    kcAuthenticatorPasswordClass: "fa fa-unlock list-view-pf-icon-lg",
    kcCheckInputClass: "pf-c-check__input",
    "kcLogoIdP-linkedin": "fa fa-linkedin",
    "kcLogoIdP-twitter": "fa fa-twitter",
    kcFeedbackWarningIcon: "fa fa-fw fa-exclamation-triangle",
    kcResetFlowIcon: "pficon pficon-arrow fa",
    kcSelectAuthListItemIconPropertyClass:
      "fa-2x select-auth-box-icon-properties",
    kcFeedbackSuccessIcon: "fa fa-fw fa-check-circle",
    kcLoginOTPListClass: "pf-c-tile",
    kcSrOnlyClass: "sr-only",
    kcFormSocialAccountListGridClass: "pf-l-grid kc-social-grid",
    kcButtonDefaultClass: "btn-default",
    kcFormGroupErrorClass: "has-error",
    kcSelectAuthListItemDescriptionClass:
      "pf-l-stack__item select-auth-box-desc",
    kcSelectAuthListItemBodyClass: "pf-l-split__item pf-l-stack",
    import: "common/keycloak",
    kcWebAuthnInternal: "pficon pficon-key",
    kcSelectAuthListItemArrowClass: "pf-l-split__item select-auth-box-arrow",
    kcCheckClass: "pf-c-check",
    kcContentClass:
      "col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",
    kcLogoClass: "login-pf-brand",
    kcLoginOTPListItemIconClass: "fa fa-mobile",
    kcLoginClass: "login-pf-page",
    kcSignUpClass: "login-pf-signup",
    kcButtonLargeClass: "btn-lg",
    kcFormCardClass: "card-pf",
    kcLocaleListClass: "pf-c-dropdown__menu pf-m-align-right",
    kcInputClass: "pf-c-form-control",
    kcFormGroupClass: "form-group",
    "kcLogoIdP-paypal": "fa fa-paypal",
    kcInputClassCheckbox: "pf-c-check",
    kcRecoveryCodesConfirmation: "kc-recovery-codes-confirmation",
    kcInputClassRadioInput: "pf-c-radio__input",
    kcFormSocialAccountListButtonClass:
      "pf-c-button pf-m-control pf-m-block kc-social-item kc-social-gray",
    kcInputClassCheckboxLabel: "pf-c-check__label",
    kcFormOptionsClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcFormHeaderClass: "login-pf-header",
    kcFormSocialAccountGridItem: "pf-l-grid__item",
    kcButtonPrimaryClass: "pf-m-primary",
    kcInputHelperTextBeforeClass:
      "pf-c-form__helper-text pf-c-form__helper-text-before",
    "kcLogoIdP-github": "fa fa-github",
    kcLabelClass: "pf-c-form__label pf-c-form__label-text",
  },
  pageId: "login.ftl",
};

export const Login = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContextBase.Login; i18n: I18n } & KcProps) => {
    const { social } = kcContext;
    //In this theme we are using Login to show just in cancel request, otherwwise we skip it. We left just necessary ui parts in this teme, other functionality can be added and styled later if needed from templates.
    return (
      <BaseLayout>
        <Template
          {...{ kcContext, i18n, ...props }}
          // Set to false so we don't use keycloak styles but our MUI ones
          doFetchDefaultThemeResources={false}
          displayInfo={false}
          displayWide={true}
          headerNode={null}
          formNode={
            <Box id="kc-form">
              <Box id="kc-form-wrapper">
                {social.providers !== undefined && (
                  <Box id="kc-social-providers">
                    {/* TODO: check can we improve cancel request ui and handling */}
                    <List>
                      {social.providers.map((p) =>
                        p.alias === "visma" ? (
                          <Stack
                            component={ListItem}
                            gap={2}
                            alignItems="center"
                            key={p.providerId}
                          >
                            <Typography variant="h4">Du är utloggad</Typography>
                            <Button variant="contained" href={p.loginUrl}>
                              Logga in
                            </Button>
                          </Stack>
                        ) : (
                          <ListItem key={p.providerId}>
                            <Link href={p.loginUrl} id={`zocial-${p.alias}`}>
                              {p.displayName}
                            </Link>
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                )}
              </Box>
            </Box>
          }
        />
      </BaseLayout>
    );
  }
);
