const key = 'FBFAB16F-25C5-9341-990C-AD91DB76D0B93DCF1D20-C437-4D6F-817C-1617AA774611';

async function GWAPIUser() {
  
  const response = await fetch(`https://api.guildwars2.com/v2/achievements/daily?access_token=${key}`);
  const data = await response.json();

  console.log(data);
};