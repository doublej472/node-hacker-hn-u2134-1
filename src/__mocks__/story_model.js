function getStories(storyType, storyCount) {
  if (storyType === 'new' && storyCount === '41') {
    return Promise.reject('Internal server error');
  }

  const stories = [
    {
      by: 'CrankyBear',
      descendants: 491,
      id: 21003773,
      kids: [],
      score: 1588,
      time: 1568801478,
      title:
        'Colorado Town Offers 1 Gbps for $60 After Years of Battling Comcast',
      type: 'story',
      url:
        'https://www.techdirt.com/articles/20190904/08392642916/colorado-town-offers-1-gbps-60-after-years-battling-comcast.shtml'
    },
    {
      by: 'maxdeviant',
      descendants: 2167,
      id: 20990583,
      kids: [],
      score: 1728,
      time: 1568686550,
      title: 'Richard M. Stallman resigns',
      type: 'story',
      url: 'https://www.fsf.org/news/richard-m-stallman-resigns'
    },
    {
      by: 'andygcook',
      descendants: 347,
      id: 20995200,
      kids: [],
      score: 846,
      time: 1568729124,
      title:
        'Gitlab More Than Doubles Valuation to $2.75B Ahead of Planned 2020 IPO',
      type: 'story',
      url:
        'https://www.forbes.com/sites/alexkonrad/2019/09/17/gitlab-doubles-valuation-to-nearly-3-billion/'
    },
    {
      by: 'hhs',
      descendants: 492,
      id: 21002745,
      kids: [],
      score: 670,
      time: 1568787003,
      title: 'Smart TVs sending sensitive user data to Netflix and Facebook',
      type: 'story',
      url: 'https://www.ft.com/content/23ab2f68-d957-11e9-8f9b-77216ebe1f17'
    },
    {
      by: 'ph0rque',
      descendants: 460,
      id: 21015964,
      kids: [],
      score: 600,
      time: 1568899903,
      title: 'Solar and Wind Power So Cheap They’re Outgrowing Subsidies',
      type: 'story',
      url:
        'https://www.bloomberg.com/news/features/2019-09-19/solar-and-wind-power-so-cheap-they-re-outgrowing-subsidies'
    }
  ];

  const dataset = storyType === 'best' ? stories : [];
  return Promise.resolve(dataset.slice(0, storyCount));
}

module.exports = {
  getStories
};
