<?php
$navKey = "cookies";
require_once 'includes/html-helpers.php';
gtm_data_layer('cookies');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php
meta_and_links("AG Grid: Cookies Policy", "About AG Grid", "This page outlines our policy in relation to
  the cookies that we collect on our website.", "cookies.php", true);
?>
<script src="dist/homepage.js"></script>
<link rel="stylesheet" href="dist/homepage.css">
</head>

<body>
<?php include_once("./includes/analytics.php"); ?>
  <header id="nav" class="compact">
  <?php
      $version = 'latest';
      include './includes/navbar.php';
  ?>
  </header>
  <div class="page-content">
    <div class="cookies-page">
      <div id="introduction">
        <h1>Cookie Policy</h1>
        <hr>
        <h4>Effective Date: May 17, 2018</h4>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">Cookies Guide</a>
          <a href="#manage-your-cookie-consent" class="list-group-item list-group-item-action">Manage Cookie Consent</a>
          <a href="#intro-privacy" class="list-group-item list-group-item-action">What is a Cookie?</a>
          <a href="#cookies-how-we-use" class="list-group-item list-group-item-action">How Do We Use Cookies?</a>
          <a href="#third-party-cookies" class="list-group-item list-group-item-action">Third-party Cookies</a>
        </div>

        <div>

        </div>

        <ol>
          <li>
                      <!-- OneTrust CookiePro Details -->
            <h3 id="manage-your-cookie-consent">Manage Cookie Consent</h3>
            <hr>
            <p>You can manage your optin and optout cookie consent settings by clicking the button below.</p>
            <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button>
            <p>Details of the cookies we use are listed in the table below.</p>
            <div id="ot-sdk-cookie-policy"></div>
          </li>
          <li>
            <h3 id="intro-privacy">What is a Cookie?</h3>
            <hr>
            <p>
              A <strong>"cookie"</strong> is a piece of information that is stored on your computer's hard drive and which
              records how you move your way around a website so that, when you revisit that website, it can present tailored
              options based on the information stored about your last visit. Cookies can also be used to analyse traffic and
              for advertising and marketing purposes.
            </p>
            <p>Cookies are used by nearly all websites and do not harm your system.</p>
            <p>If you want to check or change what types of cookies you accept, this can usually be altered within your
              browser settings. You can block cookies at any time by activating the setting on your browser that allows you to
              refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies
              (including essential cookies) you may not be able to access all or parts of our site.
            </p>
          </li>
          <li>
            <h3 id="cookies-how-we-use">How Do We Use Cookies?</h3>
            <hr>
            <p>We use cookies to track your use of our website. This enables us to understand how you use the site and track
              any patterns with regards how you are using our website. This helps us to develop and improve our website as
              well as products and / or services in response to what you might need or want.
            </p>
            <h3 class="text-uppercase">Cookies are either:</h3>
            <ul>
              <li>
                <strong>Session cookies:</strong> these are only stored on your computer during your web session and are
                automatically deleted when you close your browser – they usually store an anonymous session ID allowing you
                to browse a website without having to log in to each page, but they do not collect any personal data from
                your computer; or
              </li>
              <li>
                <strong>Persistent cookies:</strong> a persistent cookie is stored as a file on your computer and it remains
                there when you close your web browser. The cookie can be read by the website that created it when you visit
                that website again. We use persistent cookies for Google Analytics.
              </li>
            </ul>
            <h3 class="text-uppercase">Cookies can also be categorised as follows:</strong></h3>
            <ul>
              <li>
                <strong>Strictly necessary cookies:</strong> These cookies are essential to enable you to use the website
                effectively, such as when buying a product and / or service, and therefore cannot be turned off. Without
                these cookies, the services available to you on our website cannot be provided. These cookies do not
                gather information about you that could be used for marketing or remembering where you have been on the internet.
              </li>
              <li>
                <strong>Performance cookies:</strong> These cookies enable us to monitor and improve the performance of our website.
                For example, they allow us to count visits, identify traffic sources and see which parts of the site are most popular.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These cookies allow our website to remember choices you make and provide
                enhanced features. For instance, we may be able to provide you with news or updates relevant to the services you
                use. They may also be used to provide services you have requested such as viewing a video or commenting on a blog.
                The information these cookies collect is usually anonymised.
              </li>
              <li>
                <strong>Targetting cookies:</strong> These cookies may be set through our site by our advertising partners. 
                They may be used by those companies to build a profile of your interests and show you relevant adverts on 
                other sites. They do not store directly personal information, but are based on uniquely identifying your 
                browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
              </li>
            </ul>            
          </li>
          <li>
            <h3 id="third-party-cookies">Third-party Cookies</h3>
            <hr>
            <p>Some of our pages display content from external sites, e.g. YouTube, StackBlitz. The embedding of
              content from these sites may create third-party cookies over which we have no control.</p>

            <p>To view this third-party content, you may have to accept their terms and conditions. 
              This includes their cookie policies, over which we have no control.</p>

            <p>If you do not view this content, no third-party cookies are installed on your device.</p>

            <p>Third-party providers on AG Grid website and blogs include: 
              <a href="https://stackblitz.com/privacy-policy" target="_blank" rel="noopener">StackBlitz</a>, 
              <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener">YouTube</a>, 
              <a href="https://www.atlassian.com/legal/cookies" target="_blank" rel="noopener">Atlassian</a>, 
              <a href="https://codesandbox.io/legal/privacy" target="_blank" rel="noopener">Code Sandbox</a>, 
              <a href="https://policies.google.com/terms?hl=en&gl=be" target="_blank" rel="noopener">Google</a>, 
              <a href="https://www.linkedin.com/legal/user-agreement" target="_blank" rel="noopener">LinkedIn</a>, 
              <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener">Facebook</a>, 
              <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" target="_blank" rel="noopener">Github</a>.
              
              
            

            <p>These third-party services are outside of the control of AG Grid. Third Parties may, at any time,
              change their terms of service, purpose and use of cookies, etc.</p>
          </li>
        </ol>
      </div>
    </div>
    <?php include_once("./includes/footer.php"); ?>
  </div>
</body>
</html>
