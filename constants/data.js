// Data constants for the Srishti News website

export const featuredNews = [
  {
    id: 1,
    title: "ଆଧାର ଲେଖିତ ବେଳେ କଣ କଣ ସାବଧାନତା ଅବଲମ୍ବନ କରିବେ",
    excerpt: "ଆଧାର କାର୍ଡ ନିର୍ମାଣ ବେଳେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସୂଚନା ଓ ନିୟମାବଳୀ",
    image:
      "data:image/svg+xml;base64," +
      btoa(
        '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#dc2626"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Aadhaar News</text></svg>'
      ),
    category: "Technology",
    date: "2 ଘଣ୍ଟା ପୂର୍ବେ",
  },
  {
    id: 2,
    title: "ମହିଳା ଅଧିକାର ଓ ସୁରକ୍ଷା ନିୟମ",
    excerpt: "ମହିଳାମାନଙ୍କ ପାଇଁ ନୂତନ ନିୟମ ଓ ସୁବିଧା ବିଷୟରେ ଜାଣନ୍ତୁ",
    image:
      "data:image/svg+xml;base64," +
      btoa(
        '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#059669"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Women Rights</text></svg>'
      ),
    category: "Social",
    date: "4 ଘଣ୍ଟା ପୂର୍ବେ",
  },
  {
    id: 3,
    title: "ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ନୂତନ ସଂସ୍କାର",
    excerpt: "ଓଡ଼ିଶାରେ ଶିକ୍ଷା ବ୍ୟବସ୍ଥାରେ ଆସିବାକୁ ଯାଉଥିବା ପରିବର୍ତ୍ତନ",
    image:
      "data:image/svg+xml;base64," +
      btoa(
        '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#7c3aed"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Education</text></svg>'
      ),
    category: "Education",
    date: "6 ଘଣ୍ଟା ପୂର୍ବେ",
  },
];

export const sideNews = [
  { title: "ବର୍ଷା ପାଇଁ ପ୍ରସ୍ତୁତି ନିଅନ୍ତୁ", time: "1 ଘଣ୍ଟା ପୂର୍ବେ" },
  { title: "କୃଷକଙ୍କ ପାଇଁ ନୂତନ ଯୋଜନା", time: "2 ଘଣ୍ଟା ପୂର୍ବେ" },
  { title: "ସ୍ୱାସ୍ଥ୍ୟ ସେବାରେ ଉନ୍ନତି", time: "3 ଘଣ୍ଟା ପୂର୍ବେ" },
  { title: "ଯୋଗାଯୋଗ ବ୍ୟବସ୍ଥାର ଉନ୍ନତି", time: "4 ଘଣ୍ଟା ପୂର୍ବେ" },
];

export const heroImage =
  "data:image/svg+xml;base64," +
  btoa(
    '<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1e40af"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="24" fill="white">Breaking News</text></svg>'
  );

// YouTube video data for the sidebar
export const featuredVideo = {
  videoId: "dQw4w9WgXcQ", // Replace with actual video ID
  title: "ଓଡ଼ିଶାର ସର୍ବଶେଷ ଖବର: ଆଜିର ପ୍ରମୁଖ ଘଟଣାବଳୀ",
  views: "25,847",
  timeAgo: "1 ଘଣ୍ଟା ପୂର୍ବେ",
  isLive: false
};

// Additional video playlist for future use
export const videoPlaylist = [
  {
    videoId: "dQw4w9WgXcQ",
    title: "ମୁଖ୍ୟମନ୍ତ୍ରୀଙ୍କ ସାମ୍ବାଦିକ ସମ୍ମିଳନୀ",
    views: "45,123",
    timeAgo: "3 ଘଣ୍ଟା ପୂର୍ବେ",
    isLive: false
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "ଆଜିର ପାଗ ପୂର୍ବାନୁମାନ",
    views: "12,543",
    timeAgo: "5 ଘଣ୍ଟା ପୂର୍ବେ",
    isLive: false
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "🔴 LIVE: କ୍ରିକେଟ୍ ମ୍ୟାଚ୍ ଅପଡେଟ୍",
    views: "8,432",
    timeAgo: "Now Live",
    isLive: true
  }
];