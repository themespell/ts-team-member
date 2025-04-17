import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import {getTranslations} from "./translations.js";

const isPro = !!tsteam_settings.is_pro ?? false;

const translations = getTranslations();

const globalSettings = {
    token: {
        colorPrimary: '#703FD6',
        colorBgContainer: '#fff',
        colorText: '#000000',
    },
    components: {
      Table: {
        "headerBg": "#F3EAFB",
        "headerColor": "#111C5C",
        "headerBorderRadius": 15,
        "borderRadius": 15,
        "boxShadowSecondary": 0
      },
      Input: {
        "colorBorder": "#C1DAF8",
        "borderRadius": 12,
        "paddingBlock": 6,
        "paddingBlockLG": 8
      },
    },
    theme: {
      primaryColor: '#703FD6',
      textColor: '#333',
      borderColor: '#ededed',
      borderColorLight: '#DFD5F6'
    },
    navigation: {
      dashboard:{
        link: '?page=tsteam-showcase&path=dashboard',
        label: 'Dashboard',
        icon: PhotoIcon
      },
      teamShowcase:{
        link: '?page=tsteam-showcase',
        label: 'Team Showcase',
        icon: PhotoIcon
      },
      teamMember:{
        link: '?page=tsteam-showcase&path=team-member',
        label: 'Team Member',
        icon: UserCircleIcon
      },
    },
    topbar: {
      menuitems: {
          dashboard:{
              link: '?page=tsteam-showcase&path=dashboard',
              label: translations.dashboard,
          },
          teamShowcase:{
              link: '?page=tsteam-showcase',
              label: translations.teamShowcase,
          },
          teamMember:{
              link: '?page=tsteam-showcase&path=team-member',
              label: translations.teamMember,
          },
          tools:{
              link: '?page=tsteam-showcase&path=tools',
              label: translations.tools,
          },
          ...(isPro && {
              account:{
                  link: 'admin.php?page=tsteam-pro-account',
                  label: translations.account,
              }
          }),
          supportForum:{
              link: 'https://wordpress.org/support/plugin/ts-team-member',
              label: translations.supportForum,
          },
      },
        ...(isPro ? {} : {
            proLink: {
                link: 'https://themespell.com/ts-product/ts-team-member/',
                label: translations.getPro,
            }
        }),
      version: '1.0.3',
    }
  };
  
export default globalSettings;  