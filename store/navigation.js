export const state = () => ({
    nav_items : [
        {
          name: 'خانه',
          icon: 'apps',
          to: '/',
          scrolled:false
        },
        {
          icon: 'la-user-friends',
          name: 'درباره من',
          to: '#about-me',
          scrolled:true
        } ,
        {
          icon: 'la-phone-volume',
          name: 'مهارت ها',
          to: '#skills',
          scrolled:true
        },
        {
          icon: 'la-phone-volume',
          name: 'نمونه کارها',
          to: '#work-samples',
          scrolled:true
        },
        {
          icon: 'la-phone-volume',
          name: 'تماس با من',
          to: '#contact-me',
          scrolled:true
        },
      ]
 
  });
  