import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const globalSettings = {
    token: {
        colorPrimary: '#18208D',
        colorBgContainer: '#fff',
        colorText: '#000000',
    },
    components: {
      Table: {
        "headerBg": "#18208D",
        "headerColor": "#ffffff",
      }
    },
    theme: {
      primaryColor: '#18208D',
      textColor: '#333',
      borderColor: '#ededed'
    },
    navigation: {
      teamShowcase:{
        link: '?page=tsteam-showcase',
        label: 'Team Showcase',
        icon: PhotoIcon
      },
      teamMember:{
        link: '?page=tsteam-showcase&path=team-member',
        label: 'Team Member',
        icon: UserCircleIcon
      }
    }
  };
  
export default globalSettings;  