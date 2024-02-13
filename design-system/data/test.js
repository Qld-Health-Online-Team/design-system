// Site Infomation
const siteData = {
    root: 'src',
    locale: 'en',
    siteName: 'VITAM Docs',
    shortName: 'VITAM',
    description: 'VITAM is a front-end template with Vite for static websites.',
    url: 'https://vitam.pages.dev/',
    ogpImage: 'ogp.jpg',
    ogType: 'website',
    fbAppId: '',
    fbAdmins: '',
    twitterCard: 'summary_large_image',
    twitterSite: '@SiteAccount',
    themeColor: '#FFA800',
    backgroundColor: '#fff'
  };
  
  // Page Infomation
  const pagesData = {
    '/index.html': {
      locale: siteData.locale,
      title: `Development template for front-end | ${siteData.siteName}`,
      description: `Welcome to VITAM! ${siteData.description}`,
      url: `${siteData.url}`,
      ogpImage: siteData.ogpImage,
      ogType: siteData.ogType,
      fbAppId: siteData.fbAppId,
      fbAdmins: siteData.fbAdmins,
      twitterCard: siteData.twitterCard,
      twitterSite: siteData.twitterSite
    },
    '/sample/index.html': {
      locale: siteData.locale,
      title: `Smaple Page | ${siteData.siteName}`,
      description: `This is a sample page. ${siteData.description}`,
      url: `${siteData.url}/sampple/`,
      ogpImage: siteData.ogpImage,
      ogType: 'article',
      fbAppId: siteData.fbAppId,
      fbAdmins: siteData.fbAdmins,
      twitterCard: siteData.twitterCard,
      twitterSite: siteData.twitterSite
    },
  };
  
  export { siteData, pagesData };