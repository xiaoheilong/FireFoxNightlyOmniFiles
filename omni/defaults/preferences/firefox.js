//@line 2 "$SRCDIR/browser/app/profile/firefox.js"
//@line 21 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.hiddenWindowChromeURL", "chrome://browser/content/hiddenWindowMac.xhtml");
pref("extensions.logging.enabled", false);
pref("extensions.strictCompatibility", false);
pref("extensions.checkCompatibility.temporaryThemeOverride_minAppVersion", "29.0a1");
pref("extensions.webextPermissionPrompts", true);
pref("extensions.webextOptionalPermissionPrompts", true);
pref("extensions.postDownloadThirdPartyPrompt", true);
pref("extensions.getAddons.cache.enabled", true);
pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%");
pref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%");
pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");
pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%");
pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%");
pref("extensions.blocklist.useMLBF", true);
pref("extensions.blocklist.useMLBF.stashes", true);
pref("extensions.recommendations.privacyPolicyUrl", "https://www.mozilla.org/privacy/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=privacy-policy-link#addons");
pref("extensions.recommendations.themeRecommendationUrl", "https://color.firefox.com/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=theme-footer-link");
pref("extensions.update.autoUpdateDefault", true);
pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");
pref("extensions.systemAddon.update.enabled", true);
pref("extensions.autoDisableScopes", 15);
pref("extensions.startupScanScopes", 0);
pref("extensions.geckoProfiler.acceptedExtensionIds", "geckoprofiler@mozilla.com,quantum-foxfooding@mozilla.com,raptor@mozilla.org");
pref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;");
pref("extensions.webextensions.default-content-security-policy", "script-src 'self'; object-src 'self';");
pref("extensions.webextensions.remote", true);
pref("extensions.webextensions.background-delayed-startup", true);
pref("extensions.langpacks.signatures.required", true);
pref("xpinstall.signatures.required", true);
pref("xpinstall.signatures.devInfoURL", "https://wiki.mozilla.org/Addons/Extension_Signing");
pref("devtools.storage.extensionStorage.enabled", true);
pref("browser.dictionaries.download.url", "https://addons.mozilla.org/%LOCALE%/firefox/language-tools/");
pref("app.update.checkInstallTime", true);
pref("app.update.timerMinimumDelay", 120);
pref("app.update.timerFirstInterval", 30000);
pref("app.update.log", false);
pref("app.update.log.file", false);
pref("app.update.backgroundMaxErrors", 10);
pref("app.update.link.updateAvailableWhatsNew", "update-available-whats-new");
pref("app.update.link.updateManualWhatsNew", "update-manual-whats-new");
pref("app.update.download.promptMaxAttempts", 2);
pref("app.update.elevation.promptMaxAttempts", 2);
pref("app.update.notifyDuringDownload", false);
//@line 149 "$SRCDIR/browser/app/profile/firefox.js"
pref("app.update.staging.enabled", true);
//@line 165 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.update.service.enabled", true);
//@line 167 "$SRCDIR/browser/app/profile/firefox.js"
//@line 169 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.update.BITS.enabled", true);
//@line 173 "$SRCDIR/browser/app/profile/firefox.js"
pref("app.update.langpack.enabled", true);
pref("extensions.update.enabled", true);
pref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%");
pref("extensions.update.interval", 86400);  // Check for updates to Extensions and
pref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/%LOCALE%/firefox/themes");
//@line 191 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.eme.ui.enabled", true);
//@line 195 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.uitour.enabled", true);
pref("browser.uitour.loglevel", "Error");
pref("browser.uitour.requireSecure", true);
pref("browser.uitour.themeOrigin", "https://addons.mozilla.org/%LOCALE%/firefox/themes/");
pref("browser.uitour.url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/tour/");
pref("browser.uitour.surveyDuration", 7200);
pref("keyword.enabled", true);
pref("browser.fixup.domainwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.test", true);
pref("browser.fixup.domainsuffixwhitelist.example", true);
pref("browser.fixup.domainsuffixwhitelist.invalid", true);
pref("browser.fixup.domainsuffixwhitelist.localhost", true);
pref("browser.fixup.domainsuffixwhitelist.internal", true);
pref("browser.fixup.domainsuffixwhitelist.local", true);
pref("browser.fixup.dns_first_for_single_words", false);
//@line 228 "$SRCDIR/browser/app/profile/firefox.js"
  pref("general.autoScroll", true);
//@line 230 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.uidensity", 0);
pref("browser.touchmode.auto", true);
pref("browser.shell.checkDefaultBrowser", true);
pref("browser.shell.shortcutFavicons",true);
pref("browser.shell.mostRecentDateSetAsDefault", "");
pref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", false);
pref("browser.shell.defaultBrowserCheckCount", 0);
//@line 246 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.defaultbrowser.notificationbar", true);
//@line 250 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.defaultbrowser.notificationbar.checkcount", 0);
pref("browser.defaultbrowser.notificationbar.checklimit", 10000);
pref("browser.startup.page",                1);
pref("browser.startup.homepage",            "about:home");
pref("browser.startup.homepage.abouthome_cache.enabled", false);
pref("browser.startup.firstrunSkipsHomepage", true);
//@line 266 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.startup.blankWindow", true);
//@line 270 "$SRCDIR/browser/app/profile/firefox.js"
pref("toolkit.lazyHiddenWindow", true);
pref("browser.slowStartup.notificationDisabled", false);
pref("browser.slowStartup.timeThreshold", 20000);
pref("browser.slowStartup.maxSamples", 5);
pref("browser.chrome.site_icons", true);
pref("browser.warnOnQuit", true);
pref("browser.fullscreen.autohide", true);
pref("browser.overlink-delay", 80);
pref("browser.urlbar.ctrlCanonizesURLs", true);
pref("browser.urlbar.autoFill", true);
pref("browser.urlbar.speculativeConnect.enabled", true);
pref("browser.urlbar.filter.javascript", true);
pref("browser.urlbar.loglevel", "Error");
pref("browser.urlbar.maxRichResults", 10);
pref("browser.urlbar.maxHistoricalSearchSuggestions", 2);
pref("browser.urlbar.suggest.bookmark",             true);
pref("browser.urlbar.suggest.history",              true);
pref("browser.urlbar.suggest.openpage",             true);
pref("browser.urlbar.suggest.searches",             true);
pref("browser.urlbar.suggest.topsites",             true);
pref("browser.urlbar.maxCharsForSearchSuggestions", 100);
pref("browser.urlbar.trimURLs", true);
pref("browser.urlbar.decodeURLsOnCopy", false);
pref("browser.urlbar.switchTabs.adoptIntoActiveWindow", false);
pref("browser.urlbar.openintab", false);
pref("browser.urlbar.richSuggestions.tail", true);
//@line 341 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.urlbar.update2", true);
pref("browser.urlbar.update2.disableOneOffsHorizontalKeyNavigation", true);
pref("browser.urlbar.update2.localOneOffs", true);
pref("browser.urlbar.update2.oneOffsRefresh", true);
//@line 359 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.urlbar.update2.emptySearchBehavior", 2);
pref("browser.urlbar.update2.tabToComplete", false);
pref("browser.urlbar.eventTelemetry.enabled", false);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 1);
pref("browser.altClickSave", false);
pref("browser.download.loglevel", "Error");
pref("browser.download.saveLinkAsFilenameTimeout", 4000);
pref("browser.download.useDownloadDir", true);
pref("browser.download.folderList", 1);
pref("browser.download.manager.addToRecentDocs", true);
pref("browser.download.manager.resumeOnWakeDelay", 10000);
pref("browser.download.animateNotifications", true);
pref("browser.download.panel.shown", false);
pref("browser.download.openInSystemViewerContextMenuItem", true);
pref("browser.download.alwaysOpenInSystemViewerContextMenuItem", true);
pref("browser.download.viewableInternally.enabledTypes", "xml,svg,webp,avif");
pref("browser.download.autohideButton", true);
//@line 417 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.helperApps.deleteTempFileOnExit", true);
//@line 419 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.helperApps.showOpenOptionForPdfJS", true);
pref("browser.helperApps.showOpenOptionForViewableInternally", true);
pref("browser.search.searchEnginesURL",      "https://addons.mozilla.org/%LOCALE%/firefox/search-engines/");
pref("browser.search.openintab", false);
pref("browser.search.context.loadInBackground", false);
pref("browser.search.hiddenOneOffs", "");
pref("browser.search.widget.inNavBar", false);
pref("browser.search.separatePrivateDefault.ui.enabled", false);
pref("browser.search.separatePrivateDefault.ui.banner.max", 0);
pref("browser.privatebrowsing.vpnpromourl", "https://vpn.mozilla.org/?utm_source=firefox-browser&utm_medium=firefox-%CHANNEL%-browser&utm_campaign=private-browsing-vpn-link");
pref("browser.sessionhistory.max_entries", 50);
pref("permissions.manager.defaultsUrl", "resource://app/defaults/permissions");
pref("permissions.default.camera", 0);
pref("permissions.default.microphone", 0);
pref("permissions.default.geo", 0);
pref("permissions.default.xr", 0);
pref("permissions.default.desktop-notification", 0);
pref("permissions.default.shortcuts", 0);
pref("permissions.desktop-notification.postPrompt.enabled", true);
pref("permissions.desktop-notification.notNow.enabled", false);
pref("permissions.fullscreen.allowed", false);
pref("browser.link.open_newwindow", 3);
pref("browser.link.open_newwindow.override.external", -1);
pref("browser.link.open_newwindow.restriction", 2);
//@line 493 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.link.open_newwindow.disabled_in_fullscreen", false);
//@line 495 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.closeTabByDblclick", false);
pref("browser.tabs.closeWindowWithLastTab", true);
pref("browser.tabs.allowTabDetach", true);
pref("browser.tabs.insertRelatedAfterCurrent", true);
pref("browser.tabs.insertAfterCurrent", false);
pref("browser.tabs.warnOnClose", true);
pref("browser.tabs.warnOnCloseOtherTabs", true);
pref("browser.tabs.warnOnOpen", true);
pref("browser.tabs.maxOpenBeforeWarn", 15);
pref("browser.tabs.loadInBackground", true);
pref("browser.tabs.opentabfor.middleclick", true);
pref("browser.tabs.loadDivertedInBackground", false);
pref("browser.tabs.loadBookmarksInBackground", false);
pref("browser.tabs.loadBookmarksInTabs", false);
pref("browser.tabs.tabClipWidth", 140);
pref("browser.tabs.tabMinWidth", 76);
//@line 523 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.tabs.drawInTitlebar", true);
//@line 525 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.tabmanager.enabled", false);
pref("browser.tabs.extraDragSpace", false);
pref("browser.tabs.selectOwnerOnClose", true);
pref("browser.tabs.delayHidingAudioPlayingIconMS", 3000);
//@line 551 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.tabs.remote.separatePrivilegedContentProcess", true);
//@line 553 "$SRCDIR/browser/app/profile/firefox.js"
//@line 555 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);
//@line 559 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", true);
pref("security.allow_eval_with_system_principal", false);
pref("security.allow_eval_in_parent_process", false);
//@line 571 "$SRCDIR/browser/app/profile/firefox.js"
  pref("security.allow_parent_unrestricted_js_loads", false);
//@line 573 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.unloadOnLowMemory", false);
pref("browser.ctrlTab.recentlyUsedOrder", true);
pref("browser.bookmarks.autoExportHTML",          false);
pref("browser.bookmarks.max_backups",             15);
pref("browser.bookmarks.openInTabClosesMenu", true);
pref("dom.disable_open_during_load",              true);
pref("javascript.options.showInConsole",          true);
pref("dom.disable_window_move_resize",            false);
pref("dom.disable_window_flip",                   true);
pref("privacy.popups.policy",               1);
pref("privacy.popups.usecustom",            true);
pref("privacy.popups.showBrowserMessage",   true);
pref("privacy.item.cookies",                false);
pref("privacy.clearOnShutdown.history",     true);
pref("privacy.clearOnShutdown.formdata",    true);
pref("privacy.clearOnShutdown.downloads",   true);
pref("privacy.clearOnShutdown.cookies",     true);
pref("privacy.clearOnShutdown.cache",       true);
pref("privacy.clearOnShutdown.sessions",    true);
pref("privacy.clearOnShutdown.offlineApps", false);
pref("privacy.clearOnShutdown.siteSettings", false);
pref("privacy.clearOnShutdown.openWindows", false);
pref("privacy.cpd.history",                 true);
pref("privacy.cpd.formdata",                true);
pref("privacy.cpd.passwords",               false);
pref("privacy.cpd.downloads",               true);
pref("privacy.cpd.cookies",                 true);
pref("privacy.cpd.cache",                   true);
pref("privacy.cpd.sessions",                true);
pref("privacy.cpd.offlineApps",             false);
pref("privacy.cpd.siteSettings",            false);
pref("privacy.cpd.openWindows",             false);
pref("privacy.history.custom",              false);
pref("privacy.sanitize.timeSpan", 1);
pref("privacy.sanitize.migrateFx3Prefs",    false);
pref("privacy.panicButton.enabled",         true);
pref("privacy.temporary_permission_expire_time_ms",  3600000);
pref("network.proxy.share_proxy_settings",  false); // use the same proxy settings for all protocols
pref("browser.gesture.swipe.left", "Browser:BackOrBackDuplicate");
pref("browser.gesture.swipe.right", "Browser:ForwardOrForwardDuplicate");
pref("browser.gesture.swipe.up", "cmd_scrollTop");
pref("browser.gesture.swipe.down", "cmd_scrollBottom");
pref("browser.gesture.pinch.latched", false);
pref("browser.gesture.pinch.threshold", 25);
//@line 659 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.gesture.pinch.out", "cmd_fullZoomEnlarge");
  pref("browser.gesture.pinch.in", "cmd_fullZoomReduce");
  pref("browser.gesture.pinch.out.shift", "cmd_fullZoomReset");
  pref("browser.gesture.pinch.in.shift", "cmd_fullZoomReset");
//@line 671 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.gesture.twist.latched", false);
pref("browser.gesture.twist.threshold", 0);
pref("browser.gesture.twist.right", "cmd_gestureRotateRight");
pref("browser.gesture.twist.left", "cmd_gestureRotateLeft");
pref("browser.gesture.twist.end", "cmd_gestureRotateEnd");
pref("browser.gesture.tap", "cmd_fullZoomReset");
pref("browser.history_swipe_animation.disabled", false);
//@line 703 "$SRCDIR/browser/app/profile/firefox.js"
  pref("mousewheel.with_shift.action", 4);
  pref("mousewheel.with_alt.action", 2);
  pref("mousewheel.with_meta.action", 1); // win key on Win, Super/Hyper on Linux
//@line 713 "$SRCDIR/browser/app/profile/firefox.js"
pref("mousewheel.with_control.action",3);
pref("mousewheel.with_win.action", 1);
pref("browser.xul.error_pages.expert_bad_cert", false);
pref("browser.xul.error_pages.show_safe_browsing_details_on_load", false);
pref("network.captive-portal-service.enabled", true);
pref("network.manage-offline-status", true);
pref("network.protocol-handler.external.mailto", true); // for mail
pref("network.protocol-handler.external.news", true);   // for news
pref("network.protocol-handler.external.snews", true);  // for secure news
pref("network.protocol-handler.external.nntp", true);   // also news
//@line 731 "$SRCDIR/browser/app/profile/firefox.js"
  pref("network.protocol-handler.external.ms-windows-store", true);
//@line 733 "$SRCDIR/browser/app/profile/firefox.js"
pref("network.protocol-handler.warn-external.mailto", false);
pref("network.protocol-handler.warn-external.news", false);
pref("network.protocol-handler.warn-external.snews", false);
pref("network.protocol-handler.warn-external.nntp", false);
//@line 740 "$SRCDIR/browser/app/profile/firefox.js"
  pref("network.protocol-handler.warn-external.ms-windows-store", false);
//@line 742 "$SRCDIR/browser/app/profile/firefox.js"
pref("network.protocol-handler.expose-all", true);
pref("network.protocol-handler.expose.mailto", false);
pref("network.protocol-handler.expose.news", false);
pref("network.protocol-handler.expose.snews", false);
pref("network.protocol-handler.expose.nntp", false);
pref("accessibility.typeaheadfind", false);
pref("accessibility.typeaheadfind.timeout", 5000);
pref("accessibility.typeaheadfind.linksonly", false);
pref("accessibility.typeaheadfind.flashBar", 1);
pref("accessibility.support.url", "https://support.mozilla.org/%LOCALE%/kb/accessibility-services");
pref("accessibility.indicator.enabled", false);
pref("plugins.testmode", false);
pref("plugins.show_infobar", false);
//@line 770 "$SRCDIR/browser/app/profile/firefox.js"
  pref("plugin.default.state", 1);
//@line 772 "$SRCDIR/browser/app/profile/firefox.js"
pref("plugins.flashBlock.enabled", true);
pref("plugins.favorfallback.mode", "follow-ctp");
pref("plugins.favorfallback.rules", "nosrc,video");
//@line 785 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.preferences.instantApply", false);
//@line 789 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.preferences.search", true);
//@line 793 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.preferences.experimental", true);
//@line 797 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.preferences.experimental.hidden", false);
pref("browser.preferences.defaultPerformanceSettings.enabled", true);
//@line 801 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.preferences.exposeHTTPSOnly", true);
//@line 805 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.download.show_plugins_in_list", true);
pref("browser.download.hide_plugins_without_extensions", true);
//@line 816 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.backspace_action", 0);
//@line 818 "$SRCDIR/browser/app/profile/firefox.js"
pref("intl.regional_prefs.use_os_locales", false);
pref("layout.spellcheckDefault", 1);
pref("browser.send_pings", false);
pref("gecko.handlerService.defaultHandlersVersion", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.webcal.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.mailto.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.irc.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.0.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.1.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.2.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.name", "chrome://browser-region/locale/region.properties");
pref("gecko.handlerService.schemes.ircs.3.uriTemplate", "chrome://browser-region/locale/region.properties");
pref("browser.geolocation.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/geolocation/");
pref("browser.xr.warning.infoURL", "https://www.mozilla.org/%LOCALE%/firefox/xr/");
pref("browser.sessionstore.resume_from_crash", true);
pref("browser.sessionstore.resume_session_once", false);
pref("browser.sessionstore.resuming_after_os_restart", false);
pref("browser.sessionstore.interval", 15000); // 15 seconds
pref("browser.sessionstore.interval.idle", 3600000); // 1h
pref("browser.sessionstore.idleDelay", 180000); // 3 minutes
pref("browser.sessionstore.privacy_level", 0);
pref("browser.sessionstore.max_tabs_undo", 25);
pref("browser.sessionstore.max_windows_undo", 3);
pref("browser.sessionstore.max_resumed_crashes", 1);
pref("browser.sessionstore.max_serialize_back", 10);
pref("browser.sessionstore.max_serialize_forward", -1);
pref("browser.sessionstore.restore_on_demand", true);
pref("browser.sessionstore.restore_hidden_tabs", false);
pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
pref("browser.sessionstore.upgradeBackup.latestBuildID", "");
pref("browser.sessionstore.upgradeBackup.maxUpgradeBackups", 3);
pref("browser.sessionstore.debug", false);
pref("browser.sessionstore.debug.no_auto_updates", false);
pref("browser.sessionstore.cleanup.forget_closed_after", 1209600000);
pref("browser.sessionstore.max_write_failures", 5);
pref("browser.sessionstore.warnOnQuit", false);
pref("accessibility.blockautorefresh", false);
pref("places.history.enabled", true);
pref("places.search.matchDiacritics", false);
pref("places.frecency.numVisits", 10);
pref("places.frecency.firstBucketCutoff", 4);
pref("places.frecency.secondBucketCutoff", 14);
pref("places.frecency.thirdBucketCutoff", 31);
pref("places.frecency.fourthBucketCutoff", 90);
pref("places.frecency.firstBucketWeight", 100);
pref("places.frecency.secondBucketWeight", 70);
pref("places.frecency.thirdBucketWeight", 50);
pref("places.frecency.fourthBucketWeight", 30);
pref("places.frecency.defaultBucketWeight", 10);
pref("places.frecency.embedVisitBonus", 0);
pref("places.frecency.framedLinkVisitBonus", 0);
pref("places.frecency.linkVisitBonus", 100);
pref("places.frecency.typedVisitBonus", 2000);
pref("places.frecency.bookmarkVisitBonus", 75);
pref("places.frecency.redirectSourceVisitBonus", 25);
pref("places.frecency.downloadVisitBonus", 0);
pref("places.frecency.permRedirectVisitBonus", 50);
pref("places.frecency.tempRedirectVisitBonus", 40);
pref("places.frecency.reloadVisitBonus", 0);
pref("places.frecency.defaultVisitBonus", 0);
pref("places.frecency.unvisitedBookmarkBonus", 140);
pref("places.frecency.unvisitedTypedBonus", 200);
pref("browser.ssl_override_behavior", 2);
pref("browser.zoom.full", true);
pref("browser.zoom.siteSpecific", true);
pref("browser.zoom.updateBackgroundTabs", true);
pref("breakpad.reportURL", "https://crash-stats.mozilla.org/report/index/");
pref("toolkit.datacollection.infoURL",
     "https://www.mozilla.org/legal/privacy/firefox.html");
pref("toolkit.crashreporter.infoURL",
     "https://www.mozilla.org/legal/privacy/firefox.html#crash-reporter");
pref("app.support.baseURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/");
//@line 1026 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.feedback.baseURL", "https://input.mozilla.org/%LOCALE%/feedback/%APP%/%VERSION%/");
//@line 1028 "$SRCDIR/browser/app/profile/firefox.js"
pref("security.alternate_certificate_error_page", "certerror");
pref("security.certerrors.recordEventTelemetry", true);
pref("security.certerrors.permanentOverride", true);
pref("security.certerrors.mitm.priming.enabled", true);
pref("security.certerrors.mitm.priming.endpoint", "https://mitmdetection.services.mozilla.com/");
pref("security.certerrors.mitm.auto_enable_enterprise_roots", true);
pref("browser.bookmarks.editDialog.showForNewBookmarks", true);
pref("browser.bookmarks.editDialog.firstEditField", "namePicker");
pref("browser.bookmarks.editDialog.maxRecentFolders", 7);
pref("dom.ipc.plugins.flash.disable-protected-mode", false);
pref("browser.flash-protected-mode-flip.enable", false);
pref("browser.flash-protected-mode-flip.done", false);
pref("dom.ipc.shims.enabledWarnings", false);
//@line 1059 "$SRCDIR/browser/app/profile/firefox.js"
  pref("dom.ipc.plugins.sandbox-level.default", 0);
//@line 1071 "$SRCDIR/browser/app/profile/firefox.js"
    pref("dom.ipc.plugins.sandbox-level.flash", 3);
//@line 1077 "$SRCDIR/browser/app/profile/firefox.js"
  pref("security.sandbox.content.level", 6);
  pref("security.sandbox.gpu.level", 0);
//@line 1092 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1128 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1153 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1157 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1159 "$SRCDIR/browser/app/profile/firefox.js"
  pref("security.sandbox.content.tempDirSuffix", "");
  pref("security.sandbox.plugin.tempDirSuffix", "");
//@line 1168 "$SRCDIR/browser/app/profile/firefox.js"
    pref("security.sandbox.logging.enabled", false);
//@line 1171 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1182 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1184 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.taskbar.previews.enable", false);
  pref("browser.taskbar.previews.max", 20);
  pref("browser.taskbar.previews.cachetime", 5);
  pref("browser.taskbar.lists.enabled", true);
  pref("browser.taskbar.lists.frequent.enabled", true);
  pref("browser.taskbar.lists.recent.enabled", false);
  pref("browser.taskbar.lists.maxListItemCount", 7);
  pref("browser.taskbar.lists.tasks.enabled", true);
  pref("browser.taskbar.lists.refreshInSeconds", 120);
//@line 1194 "$SRCDIR/browser/app/profile/firefox.js"
pref("services.sync.prefs.sync.accessibility.blockautorefresh", true);
pref("services.sync.prefs.sync.accessibility.browsewithcaret", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind", true);
pref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", true);
pref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true);
pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", true);
pref("services.sync.prefs.sync.browser.contentblocking.category", true);
pref("services.sync.prefs.sync.browser.contentblocking.features.strict", true);
pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", true);
pref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", true);
pref("services.sync.prefs.sync.browser.discovery.enabled", true);
pref("services.sync.prefs.sync.browser.download.useDownloadDir", true);
pref("services.sync.prefs.sync.browser.formfill.enable", true);
pref("services.sync.prefs.sync.browser.link.open_newwindow", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSearch", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.topSitesRows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.topstories.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeDownloads", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", true);
pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.rows", true);
pref("services.sync.prefs.sync.browser.newtabpage.enabled", true);
pref("services.sync.prefs.sync.browser.newtabpage.pinned", true);
pref("services.sync.prefs.sync.browser.offline-apps.notify", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", true);
pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", true);
pref("services.sync.prefs.sync.browser.search.update", true);
pref("services.sync.prefs.sync.browser.search.widget.inNavBar", true);
pref("services.sync.prefs.sync.browser.sessionstore.warnOnQuit", true);
pref("services.sync.prefs.sync.browser.startup.homepage", true);
pref("services.sync.prefs.sync.browser.startup.page", true);
pref("services.sync.prefs.sync.browser.tabs.loadInBackground", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnClose", true);
pref("services.sync.prefs.sync.browser.tabs.warnOnOpen", true);
pref("services.sync.prefs.sync.browser.taskbar.previews.enable", true);
pref("services.sync.prefs.sync.browser.urlbar.matchBuckets", true);
pref("services.sync.prefs.sync.browser.urlbar.maxRichResults", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.history", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", true);
pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", true);
pref("services.sync.prefs.sync.dom.disable_open_during_load", true);
pref("services.sync.prefs.sync.dom.disable_window_flip", true);
pref("services.sync.prefs.sync.dom.disable_window_move_resize", true);
pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled_pbm", true);
pref("services.sync.prefs.sync.dom.security.https_only_mode_pbm", true);
pref("services.sync.prefs.sync.extensions.update.enabled", true);
pref("services.sync.prefs.sync.extensions.activeThemeID", true);
pref("services.sync.prefs.sync.general.autoScroll", true);
pref("services.sync.prefs.sync.general.smoothScroll", true);
pref("services.sync.prefs.sync.intl.accept_languages", true);
pref("services.sync.prefs.sync.intl.regional_prefs.use_os_locales", true);
pref("services.sync.prefs.sync.layout.spellcheckDefault", true);
pref("services.sync.prefs.sync.media.autoplay.default", true);
pref("services.sync.prefs.sync.media.eme.enabled", true);
pref("services.sync.prefs.sync.media.videocontrols.picture-in-picture.video-toggle.enabled", true);
pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);
pref("services.sync.prefs.sync.network.cookie.lifetimePolicy", true);
pref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", true);
pref("services.sync.prefs.sync.permissions.default.image", true);
pref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", true);
pref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.history", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", true);
pref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", true);
pref("services.sync.prefs.sync.privacy.donottrackheader.enabled", true);
pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", false);
pref("services.sync.prefs.sync.privacy.fuzzyfox.clockgrainus", false);
pref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.enabled", true);
pref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting", true);
pref("services.sync.prefs.sync.privacy.reduceTimerPrecision", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", true);
pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", true);
pref("services.sync.prefs.sync.privacy.userContext.enabled", true);
pref("services.sync.prefs.sync.privacy.userContext.newTabContainerOnLeftClick.enabled", true);
pref("services.sync.prefs.sync.security.default_personal_cert", true);
pref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", true);
pref("services.sync.prefs.sync.signon.autofillForms", true);
pref("services.sync.prefs.sync.signon.generation.enabled", true);
pref("services.sync.prefs.sync.signon.management.page.breach-alerts.enabled", true);
pref("services.sync.prefs.sync.signon.rememberSignons", true);
pref("services.sync.prefs.sync.spellchecker.dictionary", true);
pref("services.sync.prefs.sync.ui.osk.enabled", true);
pref("services.sync.prefs.dangerously_allow_arbitrary", false);
pref("services.sync.syncedTabs.showRemoteIcons", true);
pref("browser.menu.showCharacterEncoding", "chrome://browser/locale/browser.properties");
pref("prompts.tab_modal.enabled", true);
pref("prompts.defaultModalType", 3);
pref("browser.topsites.useRemoteSetting", false);
pref("browser.partnerlink.attributionURL", "https://topsites.services.mozilla.com/cid/amzn_2020_a1");
pref("prompts.tabChromePromptSubDialog", true);
pref("browser.newtab.preload", true);
//@line 1345 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.newtabpage.activity-stream.debug", false);
//@line 1347 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.library.activity-stream.enabled", true);
pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "https://accounts.firefox.com/");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", true);
pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "{\"id\":\"cfr\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"cfr\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "{\"id\":\"whats-new-panel\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"whats-new-panel\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "{\"id\":\"message-groups\",\"enabled\":true,\"type\":\"remote-settings\",\"bucket\":\"message-groups\",\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{\"id\":\"snippets\",\"enabled\":true,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/%STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}");
pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "{\"id\":\"messaging-experiments\",\"enabled\":true,\"type\":\"remote-experiments\",\"messageGroups\":[\"cfr\",\"whats-new-panel\",\"moments-page\",\"snippets\",\"cfr-fxa\",\"aboutwelcome\"],\"updateCycleInMs\":3600000}");
pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", true);
pref("browser.newtabpage.activity-stream.discoverystream.enabled", true);
pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
pref("browser.newtabpage.activity-stream.discoverystream.locale-list-config", "");
pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "US,DE,CA,GB,IE,CH,AT,BE");
pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "US,CA,DE");
pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "US,CA,GB,DE,IE,CH,AT,BE");
pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", true);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.version", 1);
pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "nb_model_arts_and_entertainment, nb_model_autos_and_vehicles, nb_model_beauty_and_fitness, nb_model_blogging_resources_and_services, nb_model_books_and_literature, nb_model_business_and_industrial, nb_model_computers_and_electronics, nb_model_finance, nb_model_food_and_drink, nb_model_games, nb_model_health, nb_model_hobbies_and_leisure, nb_model_home_and_garden, nb_model_internet_and_telecom, nb_model_jobs_and_education, nb_model_law_and_government, nb_model_online_communities, nb_model_people_and_society, nb_model_pets_and_animals, nb_model_real_estate, nb_model_reference, nb_model_science, nb_model_shopping, nb_model_sports, nb_model_travel");
pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", true);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", true);
//@line 1397 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);
//@line 1401 "$SRCDIR/browser/app/profile/firefox.js"
pref("trailhead.firstrun.newtab.triplets", "");
pref("browser.aboutwelcome.enabled", true);
pref("browser.aboutwelcome.overrideContent", "");
pref("browser.messaging-system.whatsNewPanel.enabled", true);
pref("browser.messaging-system.personalized-cfr.scores", "{}");
pref("browser.messaging-system.personalized-cfr.score-threshold", 5000);
pref("messaging-system.log", "warn");
pref("messaging-system.rsexperimentloader.enabled", true);
pref("full-screen-api.enabled", true);
pref("toolkit.startup.max_resumed_crashes", 3);
//@line 1431 "$SRCDIR/browser/app/profile/firefox.js"
  pref("toolkit.winRegisterApplicationRestart", true);
//@line 1433 "$SRCDIR/browser/app/profile/firefox.js"
pref("pdfjs.disabled", false);
pref("pdfjs.firstRun", true);
pref("pdfjs.previousHandler.preferredAction", 0);
pref("pdfjs.previousHandler.alwaysAskBeforeHandling", false);
pref("pdfjs.handleOctetStream", true);
pref("sidebar.position_start", true);
pref("security.identitypopup.recordEventTelemetry", true);
pref("security.protectionspopup.recordEventTelemetry", true);
pref("security.app_menu.recordEventTelemetry", true);
pref("security.mixed_content.block_active_content", true);
pref("security.insecure_field_warning.contextual.enabled", true);
pref("security.insecure_connection_icon.enabled", true);
pref("security.insecure_connection_icon.pbmode.enabled", true);
pref("security.secure_connection_icon_color_gray", true);
pref("security.insecure_connection_text.enabled", false);
pref("security.insecure_connection_text.pbmode.enabled", false);
pref("security.cert_pinning.enforcement_level", 1);
pref("dom.debug.propagate_gesture_events_through_content", false);
pref("browser.uiCustomization.debug", false);
pref("browser.uiCustomization.state", "");
pref("identity.fxaccounts.enabled", true);
pref("identity.fxaccounts.remote.root", "https://accounts.firefox.com/");
pref("identity.fxaccounts.contextParam", "fx_desktop_v3");
pref("identity.fxaccounts.remote.profile.uri", "https://profile.accounts.firefox.com/v1");
pref("identity.fxaccounts.remote.oauth.uri", "https://oauth.accounts.firefox.com/v1");
pref("identity.fxaccounts.pairing.enabled", true);
pref("identity.fxaccounts.remote.pairing.uri", "wss://channelserver.services.mozilla.com");
pref("identity.sync.tokenserver.uri", "https://token.services.mozilla.com/1.0/sync/1.5");
pref("identity.sync.useOAuthForSyncToken", true);
pref("identity.fxaccounts.useSessionTokensForOAuth", true);
pref("identity.fxaccounts.autoconfig.uri", "");
pref("identity.sendtabpromo.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/send-tab");
pref("identity.mobilepromo.android", "https://www.mozilla.org/firefox/android/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
pref("identity.mobilepromo.ios", "https://www.mozilla.org/firefox/ios/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_campaign=");
//@line 1538 "$SRCDIR/browser/app/profile/firefox.js"
  pref("identity.fxaccounts.migrateToDevEdition", false);
//@line 1540 "$SRCDIR/browser/app/profile/firefox.js"
pref("identity.fxaccounts.commands.enabled", true);
pref("identity.fxaccounts.commands.missed.fetch_interval", 86400);
pref("media.gmp.trial-create.enabled", true);
//@line 1560 "$SRCDIR/browser/app/profile/firefox.js"
  pref("media.gmp-widevinecdm.visible", true);
  pref("media.gmp-widevinecdm.enabled", true);
//@line 1563 "$SRCDIR/browser/app/profile/firefox.js"
pref("media.gmp-gmpopenh264.visible", true);
pref("media.gmp-gmpopenh264.enabled", true);
pref("media.autoplay.default", 1); // 0=Allowed, 1=Blocked, 5=All Blocked
//@line 1571 "$SRCDIR/browser/app/profile/firefox.js"
  pref("media.autoplay.block-webaudio", true);
//@line 1576 "$SRCDIR/browser/app/profile/firefox.js"
pref("media.videocontrols.picture-in-picture.enabled", true);
pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
//@line 1581 "$SRCDIR/browser/app/profile/firefox.js"
  pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true);
  pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", true);
//@line 1589 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.translation.detectLanguage", false);
pref("browser.translation.neverForLanguages", "");
pref("browser.translation.ui.show", false);
pref("browser.translation.engine", "Google");
pref("toolkit.telemetry.archive.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabled", true);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", true);
pref("toolkit.telemetry.newProfilePing.enabled", true);
pref("toolkit.telemetry.updatePing.enabled", true);
pref("toolkit.telemetry.bhrPing.enabled", true);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("browser.ping-centre.telemetry", true);
pref("browser.ping-centre.log", false);
pref("media.gmp-provider.enabled", true);
//@line 1623 "$SRCDIR/browser/app/profile/firefox.js"
pref("network.cookie.cookieBehavior", 5 /* BEHAVIOR_REJECT_TRACKER_AND_PARTITION_FOREIGN */);
//@line 1629 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.trackingprotection.fingerprinting.enabled", true);
pref("privacy.trackingprotection.cryptomining.enabled", true);
pref("browser.contentblocking.database.enabled", true);
pref("dom.storage_access.enabled", true);
pref("browser.contentblocking.cryptomining.preferences.ui.enabled", true);
pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", true);
//@line 1643 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true);
//@line 1646 "$SRCDIR/browser/app/profile/firefox.js"
//@line 1672 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cm,fp,stp");
//@line 1677 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.contentblocking.customBlockList.preferences.ui.enabled", false);
pref("browser.contentblocking.reportBreakage.url", "https://tracking-protection-issues.herokuapp.com/new");
pref("browser.contentblocking.report.lockwise.enabled", true);
pref("browser.contentblocking.report.monitor.enabled", true);
pref("browser.contentblocking.report.proxy.enabled", false);
pref("browser.contentblocking.report.show_mobile_app", true);
pref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/?entrypoint=protection_report_monitor&utm_source=about-protections");
pref("browser.contentblocking.report.monitor.how_it_works.url", "https://monitor.firefox.com/about");
pref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init?entrypoint=protection_report_monitor&utm_source=about-protections&email=");
pref("browser.contentblocking.report.monitor.preferences_url", "https://monitor.firefox.com/user/preferences");
pref("browser.contentblocking.report.monitor.home_page_url", "https://monitor.firefox.com/user/dashboard");
pref("browser.contentblocking.report.manage_devices.url", "https://accounts.firefox.com/settings/clients");
pref("browser.contentblocking.report.endpoint_url", "https://monitor.firefox.com/user/breach-stats?includeResolved=true");
pref("browser.contentblocking.report.proxy_extension.url", "https://fpn.firefox.com/browser?utm_source=firefox-desktop&utm_medium=referral&utm_campaign=about-protections&utm_content=about-protections");
pref("browser.contentblocking.report.lockwise.mobile-ios.url", "https://apps.apple.com/app/id1314000270");
pref("browser.contentblocking.report.lockwise.mobile-android.url", "https://play.google.com/store/apps/details?id=mozilla.lockbox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.mobile-ios.url", "https://apps.apple.com/app/firefox-private-safe-browser/id989804926");
pref("browser.contentblocking.report.mobile-android.url", "https://play.google.com/store/apps/details?id=org.mozilla.firefox&referrer=utm_source%3Dprotection_report%26utm_content%3Dmobile_promotion");
pref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/password-manager-report");
pref("browser.contentblocking.report.social.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/social-media-tracking-report");
pref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cross-site-tracking-report");
pref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/tracking-content-report");
pref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/fingerprinters-report");
pref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/cryptominers-report");
pref("browser.contentblocking.cfr-milestone.enabled", true);
pref("browser.contentblocking.cfr-milestone.milestone-achieved", 0);
pref("browser.contentblocking.cfr-milestone.milestones", "[1000, 5000, 10000, 25000, 50000, 100000, 500000]");
//@line 1726 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.protections_panel.enabled", true);
  pref("browser.protections_panel.infoMessage.seen", false);
//@line 1729 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.usercontext.about_newtab_segregation.enabled", true);
//@line 1734 "$SRCDIR/browser/app/profile/firefox.js"
  pref("privacy.userContext.enabled", true);
  pref("privacy.userContext.ui.enabled", true);
//@line 1740 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.userContext.extension", "");
pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);
//@line 1746 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.webrtc.allowSilencingNotifications", true);
pref("privacy.webrtc.legacyGlobalIndicator", false);
pref("privacy.webrtc.hideGlobalIndicator", false);
//@line 1756 "$SRCDIR/browser/app/profile/firefox.js"
pref("privacy.webrtc.sharedTabWarning", false);
pref("browser.tabs.remote.autostart", true);
pref("browser.tabs.remote.desktopbehavior", true);
//@line 1767 "$SRCDIR/browser/app/profile/firefox.js"
  pref("media.peerconnection.mtransport_process", true);
//@line 1771 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.tabs.remote.warmup.enabled", true);
pref("browser.tabs.remote.tabCacheSize", 0);
pref("browser.tabs.remote.warmup.maxTabs", 3);
pref("browser.tabs.remote.warmup.unloadDelayMs", 2000);
pref("browser.tabs.crashReporting.sendReport", true);
pref("browser.tabs.crashReporting.includeURL", false);
pref("browser.tabs.crashReporting.requestEmail", false);
pref("browser.tabs.crashReporting.emailMe", false);
pref("browser.tabs.crashReporting.email", "");
pref("browser.navigation.requireUserInteraction", false);
pref("extensions.experiments.enabled", false);
//@line 1797 "$SRCDIR/browser/app/profile/firefox.js"
  pref("dom.ipc.processPriorityManager.enabled", true);
//@line 1800 "$SRCDIR/browser/app/profile/firefox.js"
pref("reader.parse-node-limit", 0);
pref("reader.errors.includeURLs", true);
pref("view_source.tab", true);
pref("dom.serviceWorkers.enabled", true);
pref("dom.push.enabled", true);
pref("toolkit.pageThumbs.minWidth", 280);
pref("toolkit.pageThumbs.minHeight", 190);
pref("media.webspeech.synth.enabled", true);
pref("browser.esedbreader.loglevel", "Error");
pref("browser.laterrun.enabled", false);
pref("dom.ipc.processPrelaunch.enabled", true);
pref("browser.migrate.chrome.history.limit", 2000);
pref("browser.migrate.chrome.history.maxAgeInDays", 180);
//@line 1835 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.migrate.showBookmarksToolbarAfterMigration", true);
//@line 1839 "$SRCDIR/browser/app/profile/firefox.js"
pref("extensions.pocket.api", "api.getpocket.com");
pref("extensions.pocket.enabled", true);
pref("extensions.pocket.oAuthConsumerKey", "40249-e88c401e1b1f2242d9e441c4");
pref("extensions.pocket.site", "getpocket.com");
pref("extensions.pocket.onSaveRecs", false);
pref("extensions.pocket.onSaveRecs.locales", "en-US,en-GB,en-CA");
//@line 1848 "$SRCDIR/browser/app/profile/firefox.js"
pref("signon.management.page.fileImport.enabled", true);
pref("signon.management.page.os-auth.enabled", true);
//@line 1854 "$SRCDIR/browser/app/profile/firefox.js"
pref("signon.management.page.breach-alerts.enabled", true);
pref("signon.management.page.vulnerable-passwords.enabled", true);
pref("signon.management.page.sort", "name");
pref("signon.management.page.mobileAndroidURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmozilla.lockbox&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.mobileAppleURL", "https://app.adjust.com/6tteyjo?redirect=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1314000270%3Fmt%3D8&utm_campaign=Desktop&utm_adgroup=InProduct&utm_creative=");
pref("signon.management.page.breachAlertUrl",
     "https://monitor.firefox.com/breach-details/");
pref("signon.management.page.hideMobileFooter", false);
pref("signon.management.page.showPasswordSyncNotification", true);
pref("signon.passwordEditCapture.enabled", true);
pref("signon.showAutoCompleteFooter", true);
pref("signon.showAutoCompleteImport", "import");
pref("signon.suggestImportCount", 3);
pref("print.use_simplify_page", true);
pref("webchannel.allowObject.urlWhitelist", "https://content.cdn.mozilla.net https://support.mozilla.org https://install.mozilla.org");
//@line 1883 "$SRCDIR/browser/app/profile/firefox.js"
  pref("browser.crashReports.unsubmittedCheck.enabled", true);
//@line 1887 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 4);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("extensions.formautofill.available", "detect");
pref("extensions.formautofill.addresses.enabled", true);
pref("extensions.formautofill.addresses.capture.enabled", false);
//@line 1903 "$SRCDIR/browser/app/profile/firefox.js"
pref("extensions.formautofill.creditCards.available", true);
pref("extensions.formautofill.creditCards.enabled", true);
pref("services.sync.engine.creditcards.available", true);
//@line 1913 "$SRCDIR/browser/app/profile/firefox.js"
pref("extensions.formautofill.creditCards.hideui", false);
pref("extensions.formautofill.creditCards.used", 0);
pref("extensions.formautofill.firstTimeUse", true);
pref("extensions.formautofill.heuristics.enabled", true);
pref("extensions.formautofill.reauth.enabled", false);
pref("extensions.formautofill.section.enabled", true);
pref("extensions.formautofill.loglevel", "Warn");
pref("toolkit.osKeyStore.loglevel", "Warn");
pref("extensions.formautofill.supportedCountries", "US");
pref("extensions.formautofill.supportRTL", false);
pref("browser.sessionstore.restore_tabs_lazily", true);
pref("browser.suppress_first_window_animation", true);
pref("extensions.screenshots.disabled", false);
pref("extensions.screenshots.upload-disabled", false);
pref("doh-rollout.profileCreationThreshold", "1572476400000");
pref("doh-rollout.trr-selection.enabled", false);
pref("doh-rollout.provider-steering.enabled", false);
pref("doh-rollout.provider-steering.provider-list", "[{ \"name\": \"comcast\", \"canonicalName\": \"doh-discovery.xfinity.com\", \"uri\": \"https://doh.xfinity.com/dns-query\" }]");
pref("browser.chrome.errorReporter.infoURL",
     "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/nightly-error-collection");
pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");
pref("app.normandy.dev_mode", false);
pref("app.normandy.enabled", true);
pref("app.normandy.first_run", true);
pref("app.normandy.logging.level", 50); // Warn
pref("app.normandy.run_interval_seconds", 21600); // 6 hours
pref("app.normandy.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");
pref("app.normandy.last_seen_buildid", "");
pref("app.normandy.onsync_skew_sec", 600);
//@line 1979 "$SRCDIR/browser/app/profile/firefox.js"
  pref("app.shield.optoutstudies.enabled", true);
//@line 1983 "$SRCDIR/browser/app/profile/firefox.js"
pref("browser.ssb.enabled", false);
//@line 1992 "$SRCDIR/browser/app/profile/firefox.js"
  pref("intl.multilingual.enabled", false);
  pref("intl.multilingual.downloadEnabled", false);
//@line 1996 "$SRCDIR/browser/app/profile/firefox.js"
pref("fission.frontend.simulate-events", false);
pref("fission.frontend.simulate-messages", false);
pref("toolkit.coverage.enabled", false);
pref("toolkit.coverage.endpoint.base", "https://coverage.mozilla.org");
pref("browser.discovery.enabled", true);
pref("browser.discovery.containers.enabled", true);
pref("browser.discovery.sites", "addons.mozilla.org");
pref("browser.engagement.recent_visited_origins.expiry", 86400); // 24 * 60 * 60 (24 hours in seconds)
pref("browser.aboutConfig.showWarning", true);
pref("browser.toolbars.keyboard_navigation", true);
pref("identity.fxaccounts.toolbar.enabled", true);
pref("identity.fxaccounts.toolbar.accessed", false);
pref("identity.fxaccounts.service.monitorLoginUrl", "https://monitor.firefox.com/");
pref("corroborator.enabled", true);
pref("devtools.toolbox.footer.height", 250);
pref("devtools.toolbox.sidebar.width", 500);
pref("devtools.toolbox.host", "bottom");
pref("devtools.toolbox.previousHost", "right");
pref("devtools.toolbox.selectedTool", "inspector");
pref("devtools.toolbox.sideEnabled", true);
pref("devtools.toolbox.zoomValue", "1");
pref("devtools.toolbox.splitconsoleEnabled", false);
pref("devtools.toolbox.splitconsoleHeight", 100);
pref("devtools.toolbox.tabsOrder", "");
//@line 2051 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.browsertoolbox.fission", true);
//@line 2055 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.contenttoolbox.fission", true);
pref("devtools.target-switching.enabled", false);
pref("devtools.command-button-pick.enabled", true);
pref("devtools.command-button-frames.enabled", true);
pref("devtools.command-button-splitconsole.enabled", true);
pref("devtools.command-button-paintflashing.enabled", false);
pref("devtools.command-button-responsive.enabled", true);
pref("devtools.command-button-screenshot.enabled", false);
pref("devtools.command-button-rulers.enabled", false);
pref("devtools.command-button-measure.enabled", false);
pref("devtools.command-button-noautohide.enabled", false);
//@line 2085 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.inspector.enabled", true);
pref("devtools.inspector.activeSidebar", "layoutview");
pref("devtools.inspector.remote", false);
pref("devtools.inspector.three-pane-enabled", true);
pref("devtools.inspector.chrome.three-pane-enabled", false);
pref("devtools.inspector.show_pseudo_elements", false);
pref("devtools.inspector.imagePreviewTooltipSize", 300);
pref("devtools.inspector.showUserAgentStyles", false);
pref("devtools.inspector.showAllAnonymousContent", false);
pref("devtools.inspector.new-rulesview.enabled", false);
pref("devtools.inspector.ruleview.inline-compatibility-warning.enabled", false);
//@line 2111 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.inspector.compatibility.enabled", true);
//@line 2115 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.inspector.color-scheme-simulation.enabled", false);
pref("devtools.gridinspector.gridOutlineMaxColumns", 50);
pref("devtools.gridinspector.gridOutlineMaxRows", 50);
pref("devtools.gridinspector.showGridAreas", false);
pref("devtools.gridinspector.showGridLineNumbers", false);
pref("devtools.gridinspector.showInfiniteLines", false);
pref("devtools.gridinspector.maxHighlighters", 3);
pref("devtools.layout.boxmodel.opened", true);
pref("devtools.layout.flexbox.opened", true);
pref("devtools.layout.flex-container.opened", true);
pref("devtools.layout.flex-item.opened", true);
pref("devtools.layout.grid.opened", true);
//@line 2141 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.layout.boxmodel.highlightProperty", true);
//@line 2145 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.eyedropper.zoom", 6);
pref("devtools.markup.collapseAttributes", true);
pref("devtools.markup.collapseAttributeLength", 120);
pref("devtools.markup.beautifyOnCopy", false);
pref("devtools.markup.mutationBreakpoints.enabled", true);
pref("devtools.defaultColorUnit", "authored");
pref("devtools.memory.enabled", true);
pref("devtools.memory.custom-census-displays", "{}");
pref("devtools.memory.custom-label-displays", "{}");
pref("devtools.memory.custom-tree-map-displays", "{}");
pref("devtools.memory.max-individuals", 1000);
pref("devtools.memory.max-retaining-paths", 10);
pref("devtools.performance.enabled", true);
pref("devtools.performance.memory.sample-probability", "0.05");
pref("devtools.performance.memory.max-log-length", 125000);
pref("devtools.performance.timeline.hidden-markers",
  "[\"Composite\",\"CompositeForwardTransaction\"]");
pref("devtools.performance.profiler.buffer-size", 10000000);
pref("devtools.performance.profiler.sample-frequency-hz", 1000);
pref("devtools.performance.ui.invert-call-tree", true);
pref("devtools.performance.ui.invert-flame-graph", false);
pref("devtools.performance.ui.flatten-tree-recursion", true);
pref("devtools.performance.ui.show-platform-data", false);
pref("devtools.performance.ui.show-idle-blocks", true);
pref("devtools.performance.ui.enable-memory", false);
pref("devtools.performance.ui.enable-allocations", false);
pref("devtools.performance.ui.enable-framerate", true);
pref("devtools.performance.ui.show-jit-optimizations", false);
pref("devtools.performance.ui.show-triggers-for-gc-types",
  "TOO_MUCH_MALLOC ALLOC_TRIGGER LAST_DITCH EAGER_ALLOC_TRIGGER");
pref("devtools.performance.ui.enable-memory-flame", false);
//@line 2202 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.performance.ui.experimental", true);
//@line 2206 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.cache.disabled", false);
pref("devtools.serviceWorkers.testing.enabled", false);
pref("devtools.netmonitor.enabled", true);
pref("devtools.netmonitor.features.search", true);
pref("devtools.netmonitor.features.requestBlocking", true);
pref("devtools.application.enabled", true);
pref("devtools.netmonitor.panes-network-details-width", 550);
pref("devtools.netmonitor.panes-network-details-height", 450);
pref("devtools.netmonitor.panes-search-width", 550);
pref("devtools.netmonitor.panes-search-height", 450);
pref("devtools.netmonitor.filters", "[\"all\"]");
pref("devtools.netmonitor.visibleColumns",
    "[\"status\",\"method\",\"domain\",\"file\",\"initiator\",\"type\",\"transferred\",\"contentSize\",\"waterfall\"]"
);
pref("devtools.netmonitor.columnsData",
  '[{"name":"status","minWidth":30,"width":5}, {"name":"method","minWidth":30,"width":5}, {"name":"domain","minWidth":30,"width":10}, {"name":"file","minWidth":30,"width":25}, {"name":"url","minWidth":30,"width":25},{"name":"initiator","minWidth":30,"width":10},{"name":"type","minWidth":30,"width":5},{"name":"transferred","minWidth":30,"width":10},{"name":"contentSize","minWidth":30,"width":5},{"name":"waterfall","minWidth":150,"width":15}]');
pref("devtools.netmonitor.msg.payload-preview-height", 128);
pref("devtools.netmonitor.msg.visibleColumns",
  '["data", "time"]'
);
pref("devtools.netmonitor.msg.displayed-messages.limit", 500);
pref("devtools.netmonitor.response.ui.limit", 10240);
pref("devtools.netmonitor.saveRequestAndResponseBodies", true);
pref("devtools.netmonitor.har.defaultLogDir", "");
pref("devtools.netmonitor.har.defaultFileName", "%hostname_Archive [%date]");
pref("devtools.netmonitor.har.jsonp", false);
pref("devtools.netmonitor.har.jsonpCallback", "");
pref("devtools.netmonitor.har.includeResponseBodies", true);
pref("devtools.netmonitor.har.compress", false);
pref("devtools.netmonitor.har.forceExport", false);
pref("devtools.netmonitor.har.pageLoadedTimeout", 1500);
pref("devtools.netmonitor.har.enableAutoExportToFile", false);
pref("devtools.netmonitor.features.webSockets", true);
pref("devtools.netmonitor.audits.slow", 500);
pref("devtools.netmonitor.features.serverSentEvents", true);
pref("devtools.storage.enabled", true);
pref("devtools.styleeditor.enabled", true);
pref("devtools.styleeditor.autocompletion-enabled", true);
pref("devtools.styleeditor.showMediaSidebar", true);
pref("devtools.styleeditor.mediaSidebarWidth", 238);
pref("devtools.styleeditor.navSidebarWidth", 245);
pref("devtools.styleeditor.transitions", true);
pref("devtools.screenshot.clipboard.enabled", false);
pref("devtools.screenshot.audio.enabled", true);
pref("devtools.dom.enabled", false);
pref("devtools.accessibility.enabled", true);
pref("devtools.webconsole.filter.error", true);
pref("devtools.webconsole.filter.warn", true);
pref("devtools.webconsole.filter.info", true);
pref("devtools.webconsole.filter.log", true);
pref("devtools.webconsole.filter.debug", true);
pref("devtools.webconsole.filter.css", false);
pref("devtools.webconsole.filter.net", false);
pref("devtools.webconsole.filter.netxhr", false);
pref("devtools.webconsole.input.autocomplete",true);
//@line 2299 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.webconsole.input.context", true);
//@line 2303 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.contenttoolbox.webconsole.input.context", false);
pref("devtools.webconsole.input.eagerEvaluation", true);
pref("devtools.browserconsole.filter.error", true);
pref("devtools.browserconsole.filter.warn", true);
pref("devtools.browserconsole.filter.info", true);
pref("devtools.browserconsole.filter.log", true);
pref("devtools.browserconsole.filter.debug", true);
pref("devtools.browserconsole.filter.css", false);
pref("devtools.browserconsole.filter.net", false);
pref("devtools.browserconsole.filter.netxhr", false);
pref("devtools.webconsole.inputHistoryCount", 300);
pref("devtools.webconsole.persistlog", false);
pref("devtools.netmonitor.persistlog", false);
pref("devtools.webconsole.timestampMessages", false);
//@line 2337 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.webconsole.sidebarToggle", true);
//@line 2341 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.webconsole.input.editor", false);
pref("devtools.browserconsole.input.editor", false);
pref("devtools.webconsole.input.editorWidth", 0);
pref("devtools.browserconsole.input.editorWidth", 0);
pref("devtools.webconsole.input.editorOnboarding", true);
pref("devtools.performance.new-panel-enabled", false);
pref("devtools.webconsole.groupWarningMessages", true);
pref("devtools.browserconsole.contentMessages", false);
pref("devtools.source-map.client-service.enabled", true);
pref("devtools.hud.loglimit", 10000);
pref("devtools.editor.tabsize", 2);
pref("devtools.editor.expandtab", true);
pref("devtools.editor.keymap", "default");
pref("devtools.editor.autoclosebrackets", true);
pref("devtools.editor.detectindentation", true);
pref("devtools.editor.enableCodeFolding", true);
pref("devtools.editor.autocomplete", true);
pref("devtools.responsive.viewport.angle", 0);
pref("devtools.responsive.viewport.width", 320);
pref("devtools.responsive.viewport.height", 480);
pref("devtools.responsive.viewport.pixelRatio", 0);
pref("devtools.responsive.leftAlignViewport.enabled", false);
pref("devtools.responsive.reloadConditions.touchSimulation", false);
pref("devtools.responsive.reloadConditions.userAgent", false);
pref("devtools.responsive.reloadNotification.enabled", true);
pref("devtools.responsive.touchSimulation.enabled", false);
pref("devtools.responsive.metaViewport.enabled", true);
pref("devtools.responsive.userAgent", "");
//@line 2409 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.responsive.showUserAgentInput", true);
//@line 2413 "$SRCDIR/browser/app/profile/firefox.js"
//@line 2416 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.aboutdebugging.local-tab-debugging", false);
//@line 2420 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.aboutdebugging.process-debugging", true);
pref("devtools.aboutdebugging.network-locations", "[]");
pref("devtools.aboutdebugging.collapsibilities.installedExtension", false);
pref("devtools.aboutdebugging.collapsibilities.otherWorker", false);
pref("devtools.aboutdebugging.collapsibilities.serviceWorker", false);
pref("devtools.aboutdebugging.collapsibilities.sharedWorker", false);
pref("devtools.aboutdebugging.collapsibilities.tab", false);
pref("devtools.aboutdebugging.collapsibilities.temporaryExtension", false);
//@line 2436 "$SRCDIR/browser/app/profile/firefox.js"
  pref("devtools.aboutdebugging.showHiddenAddons", false);
//@line 2440 "$SRCDIR/browser/app/profile/firefox.js"
pref("devtools.debugger.features.map-await-expression", true);
pref("devtools.debugger.features.async-captured-stacks", true);
pref("devtools.debugger.features.async-live-stacks", false);
pref("devtools.popup.disable_autohide", false);
pref("devtools.overflow.debugging.enabled", false);
pref("first-startup.timeout", 30000);
//@line 2464 "$SRCDIR/browser/app/profile/firefox.js"
  pref("default-browser-agent.enabled", true);
