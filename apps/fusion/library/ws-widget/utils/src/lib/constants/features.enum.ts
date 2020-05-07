/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
export enum EFeatures {
  // Playlists
  PLAYLIST = 'playlist',
  PLAYLIST_CREATE = 'playlistCreate',
  PLAYLIST_ADD_NEW_CONTENT = 'playlistAddNewContent',
  PLAYLIST_REMOVE_EXISTING_CONTENT = 'playlistRemoveExistingContent',
  PLAYLIST_DELETE = 'playlistDelete',
  PLAYLIST_SHARE = 'playlistShare',

  // Goals
  GOAL = 'goal',
  GOAL_CREATE_OWN = 'goalCreateOwn',
  GOAL_CREATE_SUGGESTED = 'goalCreateSuggested',
  GOAL_EDIT_EXISTING_GOAL = 'goalEditExistingGoal',
  GOAL_DELETE_EXISTING_GOAL = 'goalDeleteExistingGoal',
  GOAL_SHARE_GOAL_WITH_OTHERS = 'goalShareGoalWithOthers',
  GOAL_VIEW_ALL_GOALS_SECTION = 'goalViewAllGoalsSection',
  GOAL_VIEW_IN_PROGRESS_GOALS_SECTION = 'goalViewInProgressGoalsSection',
  GOAL_VIEW_COMPLETED_GOALS_SECTION = 'goalViewCompletedGoalsSection',

  // Navigator
  NAVIGATOR = 'navigator',
  NAVIGATOR_VIEW_NAVIGATOR_CAROUSEL = 'navigatorViewNavigatorCarousel',
  NAVIGATOR_VIEW_ROLES_PAGE = 'navigatorViewRolesPage',
  NAVIGATOR_SELECT_ANY_PILLAR = 'navigatorSelectAnyPillar',
  NAVIGATOR_PURSUE_ANY_OFFERING = 'navigatorPursueAnyOffering',
  NAVIGATOR_CREATE_GOAL_FROM_OFFERING = 'navigatorCreateGoalFromOffering',
  NAVIGATOR_VIEW_EXPLORE_PAGE = 'navigatorViewExplorePage',
  NAVIGATOR_SELECT_ANY_LEARNING_PATH = 'navigatorSelectAnyLearningPath',
  NAVIGATOR_CREATE_GOAL_FROM_LEARNING_PATH = 'navigatorCreateGoalFromLearningPath',
  NAVIGATOR_VIEW_SUGGESTIONS_PAGE = 'navigatorViewSuggestionsPage',
  NAVIGATOR_SELECT_SUGGESTED_TOPICS = 'navigatorSelectSuggestedTopics',
  NAVIGATOR_GET_SUGGESTIONS_OF_SELECTED_TOPICS = 'navigatorGetSuggestionsOfSelectedTopics',
  NAVIGATOR_CREATE_GOAL_FROM_SELECTED_LEARNING_PATHS = 'navigatorCreateGoalFromSelectedLearningPaths',
  NAVIGATOR_VIEW_INDUSTRIES_PAGE = 'navigatorViewIndustriesPage',
  NAVIGATOR_VIEW_CME_PAGE = 'navigatorViewCmePage',
  NAVIGATOR_SELECT_SUBDOMAIN = 'navigatorSelectSubdomain',
  NAVIGATOR_SELECT_PILLAR = 'navigatorSelectPillar',
  NAVIGATOR_SELECT_THEME = 'navigatorSelectTheme',
  NAVIGATOR_VIEW_CPG_PAGE = 'navigatorViewCpgPage',
  NAVIGATOR_VIEW_ENERGY_PAGE = 'navigatorViewEnergyPage',
  NAVIGATOR_VIEW_FINANCIAL_SERVICES_PAGE = 'navigatorViewFinancialServicesPage',
  NAVIGATOR_VIEW_HEALTH_CARE_PAGE = 'navigatorViewHealthCarePage',
  NAVIGATOR_VIEW_INSURANCE_PAGE = 'navigatorViewInsurancePage',
  NAVIGATOR_VIEW_LIFE_SCIENCES_PAGE = 'navigatorViewLifeSciencesPage',
  NAVIGATOR_VIEW_MFG_PAGE = 'navigatorViewMfgPage',
  NAVIGATOR_VIEW_RETAIL_PAGE = 'navigatorViewRetailPage',
  NAVIGATOR_VIEW_TRAVEL_AND_HOSPITALITY_PAGE = 'navigatorViewTravelAndHospitalityPage',
  NAVIGATOR_VIEW_UTILITIES_PAGE = 'navigatorViewUtilitiesPage',
  NAVIGATOR_VIEW_CME_ANALYTICS = 'navigatorViewCmeAnalytics',
  NAVIGATOR_VIEW_GPG_ANALYTICS = 'navigatorViewGpgAnalytics',
  NAVIGATOR_VIEW_ENERGY_ANALYTICS = 'navigatorViewEnergyAnalytics',
  NAVIGATOR_VIEW_FINANCIAL_SERVICES_ANALYTICS = 'navigatorViewFinancialServicesAnalytics',
  NAVIGATOR_VIEW_HEALTH_CARE_ANALYTICS = 'navigatorViewHealthCareAnalytics',
  NAVIGATOR_VIEW_INSURANCE_ANALYTICS = 'navigatorViewInsuranceAnalytics',
  NAVIGATOR_VIEW_LIFE_SCIENCES_ANALYTICS = 'navigatorViewLifeSciencesAnalytics',
  NAVIGATOR_VIEW_MFG_ANALYTICS = 'navigatorViewMfgAnalytics',
  NAVIGATOR_VIEW_RETAIL_ANALYTICS = 'navigatorViewRetailAnalytics',
  NAVIGATOR_VIEW_TRAVEL_AND_HOSPITALITY_ANALYTICS = 'navigatorViewTravelAndHospitalityAnalytics',
  NAVIGATOR_VIEW_UTILITIES_ANALYTICS = 'navigatorViewUtilitiesAnalytics',
  NAVIGATOR_VIEW_PILLARS_PAGE = 'navigatorViewPillarsPage',
  NAVIGATOR_VIEW_DIFFERENT_COURSES_IN_PILLAR = 'navigatorViewDifferentCoursesInPillar',
  NAVIGATOR_VIEW_FULL_STACK_PAGE = 'navigatorViewFullStackPage',
  NAVIGATOR_VIEW_DIFFERENT_FULL_STACK_PROGRAMS = 'navigatorViewDifferentFullStackPrograms',

  // Catalog
  CATALOG = 'catalog',
  CATALOG_VIEW_CATALOG_LIST = 'catalogViewCatalogList',
  CATALOG_SELECT_ITEM_FROM_CATALOG_LIST = 'catalogSelectItemFromCatalogList',
  CATALOG_VIEW_PROGRAMS_STRIP = 'catalogViewProgramsStrip',
  CATALOG_VIEW_COURSES_STRIP = 'catalogViewCoursesStrip',
  CATALOG_VIEW_LEARNING_MODULES_STRIP = 'catalogViewLearningModulesStrip',
  CATALOG_VIEW_RESOURCES_STRIP = 'catalogViewResourcesStrip',

  // Marketing Page
  MARKETING_PAGE = 'marketingPage',
  MARKETING_PAGE_VIEW_BRAND_ASSETS_PAGE = 'marketingPageViewBrandAssetsPage',
  MARKETING_PAGE_VIEW_CORPORATE_STRIP = 'marketingPageViewCorporateStrip',
  MARKETING_PAGE_VIEW_EMPLOYEE_STRIP = 'marketingPageViewEmployeeStrip',
  MARKETING_PAGE_VIEW_EXPERIMENTAL_SHOWCASE_PAGE = 'marketingPageViewExperimentalShowcasePage',
  MARKETING_PAGE_VIEW_HUBS_PAGE = 'marketingPageViewHubsPage',
  MARKETING_PAGE_VIEW_CONNECTICUT_STRIP = 'marketingPageViewConnecticutStrip',
  MARKETING_PAGE_VIEW_INDIANA_STRIP = 'marketingPageViewIndianaStrip',
  MARKETING_PAGE_VIEW_RHODE_ISLAND_STRIP = 'marketingPageViewRhodeIslandStrip',
  MARKETING_PAGE_VIEW_CLIENT_STORIES_PAGE = 'marketingPageViewClientStoriesPage',
  MARKETING_PAGE_VIEW_AGILE_SCALE_AT_DIGITAL_STRIP = 'marketingPageViewAgileScaleAtDigitalStrip',
  MARKETING_PAGE_VIEW_AI_POWERED_CORE_STRIP = 'marketingPageViewAiPoweredCoreStrip',
  MARKETING_PAGE_VIEW_ALWAYS_ON_LEAVING_STRIP = 'marketingPageViewAlwaysOnLeavingStrip',
  MARKETING_PAGE_VIEW_SERVICES_PAGE = 'marketingPageViewServicesPage',
  MARKETING_PAGE_VIEW_SERVICES_PENTAGON = 'marketingPageViewServicesPentagon',
  MARKETING_PAGE_VIEW_OFFERINGS_LIST = 'marketingPageViewOfferingsList',
  MARKETING_PAGE_SELECT_ANY_OFFERING = 'marketingPageSelectAnyOffering',
  MARKETING_PAGE_SELECT_ANY_PILLAR_FROM_PENTAGON = 'marketingPageSelectAnyPillarFromPentagon',
  MARKETING_PAGE_VIEW_INDUSTRIES_PAGE = 'marketingPageViewIndustriesPage',
  MARKETING_PAGE_VIEW_INDUSTRIES_LIST = 'marketingPageViewIndustriesList',
  MARKETING_PAGE_SELECT_ANY_INDUSTRY = 'marketingPageSelectAnyIndustry',
  MARKETING_PAGE_VIEW_PRODUCT_AND_SUBSIDIARIES_PAGE = 'marketingPageViewProductAndSubsidiariesPage',
  MARKETING_PAGE_VIEW_PRODUCT_AND_SUBSIDIARIES_LIST = 'marketingPageViewProductAndSubsidiariesList',
  MARKETING_PAGE_SELECT_ANY_PRODUCT_AND_SUBSIDIARY = 'marketingPageSelectAnyProductAndSubsidiary',

  // Interests
  INTERESTS = 'interests',
  INTERESTS_ADD_INTERESTS_FROM_SEARCH = 'interestsAddInterestsFromSearch',
  INTERESTS_ADD_INTERESTS_FROM_OUR_SUGGESTIONS_SECTION = 'interestsAddInterestsFromOurSuggestionsSection',
  INTERESTS_REMOVE_INTERESTS_FROM_MY_INTERESTS_SECTION = 'interestsRemoveInterestsFromMyInterestsSection',
  INTERESTS_VIEW_INTERESTS_SEARCH_FIELD = 'interestsViewInterestsSearchField',
  INTERESTS_VIEW_MY_INTERESTS_SECTION = 'interestsViewMyInterestsSection',
  INTERESTS_VIEW_OWN_SUGGESTIONS_SECTION = 'interestsViewOwnSuggestionsSection',
  INTERESTS_VIEW_MORE_SUGGESTIONS_BUTTON = 'interestsViewMoreSuggestionsButton',

  // Feedback
  FEEDBACK = 'feedback',
  FEEDBACK_VIEW_PLATFORM_FEEDBACK_SECTION = 'feedbackViewPlatformFeedbackSection',
  FEEDBACK_STAR_RATING_FOR_PLATFORM = 'feedbackStarRatingForPlatform',
  FEEDBACK_WRITE_PLATFORM_FEEDBACK = 'feedbackWritePlatformFeedback',
  FEEDBACK_RESET_PLATFORM_FEEDBACK = 'feedbackResetPlatformFeedback',
  FEEDBACK_SUBMIT_PLATFORM_FEEDBACK = 'feedbackSubmitPlatformFeedback',
  FEEDBACK_VIEW_CONTENT_FEEDBACK_SECTION = 'feedbackViewContentFeedbackSection',
  FEEDBACK_STAR_RATING_FOR_CONTENT = 'feedbackStarRatingForContent',
  FEEDBACK_WRITE_CONTENT_FEEDBACK = 'feedbackWriteContentFeedback',
  FEEDBACK_RESET_CONTENT_FEEDBACK = 'feedbackResetContentFeedback',
  FEEDBACK_SUBMIT_CONTENT_FEEDBACK = 'feedbackSubmitContentFeedback',
  FEEDBACK_VIEW_ISSUE_REPORTING_SECTION = 'feedbackViewIssueReportingSection',
  FEEDBACK_WRITING_ISSUE = 'feedbackWritingIssue',
  FEEDBACK_RESET_ISSUE = 'feedbackResetIssue',
  FEEDBACK_SUBMIT_ISSUE = 'feedbackSubmitIssue',

  // Contact Us
  CONTACT_US = 'contactUs',
  CONTACT_US_VIEW_RAISE_AHD_SECTION = 'contactUsViewRaiseAhdSection',
  CONTACT_US_VIEW_MAIL_US_SECTION = 'contactUsViewMailUsSection',
  CONTACT_US_VIEW_TALK_TO_US_SECTION = 'contactUsViewTalkToUsSection',
  CONTACT_US_RAISE_AHD = 'contactUsRaiseAhd',
  CONTACT_US_WRITE_EMAIL = 'contactUsWriteEmail',
  CONTACT_US_DIAL_FROM_PHONE = 'contactUsDialFromPhone',

  // FAQs
  FAQ = 'faq',
  FAQ_VIEW_LOGIN_FAQS = 'faqViewLoginFaqs',
  FAQ_VIEW_ODC_ACCESS_FAQS = 'faqViewOdcAccessFaqs',
  FAQ_VIEW_COMPATIBILITY_FAQS = 'faqViewCompatibilityFaqs',
  FAQ_VIEW_INSTALLATION_FAQS = 'faqViewInstallationFaqs',
  FAQ_VIEW_PROGRESS_COMPLETION_FAQS = 'faqViewProgressCompletionFaqs',
  FAQ_VIEW_VIDEO_FAQS = 'faqViewVideoFaqs',
  FAQ_VIEW_AUTHORING_FAQS = 'faqViewAuthoringFaqs',

  // Mobile Apps
  MOBILE_APPS = 'mobileApps',
  MOBILE_APPS_VIEW_ANDROID_APP_SECTION = 'mobileAppsViewAndroidAppSection',
  MOBILE_APPS_DOWNLOAD_APP_FROM_PLAY_STORE = 'mobileAppsDownloadAppFromPlayStore',
  MOBILE_APPS_DOWNLOAD_APP_FROM_OUR_SERVER = 'mobileAppsDownloadAppFromOurServer',
  MOBILE_APPS_VIEW_QR_CODE_FOR_ANDROID_APP = 'mobileAppsViewQrCodeForAndroidApp',
  MOBILE_APPS_VIEW_IOS_APP_SECTION = 'mobileAppsViewIosAppSection',
  MOBILE_APPS_DOWNLOAD_IOS_APP = 'mobileAppsDownloadIosApp',
  MOBILE_APPS_VIEW_QR_CODE_FOR_IOS_APP = 'mobileAppsViewQrCodeForIosApp',

  // About Us
  ABOUT_US = 'aboutUs',
  ABOUT_US_VIEW_ABOUT_US_PAGE_SECTIONS = 'aboutUsViewAboutUsPageSections',

  // Settings
  SETTINGS = 'settings',
  SETTINGS_VIEW_LANGUAGE_SECTION = 'settingsViewLanguageSection',
  SETTINGS_VIEW_FONT_SIZE_SECTION = 'settingsViewFontSizeSection',
  SETTINGS_VIEW_THEME_SECTION = 'settingsViewThemeSection',
  SETTINGS_CHANGE_LANGUAGE = 'settingsChangeLanguage',
  SETTINGS_CHANGE_FONT_SIZE = 'settingsChangeFontSize',
  SETTINGS_CHANGE_THEME = 'settingsChangeTheme',

  // Login Page
  LOGIN_PAGE = 'loginPage',
  LOGIN_PAGE_LOGIN_FOR_INFOSCIONS = 'loginPageLoginForInfoscions',
  LOGIN_PAGE_LOGIN_FOR_SUBSIDIARIES = 'loginPageLoginForSubsidiaries',
  LOGIN_PAGE_LOGIN_FOR_NEW_RECRUITS = 'loginPageLoginForNewRecruits',
  LOGIN_PAGE_ABOUT_US = 'loginPageAboutUs',
  LOGIN_PAGE_TERMS_OF_USE = 'loginPageTermsOfUse',
  LOGIN_PAGE_FAQS = 'loginPageFaqs',
  LOGIN_PAGE_CONTACT_US = 'loginPageContactUs',

  // TOC Page
  TOC_PAGE = 'tocPage',
  TOC_PAGE_VIEW_OVERVIEW_SECTION = 'tocPageViewOverviewSection',
  TOC_PAGE_VIEW_INSTRUCTOR_LED_SECTION = 'tocPageViewInstructorLedSection',
  TOC_PAGE_VIEW_COHORTS_SECTION = 'tocPageViewCohortsSection',
  TOC_PAGE_VIEW_DISCUSSION_FORUM_SECTION = 'tocPageViewDiscussionForumSection',
  TOC_PAGE_VIEW_COURSE_ANALYTICS_SECTION = 'tocPageViewCourseAnalyticsSection',
  TOC_PAGE_VIEW_WHATS_NEXT_SECTION = 'tocPageViewWhatsNextSection',
  TOC_PAGE_VIEW_PART_OF_SECTION = 'tocPageViewPartOfSection',
  TOC_PAGE_REGISTER_FOR_UPCOMING_TRAINING = 'tocPageRegisterForUpcomingTraining',
  TOC_PAGE_UNREGISTER_FROM_REGISTERED_TRAINING = 'tocPageUnregisterFromRegisteredTraining',
  TOC_PAGE_SHARE_INSTRUCTOR_LED_TRAININGS = 'tocPageShareInstructorLedTrainings',
  TOC_PAGE_VIEW_EDUCATORS_OF_TRAININGS = 'tocPageViewEducatorsOfTrainings',
  TOC_PAGE_NOMINATE_OTHERS_FOR_TRAININGS = 'tocPageNominateOthersForTrainings', // Applicable only for JL6 and above.
  TOC_PAGE_REQUEST_TRAINING = 'tocPageRequestTraining', // Applicable only for JL6 and above.
  TOC_PAGE_VIEW_ACTIVE_LEARNERS_SECTION = 'tocPageViewActiveLearnersSection',
  TOC_PAGE_VIEW_ALL_ACTIVE_LEARNERS = 'tocPageViewAllActiveLearners',
  TOC_PAGE_VIEW_CURRENTLY_ACTIVE_LEARNERS = 'tocPageViewCurrentlyActiveLearners',
  TOC_PAGE_VIEW_LEARNERS_SHARING_THE_SAME_GOALS = 'tocPageViewLearnersSharingTheSameGoals',
  TOC_PAGE_VIEW_EXPERTS_AND_TUTORS_SECTION = 'tocPageViewExpertsAndTutorsSection',
  TOC_PAGE_VIEW_ALL_EXPERTS_AND_TUTORS = 'tocPageViewAllExpertsAndTutors',
  TOC_PAGE_VIEW_AUTHORS_OF_COURSE = 'tocPageViewAuthorsOfCourse',
  TOC_PAGE_VIEW_EDUCATORS_OF_COURSE = 'tocPageViewEducatorsOfCourse',
  TOC_PAGE_VIEW_TOPPERS_OF_COURSE = 'tocPageViewToppersOfCourse',
  TOC_PAGE_MAIL_THE_PERSON = 'tocPageMailThePerson',
  TOC_PAGE_CALL_THE_PERSON = 'tocPageCallThePerson',
  TOC_PAGE_POST_VIEWS_IN_DISCUSSION_FORUM = 'tocPagePostViewsInDiscussionForum',
  TOC_PAGE_LEARN_THE_COURSE = 'tocPageLearnTheCourse',
  TOC_PAGE_LIKE_THE_COURSE = 'tocPageLikeTheCourse',
  TOC_PAGE_SHARE_THE_COURSE = 'tocPageShareTheCourse',
  TOC_PAGE_ADD_COURSE_TO_GOALS = 'tocPageAddCourseToGoals',
  TOC_PAGE_ADD_COURSE_TO_PLAYLIST = 'tocPageAddCourseToPlaylist',
  TOC_PAGE_ADD_COURSE_TO_WATCHLIST = 'tocPageAddCourseToWatchlist',
  TOC_PAGE_GIVE_COURSE_FEEDBACK = 'tocPageGiveCourseFeedback',
  TOC_PAGE_RESUME_THE_COURSE = 'tocPageResumeTheCourse',
  TOC_PAGE_START_OVER_THE_COURSE = 'tocPageStartOverTheCourse',
  TOC_PAGE_GO_TO_COURSE_QUIZ = 'tocPageGoToCourseQuiz',
  TOC_PAGE_GO_TO_COURSE_HANDS_ON = 'tocPageGoToCourseHandsOn',

  // Navbar
  NAVBAR = 'navbar',
  NAVBAR_VIEW_LOGO = 'navbarViewLogo',
  NAVBAR_CATALOG_ICON = 'navbarCatalogIcon',
  NAVBAR_NAVIGATOR_ICON = 'navbarNavigatorIcon',
  NAVBAR_NOTIFICATION_ICON = 'navbarNotificationIcon',
  NAVBAR_SETTINGS_ICON = 'navbarSettingsIcon',
  NAVBAR_SEARCH_ICON = 'navbarSearchIcon',
  NAVBAR_APPS_ICON = 'navbarAppsIcon',

  // Home Page
  HOME_PAGE = 'homePage',
  HOME_PAGE_VIEW_CAROUSEL = 'homePageViewCarousel',
  HOME_PAGE_VIEW_CONTINUE_LEARNING_STRIP = 'homePageViewContinueLearningStrip',
  HOME_PAGE_VIEW_FEATURED_APPS_STRIP = 'homePageViewFeaturedAppsStrip',
  HOME_PAGE_VIEW_RECENT_ADDITION_TO_PLAYLISTS_STRIP = 'homePageViewRecentAdditionToPlaylistsStrip',
  HOME_PAGE_VIEW_BASED_ON_YOUR_INTERESTS_STRIP = 'homePageViewBasedOnYourInterestsStrip',
  HOME_PAGE_VIEW_BASED_ON_WHAT_YOU_VIEWED_STRIP = 'homePageViewBasedOnWhatYouViewedStrip',
  HOME_PAGE_VIEW_LATEST_STRIP = 'homePageViewLatestStrip',
  HOME_PAGE_VIEW_TRENDING_STRIP = 'homePageViewTrendingStrip',
  HOME_PAGE_SHOW_COMPLETED_FILTER = 'homePageShowCompletedFilter',
  HOME_PAGE_SHOW_RESOURCES_FILTER = 'homePageShowResourcesFilter',

  // TNC Page
  TNC_PAGE = 'tncPage',
  TNC_PAGE_VIEW_CONTEST_RULES_SECTION = 'tncPageViewContestRulesSection',
  TNC_PAGE_VIEW_DATA_PRIVACY_SECTION = 'tncPageViewDataPrivacySection',
  TNC_PAGE_ACCEPT_TERMS_AND_CONDITIONS = 'tncPageAcceptTermsAndConditions',

  // Blogs
  BLOGS = 'blogs',
  BLOG_VIEW_OTHERS_BLOGS = 'blogViewOthersBlogs',
  BLOGS_LIKE_OTHER_BLOGS = 'blogsLikeOtherBlogs',
  BLOGS_VIEW_MY_BLOGS = 'blogsViewMyBlogs',
  BLOGS_WRITE_NEW_BLOG = 'blogsWriteNewBlog',
  BLOGS_SAVE_BLOG_AS_DRAFT = 'blogsSaveBlogAsDraft',
  BLOGS_EDIT_MY_SAVED_BLOG = 'blogsEditMySavedBlog',
  BLOGS_PUBLISH_MY_BLOG = 'blogsPublishMyBlog',
  BLOGS_UPVOTE_FOR_BLOG = 'blogsUpvoteForBlog',
  BLOGS_DOWNVOTE_FOR_BLOG = 'blogsDownvoteForBlog',
  BLOGS_WRITE_RESPONSE_FOR_BLOG = 'blogsWriteResponseForBlog',
  BLOGS_DELETE_MY_BLOG = 'blogsDeleteMyBlog',
  BLOGS_EDIT_MY_RESPONSE = 'blogsEditMyResponse',
  BLOGS_DELETE_MY_RESPONSE = 'blogsDeleteMyResponse',
  BLOGS_VIEW_DRAFTS_SECTION = 'blogsViewDraftsSection',
  BLOGS_VIEW_PUBLISHED_SECTION = 'blogsViewPublishedSection',

  // Question and Answer
  QUESTION_AND_ANSWER = 'questionAndAnswer',
  QUESTION_AND_ANSWER_VIEW_ALL_QUESTIONS_AND_ANSWERS = 'questionAndAnswerViewAllQuestionsAndAnswers',
  QUESTION_AND_ANSWER_VIEW_ONLY_UNANSWERED_QUESTIONS = 'questionAndAnswerViewOnlyUnansweredQuestions',
  QUESTION_AND_ANSWER_VIEW_MY_TIMELINE = 'questionAndAnswerViewMyTimeline',
  QUESTION_AND_ANSWER_ASK_NEW_QUESTION = 'questionAndAnswerAskNewQuestion',
  QUESTION_AND_ANSWER_VIEW_SPECIFIC_QUESTION = 'questionAndAnswerViewSpecificQuestion',
  QUESTION_AND_ANSWER_UPVOTE_FOR_ANSWER = 'questionAndAnswerUpvoteForAnswer',
  QUESTION_AND_ANSWER_DOWNVOTE_FOR_ANSWER = 'questionAndAnswerDownvoteForAnswer',
  QUESTION_AND_ANSWER_LIKE_AN_ANSWER = 'questionAndAnswerLikeAnAnswer',
  QUESTION_AND_ANSWER_ADD_COMMENT_FOR_ANY_ANSWER = 'questionAndAnswerAddCommentForAnyAnswer',
  QUESTION_AND_ANSWER_ADD_ANSWER_FOR_ANY_QUESTION = 'questionAndAnswerAddAnswerForAnyQuestion',
  QUESTION_AND_ANSWER_SAVE_QUESTION_AS_DRAFT = 'questionAndAnswerSaveQuestionAsDraft',
  QUESTION_AND_ANSWER_PUBLISH_SAVED_QUESTION = 'questionAndAnswerPublishedSavedQuestion',
  QUESTION_AND_ANSWER_VIEW_DRAFTS_SECTION = 'questionAndAnswerViewDraftsSection',
  QUESTION_AND_ANSWER_VIEW_PUBLISHED_SECTION = 'questionAndAnswerViewPublishedSection',

  // Badges
  BADGES = 'badges',
  BADGES_VIEW_RECENTLY_EARNED_BADGE = 'badgesViewRecentlyEarnedBadge',
  BADGES_VIEW_ALL_EARNED_BADGES = 'badgesViewAllEarnedBadges',
  BADGES_VIEW_NEXT_TARGETTED_BADGES = 'badgesViewNextTargettedBadges',

  // Hands on Dashboard
  HANDS_ON_DASHBOARD = 'handsOnDashboard',
  HANDS_ON_DASHBOARD_VIEW_MY_DASHBOARD = 'handsOnDashboardViewMyDashboard',
  HANDS_ON_DASHBOARD_VIEW_SHARED_PROFILE_SECTION = 'handsOnDashboardViewSharedProfileSection',

  // Learning History
  LEARNING_HISTORY = 'learningHistory',
  LEARNING_HISTORY_VIEW_PROGRAMS_SECTION = 'learningHistoryViewProgramsSection',
  LEARNING_HISTORY_VIEW_COURSES_SECTION = 'learningHistoryViewCoursesSection',
  LEARNING_HISTORY_VIEW_LEARNING_MODULES_SECTION = 'learningHistoryViewLearningModulesSection',
  LEARNING_HISTORY_VIEW_RESOURCES_SECTION = 'learningHistoryViewResourcesSection',
  LEARNING_HISTORY_VIEW_CERTIFICATIONS_SECTION = 'learningHistoryViewCertificationsSection',
  LEARNING_HISTORY_APPLY_COMPLETED_FILTER = 'learningHistoryApplyCompletedFilter',
  LEARNING_HISTORY_VIEW_MORE_BUTTON = 'learningHistoryViewMoreButton',

  // Learning Time
  LEARNING_TIME = 'learningTime',
  LEARNING_TIME_VIEW_LEARNING_TIME_GRAPH = 'learningTimeViewLearningTimeGraph',
  LEARNING_TIME_APPLY_BAR_GRAPH_FILTER = 'learningTimeApplyBarGraphFilter',
  LEARNING_TIME_APPLY_DATE_RANGE_FILTER = 'learningTimeApplyDateRangeFilter',
  LEARNING_TIME_APPLY_TIME_SPENT_FILTER = 'learningTimeApplyTimeSpentFilter',
  LEARNING_TIME_APPLY_APP_AVERAGE_FILTER = 'learningTimeApplyAppAverageFilter',
  LEARNING_TIME_APPLY_USER_AVERAGE_OVER_PERIOD_FILTER = 'learningTimeApplyUserAverageOverPeriodFilter',

  // Notification
  NOTIFICATION = 'notification',
  NOTIFICATION_VIEW_RECENT_BADGE_EARNED = 'notificationViewRecentBadgeEarned',
  NOTIFICATION_VIEW_SHARED_PLAYLIST = 'notificationViewSharedPlaylist',
  NOTIFICATION_VIEW_SHARED_GOALS = 'notificationViewSharedGoals',

  // Profile
  PROFILE = 'profile',
  PROFILE_VIEW_BASIC_INFORMATION = 'profileViewBasicInformation',
  PROFILE_VIEW_RECENTLY_LEARNED_COURSES = 'profileViewRecentlyLearnedCourses',
  PROFILE_VIEW_LIKED_ITEMS = 'profileViewLikedItems',
  PROFILE_VIEW_BADGES_EARNED = 'profileViewBadgesEarned',

  // Behavioural Skills
  BEHAVIORAL_SKILLS = 'behavioralSkills',
  BEHAVIORAL_SKILLS_VIEW_MODEL_CLIENT_INTERACTIONS = 'behavioralSkillsViewModalClientInteractions',
  BEHAVIORAL_SKILLS_VIEW_CLIENT_INTERACTION_TESTS = 'behavioralSkillsViewClientInteractionTests',

  // Certifications
  CERTIFICATIONS = 'certifications',
  CERTIFICATIONS_VIEW_MY_APPROVALS_SECTION = 'certificationsViewMyApprovalsSection',
  CERTIFICATIONS_VIEW_MY_REQUESTS_SECTION = 'certificationsViewMyRequestsSection',
  CERTIFICATIONS_VIEW_MY_CERTIFICATIONS_SECTION = 'certificationsViewMyCertificationsSection',
  CERTIFICATIONS_APPLY_COMPLETION_STATUS_FILTER = 'certificationsApplyCompletionStatusFilter',

  // Code Crack
  CODE_CRACK = 'codeCrack',
  CODE_CRACK_VIEW_PUZZLE_MANIA = 'codeCrackViewPuzzleMania',
  CODE_CRACK_VIEW_CODE_CRACK = 'codeCrackViewCodeCrack',
  CODE_CRACK_VIEW_TECHNOLOGY_PLAYGROUND = 'codeCrackViewTechnologyPlayground',
  CODE_CRACK_WATCH_PROGRAMMING_CHALLENGES_VIDEO = 'codeCrackWatchProgrammingChallengesVideo',
  CODE_CRACK_VIEW_ACCELERATE = 'codeCrackViewAccelerate',
  CODE_CRACK_START_CODE_CRACK_TEST = 'codeCrackStartCodeCrackTest',
  CODE_CRACK_START_PUZZLE_MANIA = 'codeCrackStartPuzzleMania',
  CODE_CRACK_START_TECHNOLOGY_PLAYGROUND = 'codeCrackStartTechnologyPlayground',

  // Instructor Led Training
  INSTRUCTOR_LED_TRAINING = 'instructorLedTraining',
  INSTRUCTOR_LED_TRAINING_VIEW_TRAINING_SCHEDULE_SECTION = 'instructorLedTrainingViewTrainingScheduleSection',
  INSTRUCTOR_LED_TRAINING_VIEW_FEEDBACK_SECTION = 'instructorLedTrainingViewFeedbackSection',
  INSTRUCTOR_LED_TRAINING_VIEW_TRAININGS_PLANNED_BY_YOUR_TEAM_SECTION = 'instructorLedTrainingViewTrainingsPlannedByYourTeamSection',
  INSTRUCTOR_LED_TRAINING_SEARCH_TRAINING = 'instructorLedTrainingSearchTraining',
  INSTRUCTOR_LED_TRAINING_REGISTER_FOR_TRAINING = 'instructorLedTrainingRegisterForTraining',
  INSTRUCTOR_LED_TRAINING_GIVE_TRAINING_FEEDBACK = 'instructorLedTrainingGiveTrainingFeedback',

  // LeaderBoard
  LEADERBOARD = 'leaderboard',
  LEADERBOARD_VIEW_WEEKLY_SECTION = 'leaderboardViewWeeklySection',
  LEADERBOARD_VIEW_MONTHLY_SECTION = 'leaderboardViewMonthlySection',
  LEADERBOARD_VIEW_HALL_OF_FAME_SECTION = 'leaderboardViewHallOfSection',
  LEADERBOARD_APPLY_LEARNER_COLLABORATOR_FILTER = 'leaderboardApplyLearnerCollaboratorFilter',
  LEADERBOARD_BACK_DATE_BUTTON = 'leaderboardBackDatebutton',
  LEADERBOARD_FORWARD_DATE_BUTTON = 'leaderboardForwardDateButton',

  // Playground
  PLAYGROUND = 'playground',
  PLAYGROUND_VIEW_TECHNOLOGY_PLAYGROUNDS_STRIP = 'playgroundViewTechnologyPlaygorundsStrip',
  PLAYGROUND_VIEW_ASSESSMENTS_PLAYGROUNDS_STRIP = 'playgroundViewAssessmentsPlaygroundsStrip',

  // Puzzle Mania
  PUZZLE_MANIA = 'puzzleMania',
  PUZZLE_MANIA_VIEW_PUZZLE_MANIA = 'puzzleManiaViewPuzzleMania',
  PUZZLE_MANIA_VIEW_CODE_CRACK = 'puzzleManiaViewCodeCrack',
  PUZZLE_MANIA_VIEW_TECHNOLOGY_PLAYGROUND = 'puzzleManiaViewTechnologyPlayground',
  PUZZLE_MANIA_WATCH_PROGRAMMING_CHALLENGES_VIDEO = 'puzzleManiaWatchProgrammingChallengesVideo',
  PUZZLE_MANIA_VIEW_ACCELERATE = 'puzzleManiaViewAccelerate',
  PUZZLE_MANIA_START_CODE_CRACK_TEST = 'puzzleManiaStartCodeCrackTest',
  PUZZLE_MANIA_START_PUZZLE_MANIA = 'puzzleManiaStartPuzzleMania',
  PUZZLE_MANIA_START_TECHNOLOGY_PLAYGROUND = 'puzzleManiaStartTechnologyPlayground',

  // Full Stack Sales Leader
  FULL_STACK_SALES_LEADER = 'fullStackSalesLeader',
  FULL_STACK_SALES_LEADER_WATCH_LEADER_VIDEO = 'fullStackSalesLeaderWatchLeaderVideo',
  FULL_STACK_SALES_LEADER_EMBARK_ON_THIS_LEARNING_JOURNEY_BUTTON = 'fullStackSalesLeaderEmbarkOnThisLearningJourneyButton',
  FULL_STACK_SALES_LEADER_QUICK_TOUR_VIDEO_LINK = 'fullStackSalesLeaderQuickTourVideoLink',
  FULL_STACK_SALES_LEADER_FEEDBACK_LINK = 'fullStackSalesLeaderFeedbackLink',
  FULL_STACK_SALES_LEADER_DROP_NOTE_LINK = 'fullStackSalesLeaderDropNoteLink',

  // Onboarding
  ONBOARDING = 'onboarding',
  ONBOARDING_VIEW_DC_ONBOARDING_PROGRAMS_STRIP = 'onboardingViewDcOnboardingProgramsStrip',
  ONBOARDING_VIEW_ORGANISATIONAL_ONBOARDING_PROGRAMS_STRIP = 'onboardingViewOrganisationalOnboardingProgramsStrip',
  ONBOARDING_VIEW_ROLE_BASED_ONBOARDING_PROGRAMS_STRIP = 'onboardingViewRoleBasedOnboardingProgramsStrip',
  ONBOARDING_VIEW_UNIT_AND_PROJECT_ONBOARDING_PROGRAMS_STRIP = 'onboardingViewUnitAndProjectOnboardingProgramsStrip',

  // Search
  SEARCH = 'search',
  SEARCH_SEARCHING_CONTENT = 'searchSearchingContent',

  // Knowledge Hub
  KNOWLEDGE_HUB = 'knowledgeHub',
  KNOWLEDGE_HUB_SUBMIT_KNOWLEDGE_ARTIFACTS = 'knowledgeHubSubmitKnowledgeArtifacts',
  KNOWLEDGE_HUB_VIEW_TOP_PROJECTS_SECTION = 'knowledgeHubViewTopProjectsSection',
  KNOWLEDGE_HUB_VIEW_INTERESTING_READS_SECTION = 'knowledgeHubViewInterestingReadsSection',
  KNOWLEDGE_HUB_VIEW_MARKETING_SECTION = 'knowledgeHubViewMarketingSection',
  KNOWLEDGE_HUB_VIEW_KSHOP_CLASSIC_SECTION = 'knowledgeHubViewKshopClassicSection',
  KNOWLEDGE_HUB_VIEW_TRENDING_TOOLS_SECTION = 'knowledgeHubViewTrendingToolsSection',
  KNOWLEDGE_HUB_VIEW_DOCUMENTS_STRIP = 'knowledgeHubViewDocumentsStrip',
  KNOWLEDGE_HUB_VIEW_TOOLS_STRIP = 'knowledgeHubViewProjectReferencesStrip',
  KNOWLEDGE_HUB_VIEW_MARKETING_STRIP = 'knowledgeHubViewMarketingStrip',

  // Concept Graph
  CONCEPT_GRAPH = 'conceptGraph',
  CONCEPT_GRAPH_SEARCH_TOPICS = 'conceptGraphSearchTopics',
  CONCEPT_GRAPH_VIEW_CONCEPT_GRAPH_FOR_TOPIC = 'conceptGraphViewConceptGraphForTopic',

  // Channels
  CHANNELS = 'channels',
  CHANNELS_VIEW_LEADERSHIP_SECTION = 'channelsViewLeadershipSection',
  CHANNELS_VIEW_RAVI_KUMAR_PAGE = 'channelsViewRaviKumarPage',
  CHANNELS_VIEW_MOHIT_JOSHI_PAGE = 'channelsViewMohitJoshiPage',
  CHANNELS_FOLLOW_RAVI_KUMAR = 'channelsFollowRaviKumar',
  CHANNELS_MAIL_TO_RAVI_KUMAR = 'channelsMailToRaviKumar',
  CHANNELS_VIEW_ABOUT_RAVI_KUMAR_SECTION = 'channelsViewAboutRaviKumarSection',
  CHANNELS_VIEW_RAVI_KUMAR_TWEETS_SECTION = 'channelsViewRaviKumarTweetsSection',
  CHANNELS_VIEW_RAVI_KUMAR_ARTICLES_SECTION = 'channelsViewRaviKumarArticlesSection',
  CHANNELS_VIEW_RAVI_KUMAR_TRAILBLAZERS_SECTION = 'channelsViewRaviKumarTrailblazersSection',
  CHANNELS_VIEW_RAVI_KUMAR_COMMUNICATIONS_SECTION = 'channelsViewRaviKumarCommunicationsSection',
  CHANNELS_VIEW_RAVI_KUMAR_DISCUSSION_SECTION = 'channelsViewraviKumarDiscussionSection',
  CHANNELS_LIKE_TWEET_RAVI_KUMAR = 'channelsLikeTweetRaviKumar',
  CHANNELS_SHARE_TWEET_RAVI_KUMAR = 'channelsShareTweetRaviKumar',
  CHANNELS_POST_YOUR_THOUGHTS_IN_DISCUSSION_RAVI_KUMAR = 'channelsPostYourThoughtsInDiscussionRaviKumar',
  CHANNELS_FOLLOW_MOHIT_JOSHI = 'channelsFollowMohitJoshi',
  CHANNELS_MAIL_TO_MOHIT_JOSHI = 'channelsMailToMohitJoshi',
  CHANNELS_VIEW_ABOUT_MOHIT_JOSHI_SECTION = 'channelsViewAboutMohitJoshiSection',
  CHANNELS_VIEW_MOHIT_JOSHI_TWEETS_SECTION = 'channelsViewMohitJoshiTweetsSection',
  CHANNELS_VIEW_MOHIT_JOSHI_ARTICLES_SECTION = 'channelsViewMohitJoshiArticlesSection',
  CHANNELS_VIEW_MOHIT_JOSHI_TRAILBLAZERS_SECTION = 'channelsViewMohitJoshiTrailblazersSection',
  CHANNELS_VIEW_MOHIT_JOSHI_COMMUNICATIONS_SECTION = 'channelsViewMohitJoshiCommunicationsSection',
  CHANNELS_VIEW_MOHIT_JOSHI_DISCUSSION_SECTION = 'channelsViewMohitJoshiDiscussionSection',
  CHANNELS_LIKE_TWEET_MOHIT_JOSHI = 'channelsLikeTweetMohitJoshi',
  CHANNELS_SHARE_TWEET_MOHIT_JOSHI = 'channelsShareTweetMohitJoshi',
  CHANNELS_POST_YOUR_THOUGHTS_IN_DISCUSSION_MOHIT_JOSHI = 'channelsPostYourThoughtsInDiscussionMohitJoshi',
  CHANNELS_VIEW_CORPORATE_SECTION = 'channelsViewCorporateSection',
  CHANNELS_VIEW_EXPERIENCE_WOW_PAGE = 'channelsViewExperienceWowPage',
  CHANNELS_VIEW_INFOSYS_KNOWLEDGE_INSTITUTE_PAGE = 'channelsViewInfosysKnowledgeInstitutePage',
  CHANNELS_VIEW_CMT_LEARNING_HUB_PAGE = 'channelsViewCmtLearningHubPage',
  CHANNELS_VIEW_FULL_STACK_SALES_LEADERS_PAGE = 'channelsViewFullStackSalesLeaderPage',

  // Experience Wow Page
  EXPERIENCE_WOW_PAGE = 'experienceWowPage',
  EXPERIENCE_WOW_PAGE_VIEW_PAGE_SECTIONS = 'experienceWowPageViewPageSections',
  EXPERIENCE_WOW_PAGE_CHECK_LEX_STATISTICS = 'experienceWowPageCheckLexStatistics',
  EXPERIENCE_WOW_PAGE_CHECK_INFY_ME_STATISTICS = 'experienceWowPageCheckInfyMeStatistics',
  EXPERIENCE_WOW_PAGE_PROVIDE_SUGGESTIONS = 'experienceWowPageProvideSuggestions',
  EXPERIENCE_WOW_PAGE_SEND_MAIL_FOR_BECOMING_COCREATOR = 'experienceWowPageSendMailForBecomingCocreator',

  // Infy Radio
  INFY_RADIO = 'infyRadio',
  INFY_RADIO_VIEW_PODCASTS_STRIP = 'infyRadioViewPodcastsStrip',

  // Infy TV
  INFY_TV = 'infyTv',
  INFY_TV_VIEW_JUST_FOR_YOU_SECTION = 'infyTvViewJustForYouSection',
  INFY_TV_VIEW_MUST_VIEW_STRIP = 'infyTvViewMustViewStrip',
  INFY_TV_VIEW_LATEST_STRIP = 'infyTvViewLatestStrip',
  INFY_TV_VIEW_CHANNELS_SECTION = 'infyTvViewChannelsSection',
  INFY_TV_VIEW_CHANNELS_STRIP = 'infyTvViewChannelsStrip',
  INFY_TV_VIEW_BROADCAST_SECTION = 'infyTvViewBroadcastSection',
  INFY_TV_VIEW_PREVIOUS_EVENTS_LIST = 'infyTvViewPreviousEventsList',
  INFY_TV_VIEW_LIVE_EVENTS_LIST = 'infyTvViewLiveEventsList',
  INFY_TV_VIEW_UPCOMING_EVENTS_LIST = 'infyTvViewUpcomingEventsList',

  // Leadership Messages
  LEADERSHIP_MESSAGES = 'leadershipMessages',
  LEADERSHIP_MESSAGES_VIEW_LEADERSHIP_VIDEO = 'leadershipMessagesViewLeadershipVideo',

  // Living Labs
  LIVING_LABS = 'livingLabs',
  LIVING_LABS_VIEW_LIVING_LABS_STRIP = 'livingLabsViewLivingLabsStrip',

  // Americas Confluence 2018
  AMERICAS_CONFLUENECE = 'americasConfluence',
  AMERICAS_CONFLUENECE_VIEW_CONFLUENCE_VIDEOS_STRIPS = 'americasConfluenceViewConfluenceVideosStrips',

  // APAC Confluence 2019
  APAC_CONFLUENECE = 'apacConfluence',
  APAC_CONFLUENECE_VIEW_CONFLUENCE_VIDEOS_STRIPS = 'apacConfluenceViewConfluenceVideosStrips',

  // EMEA Confluence 2018
  EMEA_CONFLUENECE = 'emeaConfluence',
  EMEA_CONFLUENECE_VIEW_CONFLUENCE_VIDEOS_STRIPS = 'emeaConfluenceViewConfluenceVideosStrips',

  // Connect 2019
  CONNECT = 'connect',
  CONNECT_VIEW_CONTENT_STRIP = 'connectViewContentStrip',

  // Live Events
  LIVE_EVENTS = 'liveEvents',
  LIVE_EVENTS_WATCH_LIVE = 'liveEventsWatchLive',
  LIVE_EVENTS_WATCH_CLASSROOM_BROADCAST = 'liveEventsWatchClassroomBroadcast',
  LIVE_EVENTS_WATCH_THREE_SIXTY_VIDEO = 'liveEventsWatchThreeSixtyVideo',
  LIVE_EVENTS_WATCH_FAMILY_MATTERS_VIDEO = 'liveEventsWatchFamilyMattersVideo',
  LIVE_EVENTS_WATCH_CONFLUENCE_EVENTS = 'liveEventsWatchConfluenceEvents',

  // Digital Assistant Tour
  DIGITAL_ASSISTANT_TOUR = 'digitalAssistantTour',
  DIGITAL_ASSISTANT_TOUR_WATCH_TOUR_VIDEO = 'digitalAssistantTourWatchTourVideo',

  // Quick Tour
  QUICK_TOUR = 'quickTour',
  QUICK_TOUR_WATCH_TOUR_VIDEO = 'quickTourWatchTourVideo',

  // Logout
  LOGOUT = 'logout',
  LOGOUT_LOGS_OUT_FROM_APPLICATION = 'logoutLogsOutFromApplication',

  // My Analytics
  MY_ANALYTICS = 'myAnalytics',
  MY_ANALYTICS_APPLY_QUARTER_FILTERS = 'myAnalyticsApplyQuarterFilters',
  MY_ANALYTICS_VIEW_MY_LEARNING_SECTION = 'myAnalyticsViewMyLearningSection',
  MY_ANALYTICS_VIEW_MY_ASSESSMENT_SECTION = 'myAnalyticsViewMyAssessmentSection',
  MY_ANALYTICS_VIEW_MY_REFACTORING_SECTION = 'myAnalyticsViewMyRefactoringSection',
  MY_ANALYTICS_VIEW_MY_PLANS_SECTION = 'myAnalyticsViewMyPlansSection',
  MY_ANALYTICS_VIEW_MY_COLLABORATORS_SECTION = 'myAnalyticsViewMyCollaboratorsSection',
  MY_ANALYTICS_VIEW_MY_FEATURES_USAGE_SECTION = 'myAnalyticsViewTopCoursesSection',
  MY_ANALYTICS_VIEW_MY_LEARNING_MINUTES = 'myAnalyticsViewMyLearningMinutes',
  MY_ANALYTICS_VIEW_MY_LEARNING_POINTS = 'myAnalyticsViewMyLearningPoints',
  MY_ANALYTICS_VIEW_BADGES = 'myAnalyticsViewBadges',
  MY_ANALYTICS_VIEW_TIME_SPENT_BY_USER = 'myAnalyticsViewTimeSpentByUser',
  MY_ANALYTICS_VIEW_AVERAGE_MINUTES_ON_LEX = 'myAnalyticsViewAverageMinutesOnLex',
  MY_ANALYTICS_VIEW_AVERAGE_MINUTES_ACROSS_DIMENSIONS = 'myAnalyticsViewAverageMinutesAcrossDimensions',
  MY_ANALYTICS_VIEW_PERCENTAGE_TIME_SPENT_BY_USER = 'myAnalyticsViewPercentageTimeSpentByUser',
  MY_ANALYTICS_VIEW_PERCENTAGE_TIME_SPENT_BY_INFOSCIONS = 'myAnalyticsViewPercentageTimeSpentByInfoscions',
  MY_ANALYTICS_VIEW_PERCENTAGE_TIME_SPENT_BY_PEERS = 'myAnalyticsViewPercentageTimeSpentByPeers',
  MY_ANALYTICS_VIEW_TOTAL_ASSESSMENTS = 'myAnalyticsViewTotalAssessments',
  MY_ANALYTICS_VIEW_PENDING_ASSESSMENTS = 'myAnalyticsViewPendingAssessments',
  MY_ANALYTICS_VIEW_CERTIFICATIONS = 'myAnalyticsViewCertifications',
  MY_ANALYTICS_VIEW_ASSESSMENTS = 'myAnalyticsViewAssessments',
  MY_ANALYTICS_VIEW_RECENT_ASSESSMENTS = 'myAnalyticsViewRecentAssessments',
  MY_ANALYTICS_VIEW_ASSESSMENT_DETAILS = 'myAnalyticsViewAssessmentDetails',
  MY_ANALYTICS_VIEW_RECENT_ASSESSMENT = 'myAnalyticsViewRecentAssessment',
  MY_ANALYTICS_VIEW_MY_REFACTORING_PROGRAM = 'myAnalyticsViewMyRefactoringProgram',
  MY_ANALYTICS_VIEW_NAVIGATOR = 'myAnalyticsViewNavigator',
  MY_ANALYTICS_VIEW_AI_AND_AUTOMATION_PROGRESS = 'myAnalyticsViewAiAndAutomationProcess',
  MY_ANALYTICS_VIEW_MY_GOALS = 'myAnalyticsViewMyGoals',
  MY_ANALYTICS_VIEW_PLAYLIST = 'myAnalyticsViewPlaylist',
  MY_ANALYTICS_VIEW_GOALS_SHARED_WITH_USER = 'myAnalyticsViewGoalsSharedWithUser',
  MY_ANALYTICS_VIEW_DETAILED_COURSES_PROGRESS = 'myAnalyticsViewDetailedCoursesProgress',
  MY_ANALYTICS_VIEW_GOALS_SHARED_BY_USER = 'myAnalyticsViewGoalsSharedByUser',
  MY_ANALYTICS_VIEW_ARTIFACTS_SHARED_BY_USER = 'myAnalyticsViewArtifactsSharedByUser',
  MY_ANALYTICS_VIEW_EXPERTS_USER_CONTACTED = 'myAnalyticsViewExpertsUserContacted',
  MY_ANALYTICS_VIEW_DETAILED_GOALS_SHARING = 'myAnalyticsViewDetailedGoalsSharing',
  MY_ANALYTICS_VIEW_PLAYGROUNDS = 'myAnalyticsViewPlaygrounds',
  MY_ANALYTICS_VIEW_LIKES = 'myAnalyticsViewLikes',
  MY_ANALYTICS_VIEW_SEARCH = 'myAnalyticsViewSearch',
  MY_ANALYTICS_VIEW_INFY_TV = 'myAnalyticsViewInfyTv',
  MY_ANALYTICS_VIEW_INFY_RADIO = 'myAnalyticsViewInfyRadio',
  MY_ANALYTICS_VIEW_INFY_LIVE = 'myAnalyticsViewInfyLive',
  MY_ANALYTICS_VIEW_TOP_COURSES_BY_USER_UNIT = 'myAnalyticsViewTopCoursesByUserUnit',
  MY_ANALYTICS_VIEW_TOP_COURSES_BY_USER_PEERS = 'myAnalyticsViewTopCoursesbyUserPeers',

  // Learning Analytics
  LEARNING_ANALYTICS = 'learningAnalytics',
  LEARNING_ANALYTICS_SEARCH_FOR_PARTICIPANTS_AND_EDUCATORS = 'learningAnalyticsSearchForParticipantsAndEducators',
  LEARNING_ANALYTICS_UNIT_FILTER = 'learningAnalyticsUnitFilter',
  LEARNING_ANALYTICS_PU_FILTER = 'learningAnalyticsPuFilter',
  LEARNING_ANALYTICS_DU_FILTER = 'learningAnalyticsDuFilter',
  LEARNING_ANALYTICS_ACCOUNT_FILTER = 'learningAnalyticsAccountFilter',
  LEARNING_ANALYTICS_LOCATION_FILTER = 'learningAnalyticsLocationFilter',
  LEARNING_ANALYTICS_QUARTER_FILTER = 'learningAnalyticsQuarterFilter',
  LEARNING_ANALYTICS_COMPLETED_FILTER = 'learningAnalyticsCompletedFilter',
  LEARNING_ANALYTICS_ETA_FILTER = 'learningAnalyticsEtaFilter',
  LEARNING_ANALYTICS_UNIQUE_USERS_DATA = 'learningAnalyticsUniqueUsersData',
  LEARNING_ANALYTICS_USERS_BY_ONSITE_OFFSHORE = 'learningAnalyticsUsersByOnsiteOffshore',
  LEARNING_ANALYTICS_USERS_BY_DEVICE_TYPE = 'learningAnalyticsUsersByDeviceType',
  LEARNING_ANALYTICS_USERS_BY_UNIT = 'learningAnalyticsUsersByUnit',
  LEARNING_ANALYTICS_USERS_BY_TRACK = 'learningAnalyticsUsersByTrack',
  LEARNING_ANALYTICS_USERS_BY_PU_SALES = 'learningAnalyticsUsersByPuSales',
  LEARNING_ANALYTICS_USERS_BY_CU_TYPE = 'learningAnalyticsUsersByCuType',
  LEARNING_ANALYTICS_USERS_BY_SKILL = 'learningAnalyticsUsersBySkill',
  LEARNING_ANALYTICS_USERS_BY_TOPICS = 'learningAnalyticsUsersByTopics',
  LEARNING_ANALYTICS_USERS_BY_HORIZON = 'learningAnalyticsUsersByHorizon',
  LEARNING_ANALYTICS_USERS_GROWTH = 'learningAnalyticsUsersGrowth',
  LEARNING_ANALYTICS_USERS_DETAILS = 'learningAnalyticsUsersDetails',
  LEARNING_ANALYTICS_VIEW_ALL_TRAININGS_SECTION = 'learningAnalyticsViewAllTrainingsSection',
  LEARNING_ANALYTICS_TALENT_GRID_FILTER = 'learningAnalyticstalentGridFilter',
  LEARNING_ANALYTICS_STACK_FILTER = 'learningAnalyticsStackFilter',
  LEARNING_ANALYTICS_UNIQUE_PARTICIPANTS = 'learningAnalyticsUniqueParticipants',
  LEARNING_ANALYTICS_OVERALL_PARTICIPANTS = 'learningAnalyticsOverallParticipants',
  LEARNING_ANALYTICS_AVERAGE_DAYS = 'learningAnalyticsAverageDays',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_ONSITE_ONSHORE = 'learningAnalyticsParticipantsByOnsiteOnshore',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_UNIT = 'learningAnalyticsParticipantsByUnit',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_PU = 'learningAnalyticsParticipantsByPu',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_SKILL_TYPE = 'learningAnalyticsParticipantsBySkillType',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_SKILL = 'learningAnalyticsParticipantsBySkill',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_STACKS = 'learningAnalyticsParticipantsByStacks',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_NEW_SERVICES = 'learningAnalyticsParticipantsByNewServices',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_LEARNING_TRACK = 'learningAnalyticsParticipantsByLearningTrack',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_OFFERING_MODE = 'learningAnalyticsParticipantsByOfferingMode',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_TOPICS = 'learningAnalyticsParticipantsByTopics',
  LEARNING_ANALYTICS_PARTICIPANTS_BY_ABCD = 'learningAnalyticsParticipantsByAbcd',
  LEARNING_ANALYTICS_PARTICIPANTS_DETAILS = 'learningAnalyticsParticipantsDetails',
  LEARNING_ANALYTICS_SCHEDULES_SECTION = 'learningAnalyticsSchedulesSection',
  LEARNING_ANALYTICS_SCHEDULE_DATE_FILTER = 'learningAnalyticsScheduleDateFilter',
  LEARNING_ANALYTICS_PARTICIPANTS = 'learningAnalyticsParticipants',
  LEARNING_ANALYTICS_EDUCATORS = 'learningAnalyticsEducators',
  LEARNING_ANALYTICS_COURSES = 'learningAnalyticsCourses',
  LEARNING_ANALYTICS_SCHEDULES = 'learningAnalyticsSchedules',
  LEARNING_ANALYTICS_VIEW_TRAINING_SCHEDULES_SECTION = 'learningAnalyticsTrainingSchedulesSection',
  LEARNING_ANALYTICS_COURSES_BY_OFFERING_MODE = 'learningAnalyticsCoursesByOfferingMode',
  LEARNING_ANALYTICS_COURSES_BY_TRACK = 'learningAnalyticsCoursesByTrack',
  LEARNING_ANALYTICS_COURSES_BY_TOPIC = 'learningAnalyticsCoursesByTopic',
  LEARNING_ANALYTICS_COURSES_BY_ABCD = 'learningAnalyticsCoursesByAbcd',
  LEARNING_ANALYTICS_COURSES_BY_SKILL = 'learningAnalyticsCoursesBySkill',

  // Apps Page
  APPS_PAGE = 'appsPage',
  APPS_PAGE_VIEW_DIFFERENT_APPS_ICONS = 'appsPageViewDifferentAppsIcons',

  // Course Card
  COURSE_CARD = 'courseCard',
  COURSE_CARD_LIKE_THE_COURSE_BUTTON = 'courseCardLikeTheCourseButton',
  COURSE_CARD_SHARE_THE_COURSE_BUTTON = 'courseCardShareTheCourseButton',
  COURSE_CARD_ADD_COURSE_TO_GOALS_BUTTON = 'courseCardAddCourseToGoalsButton',
  COURSE_CARD_ADD_COURSE_TO_PLAYLIST_BUTTON = 'courseCardAddCourseToPlaylistButton',
  COURSE_CARD_VIEW_MORE_OPTIONS_BUTTON = 'courseCardViewMoreOptionsButton',
  COURSE_CARD_START_COURSE_OPTION = 'courseCardStartCourseOption',
  COURSE_CARD_VIEW_TOC_OPTION = 'courseCardViewTocOption',
  COURSE_CARD_COHORTS_OPTION = 'courseCardCohortsOption',
  COURSE_CARD_ANALYTICS_OPTION = 'courseCardAnalyticsOption',

  // Search Results Page
  SEARCH_RESULTS_PAGE = 'searchResultsPage',
  SEARCH_RESULTS_PAGE_VIEW_LEARNING_SECTION = 'searchResultsPageViewLearningSection',
  SEARCH_RESULTS_PAGE_VIEW_CERTIFICATIONS_SECTION = 'searchResultsPageViewCertificationsSection',
  SEARCH_RESULTS_PAGE_VIEW_KNOWLEDGE_SECTION = 'searchResultsPageViewKnowledgeSection',
  SEARCH_RESULTS_PAGE_VIEW_PROJECTS_SECTION = 'searchResultsPageViewProjectsSection',
  SEARCH_RESULTS_PAGE_VIEW_SOCIAL_SECTION = 'searchResultsPageViewSocialSection',
  SEARCH_RESULTS_PAGE_CATALOG_FILTER = 'searchResultsPageCatalogFilter',
  SEARCH_RESULTS_PAGE_DURATION_FILTER = 'searchResultsPageDurationFilter',
  SEARCH_RESULTS_PAGE_CONTENT_TYPE_FILTER = 'searchResultsPageContentTypeFilter',
  SEARCH_RESULTS_PAGE_LEVEL_FILTER = 'searchResultsPageLevelFilter',
  SEARCH_RESULTS_PAGE_SOURCE_FILTER = 'searchResultsPageSourceFilter',
  SEARCH_RESULTS_PAGE_UNIT_FILTER = 'searchResultsPageUnitFilter',
  SEARCH_RESULTS_PAGE_TYPE_FILTER = 'searchResultsPageTypeFilter',
  SEARCH_RESULTS_PAGE_PUBLISHED_DATE_FILTER = 'searchResultsPagePublishedDateFilter',
  SEARCH_RESULTS_PAGE_CATEGORY_FILTER = 'searchResultsPageCategoryFilter',
  SEARCH_RESULTS_PAGE_ITEM_TYPE_FILTER = 'searchResultsPageItemTypeFilter',
  SEARCH_RESULTS_PAGE_TOPICS_FILTER = 'searchResultsPageTopicsFilter',
  SEARCH_RESULTS_PAGE_AUTHORS_FILTER = 'searchResultsPageAuthorsFilter',
  SEARCH_RESULTS_PAGE_TAGS_FILTER = 'searchResultsPageTagsFilter',
  SEARCH_RESULTS_PAGE_GROUPS_FILTER = 'searchResultsPageGroupsFilter',
  SEARCH_RESULTS_PAGE_VIEW_RESULT_CARDS = 'searchResultsPageViewResultCards',
  SEARCH_RESULTS_PAGE_VIEW_RELATED_CONCEPTS = 'searchResultsPageViewRelatedConcepts',

  // Lab42 Pages
  LAB_42_INTERVIEW = 'interview',
  LAB_42_DIALOGUE = 'dialogue',
  LAB_42_STRATEGY_MAP = 'strategyMap',
  LAB_42_VIRTUAL_CLASSROOM = 'virtualClassroom',
  LAB_42_PROJECT_STACK = 'projectStack',
  LAB_42_LIVE_TRANSCRIBE = 'liveTranscribe',
  LAB_42_EPOCH = 'epoch',

  // Learning Assistant Pages
  LEARNING_ASSISTANT_MAQ = 'learning-assistant-maq',
  LEARNING_ASSISTANT_ILIPDP = 'learning-assistant-ilipdp',
}