// https://github.com/AleDenshi/Dots/blob/master/.config/firefox/user-overrides.js

// Disable ads in the URL bar
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
// Various settings for URL suggestions
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.bestmatch", false);
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.pocket", false);

// Disable "Pocket"
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable Firefox Ads
user_pref("identity.fxaccounts.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);

// Enable compact mode
//user_pref("browser.compactmode.show", true);
//user_pref("browser.uidensity", 1);

// Set to 'false' to let private tabs mingle with normal tabs
//user_pref("browser.privateWindowSeparation.enabled", true);

// Keep sessions
//user_pref("privacy.clearOnShutdown.sessions", true);
//user_pref("privacy.clearOnShutdown.cookies", false);
//user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
//user_pref("privacy.clearOnShutdown.offlineApps", false);
//user_pref("browser.sessionstore.max_resumed_crashes", 0);
//user_pref("browser.sessionstore.resume_from_crash", false);

// Enable WebGL
//user_pref("webgl.disabled", false);

// Disable sidebar
user_pref("sidebar.revamp", false);

// Disable translations
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);

// Disable credit card and address autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Firefox password saving for use with a different password manager
user_pref("signon.rememberSignons", false);
