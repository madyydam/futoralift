// Format the Google Drive open/view link to a preview link suitable for iframes
export const getPreviewLink = (link: string) => {
  let previewUrl = "";
  if (link.includes("id=")) {
    const id = link.match(/id=([^&?]+)/)?.[1];
    previewUrl = `https://drive.google.com/file/d/${id}/preview`;
  } else {
    previewUrl = link.replace(/\/view.*$/, "/preview").replace(/\/open.*$/, "/preview");
  }
  return previewUrl;
};

export interface Reel {
  id: string;
  title: string;
  driveLink: string;
  category: "gyms" | "cafes" | "cake-shops";
}

export const reelsData: Reel[] = [
  // Gyms
  { id: "gym-11", title: "Elite Performance", driveLink: getPreviewLink("https://drive.google.com/open?id=1PZJ5rsLO23oYdyRznP7IGtiKK81nJSce&usp=drive_copy"), category: "gyms" },
  { id: "gym-12", title: "Focus & Form", driveLink: getPreviewLink("https://drive.google.com/open?id=1IM9Bppq3iA_v2svV79tXwtpVMn9XSthn&usp=drive_copy"), category: "gyms" },
  { id: "gym-13", title: "Athlete Journey", driveLink: getPreviewLink("https://drive.google.com/open?id=1LrZfN8f7Zklik8zeYvB6ex1_sUHGii4H&usp=drive_copy"), category: "gyms" },
  { id: "gym-14", title: "Vibrant Energy", driveLink: getPreviewLink("https://drive.google.com/open?id=1ISrwvUjJoTZKlntpjmHpu9CQ1vtiW5n0&usp=drive_copy"), category: "gyms" },
  { id: "gym-15", title: "Gym Culture", driveLink: getPreviewLink("https://drive.google.com/open?id=1MSgGI3IrkyZkHBcXwQj-1TFkS3x6PTGF&usp=drive_copy"), category: "gyms" },
  { id: "gym-1", title: "Gym Marketing", driveLink: getPreviewLink("https://drive.google.com/open?id=15T3LoyB4Ytls5-Z18B2K8dj9nETDGjup&usp=drive_copy"), category: "gyms" },
  { id: "gym-2", title: "Fitness Showcase", driveLink: getPreviewLink("https://drive.google.com/open?id=15XpHMQdSgILXrPzSjFw2mq9DG13Dtv0o&usp=drive_copy"), category: "gyms" },
  { id: "gym-3", title: "Workout Highlights", driveLink: getPreviewLink("https://drive.google.com/open?id=14zihN6n8ypWPRNfbYSJ4EvPSmoavy6tF&usp=drive_copy"), category: "gyms" },
  { id: "gym-4", title: "Training Performance", driveLink: getPreviewLink("https://drive.google.com/open?id=15Vv8mn0aO6ojVAZVC2mnREYxKBh_Podw&usp=drive_copy"), category: "gyms" },
  { id: "gym-5", title: "Gym Community", driveLink: getPreviewLink("https://drive.google.com/open?id=14pzZC8tI1FDuHAhQLsN9x6tSCfN_WMP9&usp=drive_copy"), category: "gyms" },
  { id: "gym-6", title: "Transformation Story", driveLink: getPreviewLink("https://drive.google.com/open?id=15ToTO1j7YvjciEIavxyMrpzMSUl7VMK6&usp=drive_copy"), category: "gyms" },
  { id: "gym-7", title: "Expert Coaching", driveLink: getPreviewLink("https://drive.google.com/open?id=15TF8WTyejpK0CGnb5G6v7rgKC9DmPdrZ&usp=drive_copy"), category: "gyms" },
  { id: "gym-8", title: "Strength & Conditioning", driveLink: getPreviewLink("https://drive.google.com/open?id=14gLH4iX8vSayauL8LcGbLSvWjOvC5rVT&usp=drive_copy"), category: "gyms" },
  { id: "gym-9", title: "Gym Lifestyle", driveLink: getPreviewLink("https://drive.google.com/open?id=150VzBjJdAj2KqYsksaIqfsHB15yRw-ba&usp=drive_copy"), category: "gyms" },
  { id: "gym-10", title: "Pulse of the Gym", driveLink: getPreviewLink("https://drive.google.com/open?id=15JvyZTNsbD6JgsOCyq6PWStkGKiX20Pd&usp=drive_copy"), category: "gyms" },

  // Cake Shops
  { id: "cake-12", title: "Boutique Bakes", driveLink: getPreviewLink("https://drive.google.com/open?id=1O1vxY53H4Bj7E4Zhe-XQo94RUFE_2SMc&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-1", title: "Creative Bakes", driveLink: getPreviewLink("https://drive.google.com/open?id=1XrrZSVKVwreEUahTjPiS_99Lj7Hwe1EF&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-2", title: "Artisan Cakes", driveLink: getPreviewLink("https://drive.google.com/open?id=1HoMnqIAuxV80Ky47IeYnpH7KDkDG56EC&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-3", title: "Sweet Moments", driveLink: getPreviewLink("https://drive.google.com/open?id=1bOAORnLQlIOEQgm-Y2lscBpvu5TLVFuV&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-4", title: "Cake Design", driveLink: getPreviewLink("https://drive.google.com/open?id=1hD_h2msJSHycJgLgEw9oOl0CDsgVsi4A&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-5", title: "Masterpiece Cakes", driveLink: getPreviewLink("https://drive.google.com/open?id=1_ubU1WAqLSxNeeP5OsnWnRgHUO9Qu6EU&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-6", title: "Baking Joy", driveLink: getPreviewLink("https://drive.google.com/open?id=1JJCP86sLVQPUBHs2JkHm2QCU495mDtvM&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-7", title: "Sugar Art", driveLink: getPreviewLink("https://drive.google.com/open?id=1QSZEkXE1rANowq8bPuHHDcXd_BbmPEvj&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-8", title: "Sweet Creations", driveLink: getPreviewLink("https://drive.google.com/open?id=1g_jWtYcRzgkc5kPw5eZGM-IcwR42brsJ&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-9", title: "Celebration Cakes", driveLink: getPreviewLink("https://drive.google.com/open?id=1sHtDTCzLc7DPoTxs1WkBo6XJ48tze_-9&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-10", title: "Delicate Pastries", driveLink: getPreviewLink("https://drive.google.com/open?id=19UXk5eMwprNq99KTJcBuwJxZHu-aGE8l&usp=drive_copy"), category: "cake-shops" },
  { id: "cake-11", title: "Sweet Perfection", driveLink: getPreviewLink("https://drive.google.com/open?id=1SWf-3CX6QlCvWg8M3AfJyOobgYZu8Noh&usp=drive_copy"), category: "cake-shops" },

  // Cafés
  { id: "cafe-1", title: "Barista Skills", driveLink: getPreviewLink("https://drive.google.com/open?id=15b64TD8VOG-i6A6LYxN8b6aQ4NlOUK1T&usp=drive_copy"), category: "cafes" },
  { id: "cafe-2", title: "Brewing Joy", driveLink: getPreviewLink("https://drive.google.com/open?id=1nd2sQDxEgur_TS6GnGk68uAcAvjNGuI6&usp=drive_copy"), category: "cafes" },
  { id: "cafe-3", title: "Cafe Vibes", driveLink: getPreviewLink("https://drive.google.com/open?id=15uJQiCHMHDuQsamR5aA7UGjNGuxUsCiv&usp=drive_copy"), category: "cafes" },
  { id: "cafe-4", title: "Coffee Art", driveLink: getPreviewLink("https://drive.google.com/open?id=1COUwtoDHy4ABzok8jR6_42nL-kPfvb1w&usp=drive_copy"), category: "cafes" },
  { id: "cafe-5", title: "Morning Brew", driveLink: getPreviewLink("https://drive.google.com/open?id=171Wytb0Tf45yXhF6xvBaNA1C-BfxmQqV&usp=drive_copy"), category: "cafes" },
  { id: "cafe-6", title: "Elite Roasts", driveLink: getPreviewLink("https://drive.google.com/open?id=1x_jSJJM_-GixuZ4xxyh2AZ7WPc8Zem6f&usp=drive_copy"), category: "cafes" },
  { id: "cafe-7", title: "Cozy Corners", driveLink: getPreviewLink("https://drive.google.com/open?id=1azkrGjttFBnytwVVRcpSn64gQUKmjC3l&usp=drive_copy"), category: "cafes" },
  { id: "cafe-8", title: "Daily Dose", driveLink: getPreviewLink("https://drive.google.com/open?id=1OhbbplWZ7QnjxKV3Q-ozgfFJVc5Gf8_7&usp=drive_copy"), category: "cafes" },
  { id: "cafe-9", title: "Fresh Sips", driveLink: getPreviewLink("https://drive.google.com/open?id=1xEEVyQXv4KikgKAI6i8bSFwlYi7csFxi&usp=drive_copy"), category: "cafes" },
  { id: "cafe-10", title: "Bean to Cup", driveLink: getPreviewLink("https://drive.google.com/open?id=11sGGuZuu_2yeTeUPmdBgFU2fijPD2WNE&usp=drive_copy"), category: "cafes" },
  { id: "cafe-11", title: "Signature Blends", driveLink: getPreviewLink("https://drive.google.com/open?id=12I3BWrFKqh0tS16W_l4LBWKMOe18C9hD&usp=drive_copy"), category: "cafes" },
];
