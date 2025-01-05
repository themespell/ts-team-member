import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const globalSettings = {
    token: {
        colorPrimary: '#18208D',
        colorBgContainer: '#fff',
        colorText: '#000000',
    },
    components: {
      Table: {
        "headerBg": "#F1F5F9",
        "headerColor": "#111C5C",
        "headerBorderRadius": 15,
        "borderRadius": 15
      },
      Input: {
        "colorBorder": "#C1DAF8",
        "borderRadius": 12,
        "paddingBlock": 6,
        "paddingBlockLG": 8
      }
    },
    theme: {
      primaryColor: '#18208D',
      textColor: '#333',
      borderColor: '#ededed'
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
              label: 'Dashboard',
          },
          teamShowcase:{
              link: '?page=tsteam-showcase',
              label: 'Team Showcase',
          },
          teamMember:{
              link: '?page=tsteam-showcase&path=team-member',
              label: 'Team Member',
          },
          account:{
              link: 'admin.php?page=tsteam-pro-account',
              label: 'Account',
          },
          supportForum:{
              link: 'https://wordpress.org/support/plugin/ts-team-member',
              label: 'Support Forum',
          },
      },
       proLink: {
        link: 'https://themespell.com',
        label: 'Get Pro',
      },
      version: '1.0.1'
    }
  };
  
export default globalSettings;  